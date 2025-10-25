import './smiletop.css'
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDocs, doc, updateDoc, deleteDoc, collection, query, where, orderBy, limit, startAfter, serverTimestamp, addDoc, setDoc } from "firebase/firestore";
import { Capi, Mensaje, Notificacion, savels, getls, removels, wiTema, infoo, fechaLetra,mis10 } from '../widev.js';

// ========================================
// 🔐 VARIABLES GLOBALES COMPACTAS
// ========================================
let userAuth = null;
let userData = null;
let currentMonth = new Date().toISOString().slice(0, 7);
let currentUser = 'todos';
let currentPage = 0;
let totalPages = 0;
let lastDoc = null;
let todasLasVentas = [];
let todosLosUsuarios = [];
let notasData = [];
let ITEMS_PER_PAGE = 7;
let todosLosTours = [];

// ========================================
// 🚀 INICIALIZACIÓN PRINCIPAL
// ========================================
onAuthStateChanged(auth, async user => {
    if (!user) return window.location.href = '/';
    userAuth = user;
    
    try {
        const wi = getls('wiSmileTop');
        if (wi) return await initAdmin(wi);
        
        const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
        if (busq.empty || busq.docs[0].data().rol !== 'smiletop') {
            Notificacion('No tienes permisos de administrador', 'error');
            return await signOut(auth);
        }
        
        const widt = busq.docs[0].data();
        savels('wiSmileTop', widt, 450);
        await initAdmin(widt);
    } catch (error) {
        console.error('Error auth:', error);
        Notificacion('Error al cargar aplicación', 'error');
    }
});

// ========================================
// 🏗️ INICIALIZAR ADMIN
// ========================================
async function initAdmin(data) {
    userData = data;
    console.log(`✅ Admin: ${data.nombre}`);
    
    $('.app').html(getHTML());
    infoo();
    
    try {
        await loadUsuarios();
        await loadVentas();
        await loadNotas();
        await loadTours();  // ← AGREGAR ESTA LÍNEA
        initEvents();
        renderTable();
        renderNotas();
        Notificacion('Dashboard cargado', 'success');
    } catch (error) {
        console.error('Error init:', error);
        Notificacion('Error al inicializar', 'error');
    }
}

// ========================================
// 🎨 HTML ESTRUCTURA COMPACTA
// ========================================
function getHTML() {
    return `
        <header class="admin-header">
            <div class="header-left">
                <div class="logo">
                    <i class="fas fa-chart-line"></i>
                    <h1>Administración de Tours Hawka & HClaudia</h1>
                </div>
            </div>
            <div class="header-right">
                <div class="witemas"></div>
                <div class="user-info">
                    <img src="${userData.imagen || './smile.png'}" alt="Avatar" class="user-avatar">
                    <span>${userData.nombre || 'Admin'}</span>
                </div>
                <button class="btn-logout bt_salir">
                    <i class="fas fa-sign-out-alt"></i>
                    Salir
                </button>
            </div>
        </header>

        <div class="content-grid">
            <main class="main-content">
                <section class="filters-bar">
                    <div class="filter-group">
                        <label><i class="fas fa-calendar"></i> Mes</label>
                        <select id="monthFilter">${getMonthOptions()}</select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-user"></i> Usuario</label>
                        <select id="userFilter">
                            <option value="todos">Todos los usuarios</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label><i class="fas fa-list"></i> Mostrar</label>
                        <select id="itemsFilter">
                            <option value="7" selected>7 ventas</option>
                            <option value="10">10 ventas</option>
                            <option value="20">20 ventas</option>
                            <option value="30">30 ventas</option>
                        </select>
                    </div>
                    <button class="btn-refresh bt_cargar">
                        <i class="fas fa-sync"></i>
                        Actualizar
                    </button>
                    <button class="btn-refresh bt_exportar">
                        <i class="fas fa-sync"></i>
                        Exportar Excel 
                    </button>
                </section>

                <section class="table-section">
                    <div class="table-header">
                        <h2><i class="fas fa-table"></i> Registro de Ventas</h2>
                        <div class="table-stats">
                            <span id="totalVentas">0 ventas</span>
                            <span id="totalIngresos">S/ 0.00</span>
                            <span id="totalPuntos">0 puntos</span>
                        </div>
                    </div>
                    
                    <div class="table-container" id="tableContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando ventas...</p>
                        </div>
                    </div>
                    
                    <div class="pagination" id="pagination" style="display: none;">
                        <button id="prevPage" class="btn-page">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="page-numbers" id="pageNumbers"></div>
                        <button id="nextPage" class="btn-page">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </section>

                <!-- GESTIÓN DE TOURS COMPACTA -->
                <section class="table-section">
                    <div class="table-header">
                        <h2><i class="fas fa-route"></i> Administrar Tours</h2>
                        <div class="table-stats">
                            <button id="refreshTours" class="btn-refresh" onclick="refreshToursFromDB()">
                                <i class="fas fa-sync"></i> Actualizar
                            </button>
                            <button id="addTour" class="btn-refresh">
                                <i class="fas fa-plus"></i> Agregar
                            </button>
                        </div>
                    </div>
                    
                    <div id="toursContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando tours...</p>
                        </div>
                    </div>
                </section>

            </main>

            <aside class="sidebar">
                <div class="notes-section">
                    <div class="notes-header">
                        <h3><i class="fas fa-sticky-note"></i> Notas</h3>
                        <button id="addNote" class="btn-add">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="notes-container" id="notesContainer">
                        <div class="loading-state">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Cargando notas...</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    `;
}

function getMonthOptions() {
    const options = [];
    const currentDate = new Date();
    
    for (let i = -6; i <= 5; i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        const value = date.toISOString().slice(0, 7);
        const label = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
        const selected = value === currentMonth ? 'selected' : '';
        options.push(`<option value="${value}" ${selected}>${Capi(label)}</option>`);
    }
    
    return options.join('');
}

// ========================================
// 📊 CARGAR DATOS OPTIMIZADO
// ========================================
async function loadUsuarios() {
    try {
        console.log('🔄 Cargando usuarios...');
        
        const cache = getls('usuariosSmileTop');
        if (cache && cache.length > 0) {
            todosLosUsuarios = cache;
            console.log(`✅ ${todosLosUsuarios.length} usuarios desde cache`);
            updateUserFilter();
            return;
        }

        const snapshot = await getDocs(query(collection(db, 'smiles'), where('rol', '==', 'smile')));
        todosLosUsuarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        console.log(`✅ ${todosLosUsuarios.length} usuarios cargados desde Firestore`);
        savels('usuariosSmileTop', todosLosUsuarios, 300);
        updateUserFilter();
    } catch (error) {
        console.error('❌ Error load usuarios:', error);
        Notificacion('Error al cargar usuarios', 'error');
    }
}

async function loadVentas(page = 0, resetPagination = true) {
    try {
        console.log(`🔄 Cargando ventas página ${page}...`);
        
        // Query base para el mes
        let q = query(
            collection(db, 'registrosdb'),
            where('fechaTour', '>=', currentMonth + '-01'),
            where('fechaTour', '<=', currentMonth + '-31'),
            orderBy('fechaTour', 'desc')
        );

        const snapshot = await getDocs(q);
        let ventasDelMes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Filtrar por usuario ANTES de la paginación
        if (currentUser !== 'todos') {
            ventasDelMes = ventasDelMes.filter(venta => venta.vendedor === currentUser);
            console.log(`🔍 Filtrado por usuario ${currentUser}: ${ventasDelMes.length} ventas`);
        }
        
        // Recalcular paginación basada en ventas filtradas
        totalPages = Math.ceil(ventasDelMes.length / ITEMS_PER_PAGE);
        
        // Si no hay ventas para este usuario, resetear página
        if (ventasDelMes.length === 0) {
            currentPage = 0;
            todasLasVentas = [];
            console.log('❌ No hay ventas para este filtro');
            return;
        }
        
        // Si la página actual está fuera de rango, ir a la primera página
        if (currentPage >= totalPages) {
            currentPage = 0;
        }
        
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        
        todasLasVentas = ventasDelMes.slice(startIndex, endIndex);
        
        console.log(`✅ ${todasLasVentas.length}/${ventasDelMes.length} ventas cargadas para página ${currentPage + 1}/${totalPages}`);
    } catch (error) {
        console.error('❌ Error load ventas:', error);
        Notificacion('Error al cargar ventas', 'error');
    }
}

async function refreshData() {
    try {
        console.log('🔄 Refrescando datos...');
        
        // Mostrar loading
        $('#tableContainer').html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `);
        
        // Resetear página al cambiar filtros
        currentPage = 0;
        
        // Recargar usuarios primero
        await loadUsuarios();
        
        // Luego cargar ventas con filtros actuales
        await loadVentas(currentPage);
        
        // Renderizar tabla
        renderTable();
        
        Notificacion('✅ Datos actualizados correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error refresh:', error);
        Notificacion('Error al actualizar datos', 'error');
    }
}

async function loadNotas() {
    try {
        console.log('🔄 Cargando notas...');
        
        // 🚀 CACHE PRIMERO
        const cache = getls('notasSmileTop');
        if (cache?.length > 0) {
            notasData = cache;
            console.log(`✅ ${notasData.length} notas desde cache`);
            renderNotas();
            return;
        }
        
        // 📡 DESDE FIREBASE
        const snapshot = await getDocs(collection(db, 'notas'));
        if (snapshot.empty) {
            console.log('📭 No hay notas, creando por defecto');
            notasData = [];
            renderNotas();
            return;
        }
        
        notasData = snapshot.docs.map(doc => ({
            id: doc.id,
            titulo: 'Noticias a trabajadores',
            contenido: doc.data().nota || '',
            editando: false,
            ...doc.data()
        }));
        
        // 💾 CACHE (12 horas)
        savels('notasSmileTop', notasData, 720);
        console.log(`✅ ${notasData.length} notas cargadas desde Firebase`);
        renderNotas();
        
    } catch (error) {
        console.error('❌ Error load notas:', error);
        notasData = [];
        renderNotas();
    }
}

// ========================================
// 🔄 ACTUALIZAR FILTROS
// ========================================
function updateUserFilter() {
    const filter = $('#userFilter');
    const current = filter.val();
    
    // Limpiar opciones excepto "Todos"
    filter.find('option:not([value="todos"])').remove();
    
    console.log('📋 Actualizando filtro de usuarios...');
    
    // Agregar todos los usuarios registrados
    todosLosUsuarios.forEach(usuario => {
        const nombre = usuario.nombre || usuario.usuario;
        filter.append(`<option value="${usuario.usuario}">${nombre}</option>`);
    });
    
    // Restaurar selección anterior
    if (current && filter.find(`option[value="${current}"]`).length) {
        filter.val(current);
    }
    
    console.log(`✅ ${filter.find('option').length - 1} usuarios en filtro`);
}

// ========================================
// 📋 RENDERIZAR TABLA OPTIMIZADA
// ========================================
function renderTable() {
    const container = $('#tableContainer');
    
    console.log(`📊 Renderizando ${todasLasVentas.length} ventas`);
    
    if (todasLasVentas.length === 0) {
        container.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${currentUser === 'todos' ? 'este mes' : 'este usuario en este mes'}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `);
        updateStats([], 0, 0);
        $('#pagination').hide();
        return;
    }
    
    const tableHTML = `
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-calendar"></i> Fecha</th>
                    <th><i class="fas fa-user"></i> Usuario</th>
                    <th><i class="fas fa-route"></i> Tipo Tour</th>
                    <th><i class="fas fa-users"></i> Pax</th>
                    <th><i class="fas fa-user"></i> Nombre</th>
                    <th><i class="fas fa-money-bill-wave"></i> M. Total</th>
                    <th><i class="fas fa-coins"></i> M. Individual</th>
                    <th><i class="fas fa-percentage"></i> Comisión</th>
                    <th><i class="fas fa-check-circle"></i> Pagado</th>
                    <th><i class="fas fa-chart-line"></i> Ganancia</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acciones</th>
                </tr>
            </thead>
            <tbody>
                ${todasLasVentas.map(venta => renderVentaRow(venta)).join('')}
            </tbody>
        </table>
    `;
    
    container.html(tableHTML);
    
    const totalIngresos = todasLasVentas.reduce((sum, v) => sum + (parseFloat(v.importeTotal) || 0), 0);
    const totalPuntos = todasLasVentas.reduce((sum, v) => sum + (parseInt(v.puntos) || 0), 0);
    
    updateStats(todasLasVentas, totalIngresos, totalPuntos);
    updatePagination();
}

function filtrarVentas() {
    let filtradas = todasLasVentas;
    
    // Filtrar por usuario si no es "todos"
    if (currentUser !== 'todos') {
        filtradas = filtradas.filter(venta => venta.vendedor === currentUser);
    }
    
    return filtradas;
}

function renderVentaRow(venta, editing = false) {
    const usuario = todosLosUsuarios.find(u => u.usuario === venta.vendedor || u.id === venta.vendedor);
    const fechaFormateada = venta.fechaTour ? new Date(venta.fechaTour).toLocaleDateString('es-ES') : 'Sin fecha';
    const montoIndividual = parseFloat(venta.precioUnitario) || 0;
    const montoTotal = parseFloat(venta.importeTotal) || 0;
    const comision = parseFloat(venta.comision) || (montoTotal * 0.1);
    const ganancia = parseFloat(venta.ganancia) || (montoTotal - comision);
    const puntos = parseInt(venta.puntos) || 0;
    
    if (editing) {
        return `
            <tr class="editing-row" data-id="${venta.id}">
                <td>${fechaFormateada}</td>
                <td class="user-cell">
                    <img src="${usuario?.imagen || './smile.png'}" class="avatar-small">
                    ${usuario?.nombre || usuario?.usuario || venta.vendedor}
                </td>
                <td class="tour-cell">${venta.tipoTour || 'Tour'}</td>
                <td class="money-cell">${venta.cantidadPax || '0'}</td>
                <td class="money-cell">${mis10(venta.nombreCliente) || 'Sin nombre'}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${montoTotal.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${montoIndividual.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${comision.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${Capi(venta.estadoPago) || 'No'}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${ganancia.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${puntos}"></td>
                <td class="actions-cell">
                    <button class="btn-action btn-save" onclick="saveVenta('${venta.id}')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-action btn-cancel" onclick="cancelEdit('${venta.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `;
    }
    
    return `
        <tr data-id="${venta.id}">
            <td>${fechaFormateada}</td>
            <td class="user-cell">
                <img src="${usuario?.imagen || './smile.png'}" class="avatar-small">
                ${usuario?.nombre || usuario?.usuario || venta.vendedor}
            </td>
            <td class="tour-cell">${venta.tipoTour || 'Tour'}</td>
            <td class="money-cell">${venta.cantidadPax || '0'}</td>
            <td class="money-cell">${mis10(venta.nombreCliente) || 'Sin nombre'}</td>
            <td class="money-cell">${montoTotal.toFixed(2)}</td>
            <td class="money-cell">${montoIndividual.toFixed(2)}</td>
            <td class="money-cell">${comision.toFixed(2)}</td>
            <td class="money-cell">${Capi(venta.estadoPago) || 'No'}</td>
            <td class="money-cell">${ganancia.toFixed(2)}</td>
            <td class="points-cell">${puntos}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${venta.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${venta.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `;
}

function updateStats(ventas, totalIngresos, totalPuntos) {
    $('#totalVentas').text(`${ventas.length} ${ventas.length === 1 ? 'venta' : 'ventas'}`);
    $('#totalIngresos').text(`S/ ${totalIngresos.toFixed(2)}`);
    $('#totalPuntos').text(`${totalPuntos} puntos`);
}

function updatePagination() {
    const pagination = $('#pagination');
    const prevBtn = $('#prevPage');
    const nextBtn = $('#nextPage');
    const pageNumbers = $('#pageNumbers');
    
    if (totalPages <= 1) {
        pagination.hide();
        return;
    }
    
    // Generar números de página como en smile.js
    let paginationHTML = '';
    const maxVisiblePages = 8;
    
    let startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);
    
    // Ajustar si estamos cerca del final
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(0, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const isActive = i === currentPage ? 'active' : '';
        paginationHTML += `
            <button class="btn-page page-number ${isActive}" data-page="${i}">
                ${i + 1}
            </button>
        `;
    }
    
    pageNumbers.html(paginationHTML);
    
    prevBtn.prop('disabled', currentPage === 0);
    nextBtn.prop('disabled', currentPage >= totalPages - 1);
    
    pagination.show();
}

// ========================================
// 🎯 GESTIÓN DE TOURS COMPLETA Y MEJORADA
// ========================================
async function loadTours() {
    try {
        console.log('🔄 Cargando tours...');
        
        // 🚀 VERIFICAR CACHE PRIMERO
        const cache = getls('toursSmileTop');
        if (cache && cache.length > 0) {
            todosLosTours = cache;
            console.log(`✅ ${todosLosTours.length} tours desde cache`);
            renderTours();
            return;
        }
        
        // Si no hay cache, cargar desde Firestore
        console.log('📡 Cargando desde Firestore...');
        const snapshot = await getDocs(collection(db, 'listatours'));
        
        if (snapshot.empty) {
            console.log('📭 No hay tours en Firestore');
            todosLosTours = [];
            renderTours();
            return;
        }
        
        todosLosTours = snapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data()
        }));
        
        // 💾 GUARDAR EN CACHE (5 minutos)
        savels('toursSmileTop', todosLosTours, 300);
        
        console.log(`✅ ${todosLosTours.length} tours cargados y guardados en cache`);
        renderTours();
        
    } catch (error) {
        console.error('❌ Error cargando tours:', error);
        Notificacion('Error al cargar tours', 'error');
        
        // Mostrar error en la interfaz
        $('#toursContainer').html(`
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color:#dc3545;font-size:48px;margin-bottom:15px;"></i>
                <h3>Error al cargar tours</h3>
                <p>No se pudieron cargar los tours desde la base de datos</p>
                <button onclick="loadTours()" class="btn-refresh" style="margin-top:15px;">
                    <i class="fas fa-sync"></i> Reintentar
                </button>
            </div>
        `);
    }
}

function renderTours() {
    console.log('🎨 Renderizando tours...', todosLosTours);
    
    const html = `
        <table class="sales-table">
            <thead>
                <tr>
                    <th><i class="fas fa-hashtag"></i> Num</th>
                    <th><i class="fas fa-route"></i> Tour</th>
                    <th><i class="fas fa-dollar-sign"></i> Precio (S/)</th>
                    <th><i class="fas fa-percentage"></i> Comisión</th>
                    <th><i class="fas fa-star"></i> Puntos</th>
                    <th><i class="fas fa-cogs"></i> Acción</th>
                </tr>
            </thead>
            <tbody id="toursTableBody">
                ${todosLosTours.length > 0 ? todosLosTours.map((t, index) => renderTourRow(t, index + 1)).join('') : `
                    <tr>
                        <td colspan="6" class="empty-cell" style="text-align:center;padding:40px;">
                            <i class="fas fa-route" style="font-size:48px;color:#ccc;margin-bottom:15px;"></i>
                            <p style="margin:0;color:#666;">No hay tours registrados</p>
                            <button onclick="showAddForm()" class="btn-refresh" style="margin-top:15px;">
                                <i class="fas fa-plus"></i> Agregar Primer Tour
                            </button>
                        </td>
                    </tr>
                `}
            </tbody>
        </table>
    `;
    
    $('#toursContainer').html(html);
    console.log('✅ Tours renderizados en interfaz');
}

// Actualizar función renderTourRow para mostrar el número desde la base de datos
function renderTourRow(tour, numero, editing = false) {
    // Usar tour.num si existe, sino usar numero secuencial
    const displayNum = tour.num || numero;
    
    if (editing) {
        return `
            <tr class="editing-row" data-id="${tour.id}">
                <td><strong>${displayNum}</strong></td>
                <td>
                    <input id="tourNombre" 
                           type="text" 
                           class="edit-input" 
                           placeholder="Ingresa el tour" 
                           value="${tour.tour || tour.nombre || ''}" 
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourPrecio" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Precio: Ingresa el valor" 
                           value="${tour.precio || ''}" 
                           step="0.01" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourComision" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Ingresa Comisión: 25.00" 
                           value="${tour.comision || ''}" 
                           step="0.01" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourPuntos" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Aquí también solo número: 50" 
                           value="${tour.puntos || ''}" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td class="actions-cell">
                    <button onclick="saveTour('${tour.id}', ${displayNum})" class="btn-action btn-save" title="Guardar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button onclick="cancelEditTour('${tour.id}')" class="btn-action btn-cancel" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `;
    }
    
    return `
        <tr data-id="${tour.id}">
            <td><strong>${displayNum}</strong></td>
            <td class="tour-name">${tour.tour || tour.nombre || 'Tour sin nombre'}</td>
            <td class="money-cell">${(tour.precio || 0).toFixed(2)}</td>
            <td class="money-cell">${(tour.comision || 0).toFixed(2)}</td>
            <td class="points-cell">${tour.puntos || 0}</td>
            <td class="actions-cell">
                <button onclick="editTour('${tour.id}')" class="btn-action btn-edit" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="delTour('${tour.id}')" class="btn-action btn-delete" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `;
}

function showAddForm() {
    // Agregar nueva fila para crear tour
    const newRow = `
        <tr class="editing-row new-tour-row">
            <td><strong>${todosLosTours.length + 1}</strong></td>
            <td>
                <input id="tourNombre" 
                       type="text" 
                       class="edit-input" 
                       placeholder="Ingresa el tour" 
                       value="" 
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td>
                <input id="tourPrecio" 
                       type="number" 
                       class="edit-input" 
                       placeholder="Precio: Ingresa el valor" 
                       value="" 
                       step="0.01" 
                       min="0"
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td>
                <input id="tourComision" 
                       type="number" 
                       class="edit-input" 
                       placeholder="Ingresa Comisión: 25.00" 
                       value="" 
                       step="0.01" 
                       min="0"
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td>
                <input id="tourPuntos" 
                       type="number" 
                       class="edit-input" 
                       placeholder="Aquí también solo número: 50" 
                       value="" 
                       min="0"
                       style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
            </td>
            <td class="actions-cell">
                <button onclick="saveTour('', ${todosLosTours.length + 1})" class="btn-action btn-save" title="Guardar">
                    <i class="fas fa-check"></i>
                </button>
                <button onclick="cancelAddTour()" class="btn-action btn-cancel" title="Cancelar">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `;
    
    // Si hay tours, agregar la nueva fila al final
    if (todosLosTours.length > 0) {
        $('#toursTableBody').append(newRow);
    } else {
        // Si no hay tours, reemplazar contenido vacío
        $('#toursTableBody').html(newRow);
    }
    
    // Focus en el primer campo
    setTimeout(() => $('#tourNombre').focus(), 100);
    Notificacion('📝 Agregando nuevo tour...', 'info');
}

// ========================================
// 🎯 FUNCIONES GLOBALES DE TOURS
// ========================================
window.editTour = function(id) {
    const tour = todosLosTours.find(t => t.id === id);
    if (!tour) return;
    
    const index = todosLosTours.findIndex(t => t.id === id) + 1;
    const row = $(`tr[data-id="${id}"]`);
    row.replaceWith(renderTourRow(tour, index, true));
    
    setTimeout(() => $('#tourNombre').focus(), 100);
    Notificacion('✏️ Editando tour...', 'info');
};

window.cancelEditTour = function(id) {
    renderTours();
    Notificacion('❌ Edición cancelada', 'info');
};

window.cancelAddTour = function() {
    if (todosLosTours.length > 0) {
        $('.new-tour-row').remove();
    } else {
        renderTours();
    }
    Notificacion('❌ Nuevo tour cancelado', 'info');
};

// Actualizar delTour para limpiar cache
window.delTour = async function(id) {
    const tour = todosLosTours.find(t => t.id === id);
    if (!tour) return;
    
    const confirmacion = confirm(`¿Eliminar el tour "${tour.tour || tour.nombre}"?\n\nEsta acción no se puede deshacer.`);
    if (!confirmacion) return;
    
    try {
        await deleteDoc(doc(db, 'listatours', id));
        
        // 🗑️ LIMPIAR CACHE Y RECARGAR
        removels('toursSmileTop');
        await loadTours();
        
        Notificacion('🗑️ Tour eliminado correctamente', 'success');
    } catch (error) {
        console.error('Error eliminar tour:', error);
        Notificacion('❌ Error al eliminar tour', 'error');
    }
};

// Agregar función para forzar recarga desde Firestore
window.refreshToursFromDB = async function() {
    console.log('🔄 Forzando recarga desde Firebase...');
    removels('toursSmileTop');
    await loadTours();
    Notificacion('✅ Tours actualizados desde Firebase', 'success');
};

// Actualizar la función saveTour para limpiar cache
window.saveTour = async function(id, numero) {
    const nombre = $('#tourNombre').val().trim();
    const precio = parseFloat($('#tourPrecio').val()) || 0;
    const comision = parseFloat($('#tourComision').val()) || 0;
    const puntos = parseInt($('#tourPuntos').val()) || 0;
    
    // Validaciones
    if (!nombre) {
        Notificacion('⚠️ El nombre del tour es obligatorio', 'error');
        $('#tourNombre').focus();
        return;
    }
    
    if (precio <= 0) {
        Notificacion('⚠️ El precio debe ser mayor a 0', 'error');
        $('#tourPrecio').focus();
        return;
    }
    
    try {
        if (id) {
            // ACTUALIZAR TOUR EXISTENTE
            const data = {
                activo: true,
                comision: comision,
                tour: nombre,
                precio: precio,
                puntos: puntos,
                actualizadoPor: userData.nombre || userData.usuario || 'Admin',
                fecha: serverTimestamp()
            };
            
            await updateDoc(doc(db, 'listatours', id), data);
            Notificacion('✅ Tour actualizado correctamente', 'success');
            
        } else {
            // CREAR NUEVO TOUR
            const nextNum = todosLosTours.length > 0 
                ? Math.max(...todosLosTours.map(t => t.num || 0)) + 1 
                : 1;
            
            const data = {
                activo: true,
                comision: comision,
                tour: nombre,
                precio: precio,
                puntos: puntos,
                num: nextNum,
                creadoPor: userData.nombre || userData.usuario || 'Admin',
                actualizadoPor: userData.nombre || userData.usuario || 'Admin',
                fecha: serverTimestamp()
            };
            
            const docId = Date.now().toString();
            await setDoc(doc(db, 'listatours', docId), data);
            
            Notificacion(`✅ Tour #${nextNum} creado correctamente`, 'success');
        }
        
        // 🗑️ LIMPIAR CACHE Y RECARGAR
        removels('toursSmileTop');
        await loadTours();
        
    } catch (error) {
        console.error('❌ Error guardar tour:', error);
        Notificacion('❌ Error al guardar tour: ' + error.message, 'error');
    }
};

window.showAddForm = showAddForm;

// AGREGAR función global para debugging
window.loadTours = loadTours;

// ========================================
// 📝 RENDERIZAR NOTAS
// ========================================
function renderNotas() {
    const container = $('#notesContainer');
    
    if (!notasData || notasData.length === 0) {
        container.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);
        return;
    }
    
    const notasHTML = notasData.map(nota => `
        <div class="note-item" data-id="${nota.id}">
            <h4>${nota.titulo || 'Nota'}</h4>
            <textarea 
                class="note-content" 
                ${!nota.editando ? 'disabled' : ''} 
                placeholder="Escribe aquí tu nota..."
            >${nota.nota || nota.contenido || ''}</textarea>
            <div class="note-actions">
                ${nota.editando ? `
                    <button class="btn-save" onclick="saveNota('${nota.id}')">
                        <i class="fas fa-save"></i> 
                    </button>
                    <button class="btn-cancel" onclick="cancelNota('${nota.id}')">
                        <i class="fas fa-times"></i> 
                    </button>
                ` : `
                    <button class="btn-edit" onclick="editNota('${nota.id}')">
                        <i class="fas fa-edit"></i> 
                    </button>
                `}
            </div>
        </div>
    `).join('');
    
    container.html(notasHTML);
}


// ========================================
// ✏️ FUNCIONES GLOBALES 
// ========================================
window.viewVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) return;
    
    const usuario = todosLosUsuarios.find(u => u.usuario === venta.vendedor || u.id === venta.vendedor);
    const nombreCliente = venta.nombreCliente || 'Cliente';
    const nombreUsuario = usuario?.nombre || usuario?.usuario || venta.vendedor;
    
    Notificacion(`👁️ Viendo: ${nombreCliente} - Vendedor: ${nombreUsuario}`, 'info', 4000);
};

window.editVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) return;
    
    const row = $(`tr[data-id="${ventaId}"]`);
    row.replaceWith(renderVentaRow(venta, true));
    
    Notificacion('Modo edición activado', 'info');
};

window.saveVenta = async function(ventaId) {
    try {
        const row = $(`.editing-row[data-id="${ventaId}"]`);
        const updates = {};
        
        row.find('.edit-input').each(function() {
            const field = $(this).data('field');
            const value = $(this).val();
            updates[field] = field === 'puntos' ? parseInt(value) : parseFloat(value);
        });
        
        updates.actualizadoPor = userData.nombre || userData.usuario;
        updates.fechaActualizacion = serverTimestamp();
        
        await updateDoc(doc(db, 'registrosdb', ventaId), updates);
        
        // Actualizar datos locales
        const ventaIndex = todasLasVentas.findIndex(v => v.id === ventaId);
        if (ventaIndex !== -1) {
            Object.assign(todasLasVentas[ventaIndex], updates);
        }
        
        renderTable();
        Notificacion('✅ Venta actualizada correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error save venta:', error);
        Notificacion('Error al actualizar venta', 'error');
    }
};

window.cancelEdit = function(ventaId) {
    renderTable();
    Notificacion('Edición cancelada', 'info');
};

// ACTUALIZAR función editNota (línea 1080)
window.editNota = function(notaId) {
    console.log('📝 Editando nota:', notaId);
    const nota = notasData.find(n => n.id == notaId); // Usar == para comparación flexible
    if (nota) {
        nota.editando = true;
        renderNotas();
        
        // Focus en el textarea después de renderizar
        setTimeout(() => {
            $(`.note-item[data-id="${notaId}"] .note-content`).focus();
        }, 100);
        
        Notificacion('✏️ Editando nota...', 'info');
    } else {
        console.error('❌ Nota no encontrada:', notaId);
        Notificacion('❌ Error: Nota no encontrada', 'error');
    }
};


// ACTUALIZAR función saveNota (línea 1095)
window.saveNota = async function(notaId) {
    console.log('💾 Guardando nota:', notaId);
    
    const contenido = $(`.note-item[data-id="${notaId}"] .note-content`).val().trim();
    
    if (!contenido) {
        Notificacion('⚠️ La nota no puede estar vacía', 'error');
        $(`.note-item[data-id="${notaId}"] .note-content`).focus();
        return;
    }
    
    try {
        const data = {
            nota: contenido,
            creadoPor: userData.nombre || userData.usuario || 'Admin',
            actualizadoPor: userData.nombre || userData.usuario || 'Admin',
            fechaCreacion: serverTimestamp()
        };
        
        if (notaId && notaId !== 'new') {
            // ACTUALIZAR EXISTENTE
            await updateDoc(doc(db, 'notas', notaId.toString()), data);
            
            // Actualizar en array local
            const nota = notasData.find(n => n.id == notaId);
            if (nota) {
                nota.nota = contenido;
                nota.editando = false;
            }
            
            Notificacion('✅ Nota actualizada', 'success');
        } else {
            // CREAR NUEVA
            const docId = Date.now().toString();
            await setDoc(doc(db, 'notas', docId), data);
            
            // Remover nota temporal y agregar la real
            notasData = notasData.filter(n => n.id !== 'new');
            notasData.push({
                id: docId,
                titulo: 'Nota',
                nota: contenido,
                editando: false,
                ...data
            });
            
            Notificacion('✅ Nota creada', 'success');
        }
        
        // 🗑️ LIMPIAR CACHE Y RECARGAR
        removels('notasSmileTop');
        renderNotas();
        
    } catch (error) {
        console.error('❌ Error guardar nota:', error);
        Notificacion('❌ Error al guardar: ' + error.message, 'error');
    }
};

// ACTUALIZAR función cancelNota (línea 1140)
window.cancelNota = function(notaId) {
    console.log('❌ Cancelando edición:', notaId);
    
    if (notaId === 'new') {
        // REMOVER nota nueva
        notasData = notasData.filter(n => n.id !== 'new');
    } else {
        // CANCELAR edición
        const nota = notasData.find(n => n.id == notaId);
        if (nota) {
            nota.editando = false;
        }
    }
    
    renderNotas();
    Notificacion('❌ Edición cancelada', 'info');
};

// ...existing code...

// ========================================
// 📊 FUNCIÓN DE EXPORTACIÓN A EXCEL
// ========================================
async function exportToExcel() {
    try {
        console.log('📊 Exportando a Excel...');
        
        // Cargar todas las ventas del mes (sin paginación para export completo)
        let q = query(
            collection(db, 'registrosdb'),
            where('fechaTour', '>=', currentMonth + '-01'),
            where('fechaTour', '<=', currentMonth + '-31'),
            orderBy('fechaTour', 'desc')
        );
        
        const snapshot = await getDocs(q);
        let todasVentas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Filtrar por usuario si no es "todos"
        if (currentUser !== 'todos') {
            todasVentas = todasVentas.filter(venta => venta.vendedor === currentUser);
        }
        
        if (todasVentas.length === 0) {
            return Notificacion('❌ No hay datos para exportar', 'warning');
        }
        
        // Preparar datos para Excel
        const excelData = todasVentas.map(venta => {
            const usuario = todosLosUsuarios.find(u => u.usuario === venta.vendedor);
            const fechaFormateada = venta.fechaTour ? new Date(venta.fechaTour).toLocaleDateString('es-ES') : 'Sin fecha';
            const montoTotal = parseFloat(venta.importeTotal) || 0;
            const montoIndividual = parseFloat(venta.precioUnitario) || 0;
            const comision = parseFloat(venta.comision) || (montoTotal * 0.1);
            const ganancia = parseFloat(venta.ganancia) || (montoTotal - comision);
            
            return {
                'Fecha': fechaFormateada,
                'Usuario': usuario?.nombre || usuario?.usuario || venta.vendedor,
                'Tipo Tour': venta.tipoTour || 'Tour',
                'PAX': venta.cantidadPax || 0,
                'Nombre Cliente': venta.nombreCliente || 'Sin nombre',
                'Monto Total': montoTotal.toFixed(2),
                'Monto Individual': montoIndividual.toFixed(2),
                'Comisión': comision.toFixed(2),
                'Estado Pago': Capi(venta.estadoPago) || 'Pendiente',
                'Ganancia': ganancia.toFixed(2),
                'Puntos': parseInt(venta.puntos) || 0,
                'Hotel': venta.hotel || '',
                'Habitación': venta.numeroHabitacion || '',
                'Fecha Registro': venta.fechaRegistro ? new Date(venta.fechaRegistro.toDate()).toLocaleDateString('es-ES') : ''
            };
        });
        
        // Crear hoja de cálculo
        const ws = XLSX.utils.json_to_sheet(excelData);
        
        // Ajustar ancho de columnas
        const colWidths = [
            {wch: 12}, // Fecha
            {wch: 15}, // Usuario
            {wch: 20}, // Tipo Tour
            {wch: 8},  // PAX
            {wch: 25}, // Nombre Cliente
            {wch: 12}, // Monto Total
            {wch: 15}, // Monto Individual
            {wch: 12}, // Comisión
            {wch: 12}, // Estado Pago
            {wch: 12}, // Ganancia
            {wch: 8},  // Puntos
            {wch: 20}, // Hotel
            {wch: 10}, // Habitación
            {wch: 15}  // Fecha Registro
        ];
        ws['!cols'] = colWidths;
        
        // Crear libro
        const wb = XLSX.utils.book_new();
        
        // Nombre de la hoja
        const sheetName = currentUser === 'todos' 
            ? `Ventas_${currentMonth.replace('-', '_')}` 
            : `${currentUser}_${currentMonth.replace('-', '_')}`;
            
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        
        // Nombre del archivo
        const fileName = currentUser === 'todos' 
            ? `ventas_${currentMonth}_todas.xlsx`
            : `ventas_${currentMonth}_${currentUser}.xlsx`;
        
        // Descargar archivo
        XLSX.writeFile(wb, fileName);
        
        console.log(`✅ Excel exportado: ${fileName}`);
        Notificacion(`📊 Excel exportado: ${excelData.length} registros`, 'success');
        
    } catch (error) {
        console.error('❌ Error exportar Excel:', error);
        Notificacion('Error al exportar Excel', 'error');
    }
}

// ========================================
// 🎛️ EVENTOS ACTUALIZADOS
// ========================================
function initEvents() {
    // Logout
    $(document).on('click', '.bt_salir', async () => {
        try {
            await signOut(auth);
            window.location.href = '/';
            localStorage.clear();
        } catch (error) {
            console.error('Error logout:', error);
        }
    });
    
    // Actualizar el botón "Actualizar" para incluir tours (línea 1430)
    $(document).on('click', '.bt_cargar', async () => {
    removels('usuariosSmileTop');
    removels('toursSmileTop');
    removels('notasSmileTop'); // ← AGREGAR ESTA LÍNEA
    
    await refreshData();
    await loadTours();
    await loadNotas(); // ← AGREGAR ESTA LÍNEA
    });
    
    // 📊 EXPORTAR A EXCEL
    $(document).on('click', '.bt_exportar', async () => {
        await exportToExcel();
    });
    
    // Filtro de mes
    $(document).on('change', '#monthFilter', async function() {
        currentMonth = $(this).val();
        currentPage = 0;
        console.log(`📅 Cambiando a mes: ${currentMonth}`);
        await refreshData();
    });
    
    // Filtro de usuario
    $(document).on('change', '#userFilter', async function() {
        const newUser = $(this).val();
        if (newUser !== currentUser) {
            currentUser = newUser;
            currentPage = 0;
            console.log(`👤 Filtrando por usuario: ${currentUser}`);
            await refreshData();
        }
    });
    
    // ...existing pagination events...
    
    // Paginación - anterior
    $(document).on('click', '#prevPage', async () => {
        if (currentPage > 0) {
            currentPage--;
            await loadVentas(currentPage, false);
            renderTable();
        }
    });
    
    // Paginación - siguiente
    $(document).on('click', '#nextPage', async () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            await loadVentas(currentPage, false);
            renderTable();
        }
    });
    
    // Paginación - números
    $(document).on('click', '.page-number', async function() {
        const page = parseInt($(this).data('page'));
        if (page !== currentPage) {
            currentPage = page;
            await loadVentas(currentPage, false);
            renderTable();
        }
    });
    

// ACTUALIZAR función addNote (línea 1200)
$(document).on('click', '#addNote', () => {
    const nuevaNota = {
        id: 'new',
        titulo: 'Nueva Nota',
        contenido: '',
        editando: true,
        fechaCreacion: new Date().toISOString()
    };
    
    notasData.push(nuevaNota);
    renderNotas();
    Notificacion('📝 Agregando nueva nota...', 'info');
});

    // Filtro de cantidad
    $(document).on('change', '#itemsFilter', async function() {
        const newItems = parseInt($(this).val());
        if (newItems !== ITEMS_PER_PAGE) {
            ITEMS_PER_PAGE = newItems;
            currentPage = 0;
            console.log(`📊 Mostrando ${ITEMS_PER_PAGE} ventas por página`);
            await refreshData();
        }
    });

    $(document).on('click', '#addTour', () => showAddForm());

}

// ...existing code...

// ========================================
// 🚀 INICIALIZACIÓN FINAL
// ========================================
$(document).ready(() => {
    console.log('🚀 SmileTop Admin v2.0 iniciado');
    
    // Cargar biblioteca XLSX si no está disponible
    if (typeof XLSX === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
        script.onload = () => console.log('✅ Biblioteca XLSX cargada');
        document.head.appendChild(script);
    }
});

// ========================================
// 🚀 INICIALIZACIÓN FINAL
// ========================================
$(document).ready(() => {
    console.log('🚀 SmileTop Admin v2.0 iniciado');
});