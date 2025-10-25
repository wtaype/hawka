import './smile.css'
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js'; // Importa la configuración de Firebase desde tu archivo de inicialización
import { Capi, Mensaje, Notificacion, savels, getls, removels, accederRol, showLoading, witip, fechaLocal, calcularEdad } from '../widev.js'; //Tools  
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, getDoc, deleteDoc, onSnapshot, doc, collection, getDocs, serverTimestamp, query, where, orderBy, limit } from "firebase/firestore";


// 🔐 GESTIÓN DE AUTENTICACIÓN EN DASHBOARD
let userAuth = null; //Para guardar usuario

onAuthStateChanged(auth, async user => {
  if(!user) return window.location.href = '/'; // Seguridad default 
  userAuth = user; //Guardando usuario

  try{
    const wi = getls('wiSmile');
    if(wi) return smileContenido(wi); // Cache primero 

    const busq = await getDocs(query(collection(db, 'smiles'), where('usuario', '==', user.displayName)));
    const widt = busq.docs[0].data(); savels('wiSmile', widt, 450); smileContenido(widt); // Desde Online 
  }catch(e){console.error(e)}
});

$(document).on('click', '.bt_salir', async () => {
  await signOut(auth); window.location.href = '/';   // Cierra la sesión + Envia al inicio 
  try{localStorage.clear();}catch(_){Object.keys(localStorage).forEach(k=>localStorage.removeItem(k));} //Limpieza de localStorage
});

$(document).on('click','.tab-btn', function(){
    const activetb = $(this).data('tab');
    adrm(this, 'active'); adrm('#'+activetb+'-tab', 'active');

});

// En el evento click '.bt_cargar' (línea 30), ACTUALIZAR:
$(document).on('click','.bt_cargar',()=>{
  const pattern=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile)$/;
  Object.keys(localStorage).filter(k=>pattern.test(k)).forEach(k=>localStorage.removeItem(k));
  Mensaje('Actualizado'); setTimeout(()=>location.reload(),800);
});
// ...existing code...

// VARIABLES GLOBALES
let currentMonth = '2025-09';
let currentPage = 1;
let ventasPorPagina = 5;
let todasLasVentas = [];
let todosLosEmpleados = [];

// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]
function smileContenido(wi){
    console.log(wi.nombre); 
    Mensaje('Bienvenido ' + wi.nombre + '!');

    // HTML CONTENIDO [Start] 
    $('.app').html(`
         <!-- ===================================== -->
  <!-- HEADER -->
  <!-- ===================================== -->
  <header class="top-header">
    <div class="header-container">
      <div class="header-left">
        <h1><i class="fa-solid fa-hotel"></i> Hospedaje HClaudia</h1>
        <select id="mesFiltro" class="mes-selector">
          <option value="2024-08">Agosto 2024</option>
          <option value="2024-09">Septiembre 2024</option>
          <option value="2024-10" selected>Octubre 2024</option>
          <option value="2024-11">Noviembre 2024</option>
          <option value="2024-12">Diciembre 2024</option>
          <option value="2025-01">Enero 2025</option>
          <option value="2025-02">Febrero 2025</option>
          <option value="2025-03">Marzo 2025</option>
        </select>
      </div>
      <div class="header-right">
        <button class="btn-refresh" onclick="actualizarDatos()" title="Actualizar datos">
          <i class="fa-solid fa-sync-alt"></i>
        </button>
        <div class="witemas">
          <div class="tema mtha" data-theme="Dulce"></div>
          <div class="tema" data-theme="Cielo"></div>
          <div class="tema" data-theme="Paz"></div>
          <div class="tema" data-theme="Mora"></div>
          <div class="tema" data-theme="Futuro"></div>
        </div>
        <div class="user-info">
          <img src="https://i.pravatar.cc/150?img=5" alt="Usuario" class="user-avatar" style="width: 3.5vh; height: 3.5vh; border-radius: 50%; border: 0.2vh solid var(--txa);">
          <span id="currentUser">María González</span>
        </div>
        <button class="btn-logout" onclick="cerrarSesion()">
          <i class="fa-solid fa-sign-out-alt"></i>
          Cerrar Sesión
        </button>
      </div>
    </div>
  </header>

  <div class="miwp">
    <!-- ===================================== -->
    <!-- LAYOUT PRINCIPAL: 65% FORM | 1% SEP | 34% COLABS -->
    <!-- ===================================== -->
    <div class="main-layout">
      <!-- PANEL FORMULARIO (65%) -->
      <div class="form-panel">
        <div class="panel-header">
          <h2>
            <i class="fa-solid fa-clipboard-check"></i>
            Registro de Habitación
          </h2>
        </div>
        <div class="panel-body">
          <form id="registroForm">
            <div class="form-grid">
              <div class="form-group">
                <label><i class="fa-solid fa-building"></i> Registro en</label>
                <select id="registroEn" required>
                  <option value="HClaudia" selected>HClaudia</option>
                </select>
              </div>

              <div class="form-group span-2">
                <label><i class="fa-solid fa-user"></i> Nombre del Cliente</label>
                <input type="text" id="nombreCliente" placeholder="Nombre completo del cliente" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-id-card"></i> Tipo de Documento</label>
                <select id="tipoDocumento" required>
                  <option value="DNI" selected>DNI</option>
                  <option value="Carnet Extranjeria">Carnet Extranjería</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="RUC">RUC</option>
                </select>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-hashtag"></i> Número de Documento</label>
                <input type="text" id="numDocumento" placeholder="Ingrese documento" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-phone"></i> Celular</label>
                <input type="tel" id="celular" placeholder="Ej: 987654321" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-door-open"></i> Habitación</label>
                <input type="text" id="numHabitacion" placeholder="Ej: 101, 202, etc." required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-bed"></i> Tipo de Habitación</label>
                <select id="tipoHabitacion" required>
                  <option value="">Seleccione tipo...</option>
                  <option value="Simple">Simple</option>
                  <option value="Doble">Doble</option>
                  <option value="Triple">Triple</option>
                  <option value="Matrimonial">Matrimonial</option>
                  <option value="Matrimonial Queen">Matrimonial Queen</option>
                </select>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-dollar-sign"></i> Precio</label>
                <input type="number" id="precio" placeholder="Ej: 150.00" step="0.01" min="0" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-coins"></i> Moneda</label>
                <select id="moneda" required>
                  <option value="Soles" selected>Soles (S/)</option>
                  <option value="Dolares">Dólares (US$)</option>
                  <option value="Euros">Euros (€)</option>
                </select>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-credit-card"></i> Método de Pago</label>
                <select id="metodoPago" required>
                  <option value="Tarjeta" selected>Tarjeta Crédito/Débito</option>
                  <option value="Transferencia">Transferencia</option>
                  <option value="Yape">Yape</option>
                  <option value="Plin">Plin</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-calendar-days"></i> Días Reservados</label>
                <input type="number" id="diasReservados" value="1" min="1" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-calendar-day"></i> Check-in</label>
                <input type="date" id="fechaIngreso" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-calendar-check"></i> Check-out</label>
                <input type="date" id="fechaSalida" required>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-clipboard-list"></i> Fuente Reserva</label>
                <select id="tipoReserva" required>
                  <option value="Directo" selected>Directo</option>
                  <option value="BOOKING">BOOKING</option>
                  <option value="Airbnb">Airbnb</option>
                  <option value="Agencia">Agencia</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div class="form-group">
                <label><i class="fa-solid fa-hashtag"></i> Booking ID (Opcional)</label>
                <input type="text" id="bookingId" placeholder="Ej: 6144602996">
              </div>

              <div class="form-group span-2">
                <label><i class="fa-solid fa-pen"></i> Observaciones (Opcional)</label>
                <input id="observaciones" type="text" placeholder="Notas adicionales sobre la reserva..."/>
              </div>
            </div>

            <button type="submit" class="btn-save">
              <i class="fa-solid fa-check-circle"></i>
              Registrar Reserva
            </button>
          </form>
        </div>
      </div>

      <!-- SEPARADOR (1%) -->
      <div class="separator"></div>

      <!-- PANEL COLABORADORES (34%) -->
      <div class="colabs-panel">
        <div class="panel-header">
          <h2>
            <i class="fa-solid fa-users"></i>
            Colaboradores del Mes
          </h2>
        </div>
        <div class="panel-body">
          <div class="colabs-grid" id="colaboradoresGrid">
            <!-- Colaborador 1 -->
            <div class="colab-card">
              <div class="colab-header">
                <img src="https://i.pravatar.cc/150?img=5" alt="María" class="colab-avatar">
                <div class="colab-info">
                  <h3>María González</h3>
                  <p>Recepción Principal</p>
                </div>
              </div>
              <div class="colab-stats">
                <div class="stat-item">
                  <span class="stat-value" data-colaborador="María González">0</span>
                  <span class="stat-label">Registros</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value" data-colaborador-pct="María González">0%</span>
                  <span class="stat-label">Participación</span>
                </div>
              </div>
            </div>

            <!-- Colaborador 2 -->
            <div class="colab-card">
              <div class="colab-header">
                <img src="https://i.pravatar.cc/150?img=12" alt="Carlos" class="colab-avatar">
                <div class="colab-info">
                  <h3>Carlos Pérez</h3>
                  <p>Turno Tarde</p>
                </div>
              </div>
              <div class="colab-stats">
                <div class="stat-item">
                  <span class="stat-value" data-colaborador="Carlos Pérez">0</span>
                  <span class="stat-label">Registros</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value" data-colaborador-pct="Carlos Pérez">0%</span>
                  <span class="stat-label">Participación</span>
                </div>
              </div>
            </div>

            <!-- Colaborador 3 -->
            <div class="colab-card">
              <div class="colab-header">
                <img src="https://i.pravatar.cc/150?img=9" alt="Ana" class="colab-avatar">
                <div class="colab-info">
                  <h3>Ana Rodríguez</h3>
                  <p>Turno Noche</p>
                </div>
              </div>
              <div class="colab-stats">
                <div class="stat-item">
                  <span class="stat-value" data-colaborador="Ana Rodríguez">0</span>
                  <span class="stat-label">Registros</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value" data-colaborador-pct="Ana Rodríguez">0%</span>
                  <span class="stat-label">Participación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===================================== -->
    <!-- TARJETAS INFORMATIVAS -->
    <!-- ===================================== -->
    <div class="info-cards">
      <div class="info-card">
        <div class="card-icon" style="background: rgba(34, 197, 94, 0.1);">
          <i class="fa-solid fa-clipboard-check" style="color: #22c55e;"></i>
        </div>
        <div class="card-content">
          <span class="card-value" id="totalRegistros">0</span>
          <span class="card-label">Total Registros</span>
        </div>
      </div>

      <div class="info-card">
        <div class="card-icon" style="background: rgba(59, 130, 246, 0.1);">
          <i class="fa-solid fa-bed" style="color: #3b82f6;"></i>
        </div>
        <div class="card-content">
          <span class="card-value" id="habitacionesOcupadas">0</span>
          <span class="card-label">Habitaciones Ocupadas</span>
        </div>
      </div>

      <div class="info-card">
        <div class="card-icon" style="background: rgba(251, 191, 36, 0.1);">
          <i class="fa-solid fa-coins" style="color: #fbbf24;"></i>
        </div>
        <div class="card-content">
          <span class="card-value" id="ingresoTotal">S/ 0.00</span>
          <span class="card-label">Ingreso Total</span>
        </div>
      </div>

      <div class="info-card">
        <div class="card-icon" style="background: rgba(168, 85, 247, 0.1);">
          <i class="fa-solid fa-chart-line" style="color: #a855f7;"></i>
        </div>
        <div class="card-content">
          <span class="card-value" id="promedioNoche">S/ 0.00</span>
          <span class="card-label">Promedio por Noche</span>
        </div>
      </div>
    </div>

    <!-- ===================================== -->
    <!-- SECCIÓN DE REGISTROS -->
    <!-- ===================================== -->
    <div class="registros-section">
      <div class="section-header">
        <h2>
          <i class="fa-solid fa-list"></i>
          Historial de Registros
        </h2>
        
        <div class="filters-container">
          <div class="filter-group">
            <label>Colaborador</label>
            <select id="filterColaborador">
              <option value="">Todos</option>
              <option value="María González">María González</option>
              <option value="Carlos Pérez">Carlos Pérez</option>
              <option value="Ana Rodríguez">Ana Rodríguez</option>
            </select>
          </div>

          <div class="filter-group">
            <label>Mostrar</label>
            <select id="filterCantidad">
              <option value="5">5 registros</option>
              <option value="10">10 registros</option>
              <option value="15">15 registros</option>
              <option value="all">Todos</option>
            </select>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="registros-table">
          <thead>
            <tr>
              <th><i class="fa-solid fa-calendar"></i> Check-in</th>
              <th><i class="fa-solid fa-calendar"></i> Check-out</th>
              <th><i class="fa-solid fa-user"></i> Cliente</th>
              <th><i class="fa-solid fa-id-card"></i> Documento</th>
              <th><i class="fa-solid fa-door-open"></i> Hab.</th>
              <th><i class="fa-solid fa-bed"></i> Tipo</th>
              <th><i class="fa-solid fa-coins"></i> Precio</th>
              <th><i class="fa-solid fa-credit-card"></i> Método</th>
              <th><i class="fa-solid fa-clipboard-list"></i> Fuente</th>
              <th><i class="fa-solid fa-user-tie"></i> Registrado por</th>
              <th><i class="fa-solid fa-cogs"></i> Acciones</th>
            </tr>
          </thead>
          <tbody id="registrosTableBody">
            <tr>
              <td colspan="11" style="text-align: center; padding: 3vh; color: var(--bg2); font-style: italic;">
                No hay registros disponibles. Comience agregando una reserva.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pagination" id="paginationContainer">
        <!-- La paginación se generará dinámicamente -->
      </div>
    </div>
  </div>

  <!-- TOAST DE ÉXITO -->
  <div class="success-toast" id="successToast">
    <i class="fa-solid fa-circle-check"></i>
    <span>Registro guardado exitosamente</span>
  </div>

  <!-- AQUÍ VA EL JAVASCRIPT -->
  <script>
    /* El JavaScript irá en la última parte */
  </script>

<footer class='foo hwb txc'>
<p>Creado con<i class='wicon wi-corazon'></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class='wty'></span><span class='abw tm11042025' id='101542394703517594'>| Acerca del app | Actualizado</span><span class='wtu'></span></p>
</footer>
    `);

    // Inicializar datos
    inicializarDashboard(wi);
}

// AGREGAR función para cargar notas (línea 950)
async function cargarNotas() {
    try {
        console.log('🔄 Cargando notas admin...');
        
        // 🚀 CACHE PRIMERO
        const cache = getls('notasSmile');
        if (cache?.length > 0) {
            console.log(`✅ ${cache.length} notas desde cache`);
            renderizarNotas(cache);
            return;
        }
        
        // 📡 DESDE FIREBASE
        const snapshot = await getDocs(collection(db, 'notas'));
        if (snapshot.empty) {
            console.log('📭 No hay notas');
            renderizarNotas([]);
            return;
        }
        
        const notasData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        // 💾 CACHE (10 minutos)
        savels('notasSmile', notasData, 600);
        console.log(`✅ ${notasData.length} notas cargadas`);
        renderizarNotas(notasData);
        
    } catch (error) {
        console.error('❌ Error cargar notas:', error);
        renderizarNotas([]);
    }
}

// REEMPLAZAR función renderizarNotas (línea ~210)
function renderizarNotas(notas) {
    const html = notas.length > 0 ? `
        ${notas.map(nota => `<li>${nota.nota}</li>`).join('')}
        <div style="font-size:var(--fz_s2);padding:.5vh 0">
            <i class="fas fa-sync"></i> Última actualización: ${new Date().toLocaleTimeString('es-ES')}
        </div>
    ` : `
        <div style="color:#666;font-style:italic;text-align:center;padding:20px;">
            <i class="fas fa-info-circle"></i> No hay noticias disponibles
        </div>
    `;
    
    $('.descripcion_com').html(html);
}

// 📅 FUNCIÓN PARA OBTENER FECHA LOCAL CORRECTA
function obtenerFechaLocal() {
    const ahora = new Date();
    const year = ahora.getFullYear();
    const month = String(ahora.getMonth() + 1).padStart(2, '0');
    const day = String(ahora.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
// 📅 FUNCIÓN PARA FORMATEAR FECHA SIN ZONA HORARIA
function formatearFechaLocal(fechaString) {
    if (!fechaString) return 'Sin fecha';
    
    // DIVIDIR fecha sin crear objeto Date (evita zona horaria)
    const [year, month, day] = fechaString.split('-');
    return `${day}/${month}/${year}`;
}
// ACTUALIZAR FUNCIÓN DE INICIALIZACIÓN
async function inicializarDashboard(wi) {
    try {
        const mesActual = new Date().toISOString().slice(0, 7);
        currentMonth = mesActual;
        $('#monthSelector').val(mesActual);
        $('#fechaTour').val(obtenerFechaLocal()); 
        
        await Promise.all([
            cargarEmpleados(),
            cargarVentas(),
            cargarUltimoGanador(),
            cargarTours(),
            cargarNotas()  // ← AGREGAR ESTA LÍNEA
        ]);
        
        actualizarFiltroEmpleados();
        actualizarResumenCompetencia();
        
        // INICIALIZAR SELECTOR DE TOURS
        initTourSelector();
        
    } catch (error) {
        console.error('Error inicializando dashboard:', error);
        Notificacion('Error cargando datos del dashboard', 'error');
    }
}

// CARGAR EMPLEADOS OPTIMIZADO
async function cargarEmpleados() {
    try {
        // Verificar cache primero
        const empleadosCache = getls('empleadosSmile');
        if (empleadosCache) {
            todosLosEmpleados = empleadosCache;
            renderizarEmpleados();
        }

        // Obtener empleados que participan
        const empleadosQuery = query(collection(db, 'smiles'), where('participa', '==', 'si'));
        const empleadosSnapshot = await getDocs(empleadosQuery);
        
        todosLosEmpleados = empleadosSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Guardar en cache
        savels('empleadosSmile', todosLosEmpleados, 300);
        
        await calcularPuntosEmpleados();
        renderizarEmpleados();
        
    } catch (error) {
        console.error('Error cargando empleados:', error);
        $('#workersGrid').html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `);
    }
}

// CALCULAR PUNTOS DE EMPLEADOS
async function calcularPuntosEmpleados() {
    try {
        // Obtener ventas del mes actual
        const ventasSnapshot = await getDocs(collection(db, 'registrosdb'));
        
        // Filtrar por mes actual
        const ventasDelMes = ventasSnapshot.docs.filter(doc => {
            const venta = doc.data();
            return venta.fechaTour && venta.fechaTour.startsWith(currentMonth);
        });

        // Calcular puntos por empleado
        todosLosEmpleados.forEach(empleado => {
            const ventasEmpleado = ventasDelMes.filter(doc => 
                doc.data().vendedor === empleado.usuario
            );
            
            empleado.totalPuntos = ventasEmpleado.reduce((sum, doc) => 
                sum + (doc.data().puntos || 0), 0
            );
            empleado.totalVentas = ventasEmpleado.reduce((sum, doc) => 
                sum + (doc.data().qventa || 0), 0
            );
        });

        // Ordenar por puntos
        todosLosEmpleados.sort((a, b) => b.totalPuntos - a.totalPuntos);
        
    } catch (error) {
        console.error('Error calculando puntos:', error);
    }
}

// RENDERIZAR EMPLEADOS
function renderizarEmpleados() {
    const workersHTML = todosLosEmpleados.map((empleado, index) => {
        const rank = index + 1;
        const isChampion = rank === 1;
        const isRunnerUp = rank === 2;
        
        return `
            <div class="worker-card ${isChampion ? 'champion' : isRunnerUp ? 'runner-up' : ''}" data-employee="${empleado.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${isChampion ? 'crown' : isRunnerUp ? 'medal' : 'user'}"></i>
                    #${rank}
                </div>
                <div class="worker-avatar">
                    <img src="${empleado.imagen || '/smile.png'}" alt="${empleado.nombre}">
                    <div class="status-online"></div>
                </div>
                <div class="worker-info">
                    <h3>${empleado.nombre}</h3>
                    <p>${empleado.descripcion}</p>
                </div>
                <div class="worker-points">
                    <span class="points-number">${empleado.totalPuntos || 0}</span>
                    <span class="points-label">puntos</span>
                </div>
                <div class="worker-stats">
                    <div class="stat">
                        <span class="stat-value">${empleado.totalVentas || 0}</span>
                        <span class="stat-label">Tours Vendidos</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    $('#workersGrid').html(workersHTML);
}

// CARGAR VENTAS
async function cargarVentas() {
    try {
        const ventasSnapshot = await getDocs(collection(db, 'registrosdb'));
        todasLasVentas = ventasSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        // Ordenar por fecha más reciente
        todasLasVentas.sort((a, b) => {
            const fechaA = new Date(a.fechaTour || '1970-01-01');
            const fechaB = new Date(b.fechaTour || '1970-01-01');
            return fechaB - fechaA;
        });
        
        renderizarTablaVentas();
        
    } catch (error) {
        console.error('Error cargando ventas:', error);
        $('#salesTableBody').html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `);
    }
}

// FUNCIÓN ACTUALIZADA PARA RENDERIZAR TABLA DE VENTAS
function renderizarTablaVentas(filtroEmpleado = '', soloHoy = false) {
    let ventasFiltradas = [...todasLasVentas];
    
    // Filtrar por mes actual
    ventasFiltradas = ventasFiltradas.filter(venta => 
        venta.fechaTour && venta.fechaTour.startsWith(currentMonth)
    );
    
    // Filtrar por empleado
    if (filtroEmpleado) {
        ventasFiltradas = ventasFiltradas.filter(venta => 
            venta.vendedor === filtroEmpleado
        );
    }
    
    // Filtrar por hoy
    if (soloHoy) {
        const hoy = new Date().toISOString().split('T')[0];
        ventasFiltradas = ventasFiltradas.filter(venta => 
            venta.fechaTour === hoy
        );
    }
    
    // Paginación
    const totalPaginas = Math.ceil(ventasFiltradas.length / ventasPorPagina);
    const inicio = (currentPage - 1) * ventasPorPagina;
    const ventasPagina = ventasFiltradas.slice(inicio, inicio + ventasPorPagina);
    
    // Renderizar filas con nueva estructura
    const filas = ventasPagina.map(venta => {
        const esPropietario = venta.vendedor === userAuth?.displayName;
        const botones = esPropietario 
            ? `<button class="btn-view" onclick="verDetalleVenta('${venta.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${venta.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${venta.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`
            : `<button class="btn-view" onclick="verDetalleVenta('${venta.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`;
        
        // Formatear fecha
        const fechaFormateada = formatearFechaLocal(venta.fechaTour);
        
        // Cliente con habitación usando mis6
        const clienteInfo = `${mis10(venta.nombreCliente, 15)}${venta.numeroHabitacion ? ` <small>(${venta.numeroHabitacion}</small>)` : ''}`;
        
        // Calcular comisión (ejemplo: 10% del importe individual)
        
        return `
            <tr>
                <td>${fechaFormateada}</td>
                <td class="user-cell">
                    <img src="${todosLosEmpleados.find(emp => emp.usuario === venta.vendedor)?.imagen || '/smile.png'}" class="avatar-small">
                    <strong>${Capi(venta.vendedor)}</strong>
                </td>
                <td><span class="tour-badge">${venta.tipoTour}</span></td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${venta.cantidadPax}</span></td>
                <td>${clienteInfo}</td>
                <td><strong class="price">S/ ${(venta.importeTotal || 0).toFixed(2)}</strong></td>
                <td>S/ ${(venta.precioUnitario || 0).toFixed(2)}</td>
                <td><span class="status-badge ${(venta.estadoPago === 'pagado' || venta.estadoPago === 'cobrado') ? 'paid' : 'pending'}">
                    <i class="fas fa-${(venta.estadoPago === 'pagado' || venta.estadoPago === 'cobrado') ? 'check-circle' : 'clock'}"></i> 
                    ${obtenerEstadoSimplificado(venta.estadoPago)}
                </span></td>
                <td>S/ ${(venta.ganancia || 0).toFixed(2)}</td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${venta.puntos || 0}</span></td>
                <td><div class="action-buttons">${botones}</div></td>
            </tr>
        `;
    }).join('');
    
    $('#salesTableBody').html(filas || `<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>`);
    renderizarPaginacion(totalPaginas);
}

// 📋 FUNCIÓN PARA SIMPLIFICAR ESTADOS DE PAGO
function obtenerEstadoSimplificado(estadoPago) {
    const estados = {
        'pagado': 'PAGADO',
        'cobrado': 'PAGADO', 
        'cobrar': 'DEUDA'
    };
    return estados[estadoPago] || 'DEUDA';
}

// FUNCIÓN PARA OBTENER ETIQUETAS DE VENTAS ESPECIALES
function obtenerEtiquetasVentas(venta) {
    let etiquetas = [];
    
    if (venta.esVentaJulio) {
        etiquetas.push('<span class="venta-especial julio">Julio</span>');
    }
    if (venta.esVentaSonia) {
        etiquetas.push('<span class="venta-especial sonia">Sonia</span>');
    }
    if (venta.esVentaExterna) {
        etiquetas.push('<span class="venta-especial externa">Externa</span>');
    }
    
    return etiquetas.length > 0 ? etiquetas.join(' ') : '';
}

// RENDERIZAR PAGINACIÓN
function renderizarPaginacion(totalPaginas) {
    if (totalPaginas <= 1) {
        $('#paginationContainer').html('');
        return;
    }
    
    let paginationHTML = '<div class="pagination">';
    
    // Botón anterior
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="cambiarPagina(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i>
        </button>`;
    }
    
    // Números de página
    for (let i = 1; i <= totalPaginas; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="page-btn" onclick="cambiarPagina(${i})">${i}</button>`;
        }
    }
    
    // Botón siguiente
    if (currentPage < totalPaginas) {
        paginationHTML += `<button class="page-btn" onclick="cambiarPagina(${currentPage + 1})">
            <i class="fas fa-chevron-right"></i>
        </button>`;
    }
    
    paginationHTML += '</div>';
    $('#paginationContainer').html(paginationHTML);
}

// CARGAR ÚLTIMO GANADOR
async function cargarUltimoGanador() {
    try {
        // Calcular mes anterior
        const mesAnterior = calcularMesAnterior(currentMonth);
        const docId = `${mesAnterior.replace('-', '')}`;
        
        // Verificar si ya existe ganador registrado
        const ganadorDoc = await getDoc(doc(db, 'ganadores', docId));
        
        if (ganadorDoc.exists()) {
            // Ya existe ganador registrado
            renderizarUltimoGanador(ganadorDoc.data());
            return;
        }
        
        // No existe, calcular automáticamente
        const ventasSnapshot = await getDocs(collection(db, 'registrosdb'));
        const puntosVendedores = {};
        
        // Calcular puntos del mes anterior
        ventasSnapshot.docs.forEach(doc => {
            const venta = doc.data();
            if (venta.fechaTour?.startsWith(mesAnterior)) {
                const vendedor = venta.vendedor;
                if (!puntosVendedores[vendedor]) {
                    puntosVendedores[vendedor] = { puntos: 0, ventas: 0 };
                }
                puntosVendedores[vendedor].puntos += (venta.puntos || 0);
                puntosVendedores[vendedor].ventas += (venta.qventa || 0);
            }
        });
        
        // Encontrar ganador
        const vendedoresArray = Object.entries(puntosVendedores);
        if (vendedoresArray.length === 0) {
            $('#lastWinner').html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Ganador del Mes Anterior</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>No hay datos disponibles</span>
                </div>
            `);
            return;
        }
        
        // Ordenar y obtener ganador
        vendedoresArray.sort((a, b) => b[1].puntos - a[1].puntos);
        const [ganador, datos] = vendedoresArray[0];
        
        // Crear objeto ganador
        const [year, month] = mesAnterior.split('-');
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        const ganadorData = {
            ganador,
            puntosGanados: datos.puntos,
            totalVentas: datos.ventas,
            mes: meses[parseInt(month) - 1],
            year,
            mesCompleto: mesAnterior,
            fechaRegistro: serverTimestamp()
        };
        
        // Registrar en colección ganadores para futuras consultas
        await setDoc(doc(db, 'ganadores', docId), ganadorData);
        
        renderizarUltimoGanador(ganadorData);
        
    } catch (error) {
        console.error('Error:', error);
        $('#lastWinner').html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Ganador del Mes Anterior</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando datos</span>
            </div>
        `);
    }
}

// RENDERIZAR ÚLTIMO GANADOR
function renderizarUltimoGanador(ganadorData) {
    const empleado = todosLosEmpleados.find(emp => 
        emp.usuario === ganadorData.ganador || emp.nombre === ganadorData.ganador
    );
    
    $('#lastWinner').html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Ganador del Mes Anterior</h3>
        </div>
        <div class="winner-info">
            <img src="${empleado?.imagen || '/smile.png'}" 
                 alt="${empleado?.nombre || ganadorData.ganador}">
            <div class="winner-details">
                <h4>${empleado?.nombre || ganadorData.ganador}</h4>
                <p>${ganadorData.mes} ${ganadorData.year}</p>
                <span class="winner-points">${ganadorData.puntosGanados} puntos</span>
                <span class="winner-sales">${ganadorData.totalVentas} tours</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-crown"></i>
                <span>¡Campeón!</span>
            </div>
        </div>
    `);
}

// ACTUALIZAR RESUMEN DE COMPETENCIA
function actualizarResumenCompetencia() {
    const ventasDelMes = todasLasVentas.filter(venta => 
        venta.fechaTour && venta.fechaTour.startsWith(currentMonth)
    );
    
    const hoy = new Date().toISOString().split('T')[0];
    const ventasHoy = ventasDelMes.filter(venta => venta.fechaTour === hoy);
    
    const totalTours = ventasDelMes.reduce((sum, venta) => sum + (venta.qventa || 0), 0);
    const totalPuntos = ventasDelMes.reduce((sum, venta) => sum + (venta.puntos || 0), 0);
    const toursHoy = ventasHoy.reduce((sum, venta) => sum + (venta.qventa || 0), 0);
    const meta = 2500;
    
    // 📊 ACTUALIZAR VALORES
    $('#totalTours').text(totalTours);
    $('#totalPuntos').text(totalPuntos);
    $('#toursHoy').text(toursHoy);
    
    // 🎨 ACTUALIZAR CSS DINÁMICO - SÚPER COMPACTO
    const stats = [
        Math.min((toursHoy / 5) * 100, 100),      // Tours hoy %
        Math.min((totalTours / 50) * 100, 100),   // Total tours %
        Math.min((totalPuntos / meta) * 100, 100), // Puntos %
        100                                        // Meta 100%
    ];
    
    $('.summary-stat').each((i, el) => {
        const grados = (stats[i] / 100) * 360;
        $(el).css({
            '--progress': `${grados}deg`,
            '--width': `${stats[i]}%`
        });
    });
}

// ACTUALIZAR FILTRO DE EMPLEADOS
function actualizarFiltroEmpleados() {
    const empleadosOptions = todosLosEmpleados.map(emp => 
        `<option value="${emp.usuario}">${emp.nombre}</option>`
    ).join('');
    
    $('#filterEmployee').html(`
        <option value="">Todos los vendedores</option>
        ${empleadosOptions}
    `);
}

// Agregar después de la línea 776 (eventos auxiliares)
$(document).on('change', '#mostrarn', function() {
    ventasPorPagina = parseInt($(this).val());
    currentPage = 1;
    renderizarTablaVentas($('#filterEmployee').val());
});

// EVENTOS Y FUNCIONES AUXILIARES
$(document).on('change', '#monthSelector', function() {
    currentMonth = $(this).val();
    currentPage = 1;
    
    // Recargar datos para el nuevo mes
    Promise.all([
        calcularPuntosEmpleados(),
        cargarVentas()
    ]).then(() => {
        renderizarEmpleados();
        renderizarTablaVentas();
        actualizarResumenCompetencia();
        cargarUltimoGanador();
    });
});

$(document).on('change', '#filterEmployee', function() {
    currentPage = 1;
    renderizarTablaVentas($(this).val());
});

$(document).on('click', '#todayFilter', function() {
    currentPage = 1;
    renderizarTablaVentas($('#filterEmployee').val(), true);
});

// FUNCIONES GLOBALES PARA PAGINACIÓN Y ACCIONES
// FUNCIONES GLOBALES PARA PAGINACIÓN Y ACCIONES
window.cambiarPagina = function(pagina) {
    currentPage = pagina;
    renderizarTablaVentas($('#filterEmployee').val());
};

window.verDetalleVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) {
        Notificacion('Venta no encontrada', 'error');
        return;
    }
    
    // Cargar datos en el formulario (solo vista, no editable)
    cargarDatosEnFormulario(venta, true); // true = solo vista
    
    // Scroll al formulario
    document.querySelector('#formularioVenta').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
    
    Notificacion('Datos cargados para visualización', 'info');
};

window.editarVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) {
        Notificacion('Venta no encontrada', 'error');
        return;
    }
    
    // Cargar datos en el formulario (editable)
    cargarDatosEnFormulario(venta, false); // false = editable
    
    // Cambiar el botón de guardar a actualizar
    $('.btn-save').html('<i class="fas fa-edit"></i> Actualizar Venta').attr('data-edit-id', ventaId);
    
    // Scroll al formulario
    document.querySelector('#formularioVenta').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
    
    Notificacion('Datos cargados para edición', 'info');
};

window.eliminarVenta = function(ventaId) {
    const venta = todasLasVentas.find(v => v.id === ventaId);
    if (!venta) {
        Notificacion('Venta no encontrada', 'error');
        return;
    }
    
    // Primera confirmación
    const confirmacion1 = confirm(`¿Estás seguro de eliminar la venta de "${venta.nombreCliente}"?\n\nEsta acción NO se puede deshacer.`);
    
    if (!confirmacion1) return;
    
    // Segunda confirmación
    const confirmacion2 = confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️\n\nSe eliminará permanentemente:\n• Cliente: ${venta.nombreCliente}\n• Tour: ${venta.tipoTour}\n• Importe: S/ ${venta.importeTotal}\n\n¿CONFIRMAS LA ELIMINACIÓN?\n\nEsta acción es IRREVERSIBLE.`);
    
    if (!confirmacion2) return;
    
    // Proceder con la eliminación
    eliminarVentaCompleta(ventaId);
};


// FUNCIÓN ACTUALIZADA PARA CARGAR DATOS EN FORMULARIO
function cargarDatosEnFormulario(venta, soloVista = false) {
    limpiarEstadoFormulario();
    
    // Buscar y seleccionar el tour
    selTour = htours.find(t => 
        t.tour === venta.tipoTour || 
        venta.tipoTour.includes(t.tour.split(' ')[1]) // Búsqueda flexible
    );
    
    if (selTour) {
        $('#tourDisplay .tour-text').text(selTour.tour);
        $('#tipoTour').val(selTour.tour);
        // Marcar como seleccionado en tabla
        $(`.tour-row[data-tour*='"nt":${selTour.nt}']`).addClass('selected');
    } else {
        $('#tourDisplay .tour-text').text(venta.tipoTour || '🔍 Seleccionar tour...');
        $('#tipoTour').val(venta.tipoTour || '');
    }
    
    // Cargar resto de campos
    $('#registroEn').val(venta.registroEn);
    $('#nombreCliente').val(venta.nombreCliente);
    $('#numeroHabitacion').val(venta.numeroHabitacion || '');
    $('#tipoDocumento').val(venta.tipoDocumento || 'dni');
    $('#numeroDocumento').val(venta.numeroDocumento || '');
    $('#cantidadPax').val(venta.cantidadPax || 1);
    $('#precioUnitario').val(venta.precioUnitario || 0);
    $('#metodoPago').val(venta.metodoPago || '');
    $('#importeTotal').val(venta.importeTotal || 0);
    $('#ganancia').val(venta.ganancia || 0);
    calcularComision(); // Recalcular al cargar datos
    $('#horaSalida').val(venta.horaSalida);
    $('#Operador').val(venta.Operador);
    $('#PagoOperador').val(venta.PagoOperador || 0); // ← AGREGAR ESTA LÍNEA
    $('#Comentario').val(venta.Comentario);
    $('#fechaTour').val(venta.fechaTour);
    $('#estadoPago').val(venta.estadoPago || 'pagado');
    
    $('#vtJulio').prop('checked', venta.esVentaJulio || false);
    $('#vtSonia').prop('checked', venta.esVentaSonia || false);
    $('#vtExterna').prop('checked', venta.esVentaExterna || false);
    
    actualizarPuntosPreview();
    
    if (soloVista) {
        $('#formularioVenta input, #formularioVenta select, .tour-display').prop('disabled', true);
        $('.btn-save').prop('disabled', true).html('<i class="fas fa-eye"></i> Solo Vista');
        $('#formularioVenta').addClass('view-only');
        
        if ($('.btn-clear-view').length === 0) {
            $('.form-actions').prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `);
        }
    } else {
        $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
        $('.tour-display').prop('disabled', false);
        $('.btn-save').prop('disabled', false);
        $('#formularioVenta').addClass('edit-mode');
        
        if ($('.btn-cancel-edit').length === 0) {
            $('.form-actions').prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `);
        }
    }
}

// FUNCIÓN ACTUALIZADA PARA ACTUALIZAR PUNTOS
function actualizarPuntosPreview() {
    const pax = parseInt($('#cantidadPax').val()) || 1;
    const puntosBase = selTour ? selTour.pts : 0;
    
    const tieneVentaEspecial = $('#vtJulio').prop('checked') || 
                               $('#vtSonia').prop('checked') || 
                               $('#vtExterna').prop('checked');
    
    const puntosFinales = tieneVentaEspecial ? 0 : (puntosBase * pax);
    $('#vistaPreviaLaPuntos').text(puntosFinales);
}

// FUNCIÓN PARA LIMPIAR ESTADO DEL FORMULARIO
function limpiarEstadoFormulario() {
    // 💾 GUARDAR valores por defecto antes del reset
    const fechaHoy = obtenerFechaLocal(); // ← CAMBIO AQUÍ
    const paxDefecto = 1;
    
    selTour = null;
    $('#formularioVenta input, #formularioVenta select').prop('disabled', false);
    $('.btn-save').prop('disabled', false);
    $('#formularioVenta').removeClass('view-only edit-mode');
    $('.btn-save').html('<i class="fas fa-save"></i> Guardar Venta').removeAttr('data-edit-id');
    $('.btn-clear-view, .btn-cancel-edit').remove();
    $('#formularioVenta')[0].reset();
    
    // 🔄 RESTAURAR valores por defecto DESPUÉS del reset
    $('#cantidadPax').val(paxDefecto);
    $('#fechaTour').val(fechaHoy); // ← USAR FECHA CORREGIDA
    $('#vistaPreviaLaPuntos').text('0');
    $('#tourDisplay .tour-text').text('🔍 Seleccionar tour...');
    $('.tour-row').removeClass('selected');
    
    // 🔒 MANTENER campos disabled que deben estarlo
    $('#importeTotal').prop('disabled', true);
}

// FUNCIÓN PARA ELIMINAR VENTA COMPLETA
async function eliminarVentaCompleta(ventaId) {
    try {
        // Mostrar indicador de carga
        Notificacion('Eliminando venta...', 'info');
        
        // Eliminar de Firebase
        await deleteDoc(doc(db, 'registrosdb', ventaId));
        
        // Eliminar de localStorage (buscar todas las claves que puedan contener esta venta)
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('vendedor_')) {
                try {
                    const data = JSON.parse(localStorage.getItem(key));
                    if (data && data.idVenta === ventaId) {
                        keysToRemove.push(key);
                    }
                } catch (e) {
                    // Ignorar errores de parsing
                }
            }
        }
        
        // Remover las claves encontradas
        keysToRemove.forEach(key => localStorage.removeItem(key));
        // Actualizar datos locales
        todasLasVentas = todasLasVentas.filter(v => v.id !== ventaId);
        
        // Actualizar interfaz
        await calcularPuntosEmpleados();
        renderizarEmpleados();
        renderizarTablaVentas();
        actualizarResumenCompetencia();
        
        // Limpiar formulario si tenía datos de esta venta
        const editId = $('.btn-save').attr('data-edit-id');
        if (editId === ventaId) {
            limpiarEstadoFormulario();
        }
        
        Notificacion('¡Venta eliminada exitosamente!', 'success');
        
    } catch (error) {
        console.error('Error eliminando venta:', error);
        Notificacion('Error al eliminar la venta. Inténtalo nuevamente.', 'error');
    }
}

// EVENTOS PARA BOTONES ADICIONALES
$(document).on('click', '.btn-clear-view', function() {
    limpiarEstadoFormulario();
    Notificacion('Vista limpiada', 'info');
});

$(document).on('click', '.btn-cancel-edit', function() {
    limpiarEstadoFormulario();
    Notificacion('Edición cancelada', 'info');
});

// FUNCIONES AUXILIARES
function calcularMesAnterior(mesActual) {
    const [year, month] = mesActual.split('-');
    const fecha = new Date(parseInt(year), parseInt(month) - 2); // -2 porque mes es 0-indexed
    return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}`;
}

// DATOS DE TOURS OPTIMIZADOS
let htours = [];

// CARGAR TOURS DESDE FIREBASE - SÚPER COMPACTO
async function cargarTours() {
    try {
        console.log('🔄 Cargando tours...');
        
        // 🚀 CACHE PRIMERO
        const cache = getls('toursSmile');
        if (cache?.length > 0) {
            htours = cache.map(t => ({
                nt: t.num || Math.random(),
                tour: t.tour,
                price: t.precio,
                pts: t.puntos,
                com: t.comision || 5
            }));
            console.log(`✅ ${htours.length} tours desde cache`);
            if (typeof initTourSelector === 'function') initTourSelector();
            return;
        }
        
        // 📡 DESDE FIREBASE
        const snapshot = await getDocs(query(collection(db, 'listatours'), where('activo', '==', true)));
        if (snapshot.empty) {
            console.log('❌ No hay tours activos');
            htours = [];
            return;
        }
        
        const toursData = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        
        // Convertir formato para compatibilidad
        htours = toursData.map(t => ({
            nt: t.num || Math.random(),
            tour: t.tour,
            price: t.precio,
            pts: t.puntos,
            com: t.comision || 5
        }));
        
        // 💾 GUARDAR CACHE (5 minutos)
        savels('toursSmile', toursData, 300);
        
        console.log(`✅ ${htours.length} tours cargados desde Firebase`);
        if (typeof initTourSelector === 'function') initTourSelector();
        
    } catch (error) {
        console.error('❌ Error cargando tours:', error);
        Notificacion('Error al cargar tours', 'error');
    }
}

// VARIABLE PARA TOUR SELECCIONADO
let selTour = null;

// FUNCIÓN ACTUALIZADA PARA GENERAR HTML DEL FORMULARIO
function getFormularioHTML() {
    return `
        <form id="formularioVenta" class="sale-form">
            <div class="form-grid">
                <!-- SELECTOR DE TOUR MEJORADO -->
                <div class="form-field">
                    <label class="tour-label">
                        <i class="fas fa-route"></i>
                        Tipo de Tour *
                    </label>
                    <div class="tour-selector" id="tourSelector">
                        <div class="tour-display" id="tourDisplay">
                            <span class="tour-text">🔍 Seleccionar tour...</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="tour-dropdown" id="tourDropdown">
                            <div class="tour-search">
                                <input type="text" id="tourSearch" placeholder="Buscar tour..." autocomplete="off">
                                <i class="fas fa-search"></i>
                            </div>
                            <div class="tour-table-container">
                                <table class="tour-table" id="tourTable">
                                    <tbody id="tourTableBody"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="tipoTour" required>
                </div>

                <!-- RESTO DE CAMPOS EXISTENTES -->
                <div class="form-field">
                    <label><i class="fas fa-hotel"></i>Registro en:</label>
                    <select id="registroEn">
                        <option value="hawka">Hawka</option>
                        <option value="hclaudia">HClaudia</option>
                    </select>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-bed"></i>N° Habitación(Opcional)</label>
                    <input type="text" id="numeroHabitacion" placeholder="Ej: 205">
                </div>

                <div class="form-field">
                    <label><i class="fas fa-user"></i>Nombre del Cliente *</label>
                    <input type="text" id="nombreCliente" required placeholder="Nombre de cliente / calle">
                </div>

                <div class="form-field">
                    <label><i class="fas fa-clock"></i>Hora de salida *</label>
                    <input type="text" id="horaSalida" placeholder="2 HORAS -5PM" required>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-id-card"></i>Tipo de Documento</label>
                    <select id="tipoDocumento">
                        <option value="dni">DNI</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="cedula">Cédula</option>
                        <option value="ce">Carnet Extranjería</option>
                    </select>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-hashtag"></i>N° DNI/Pasaporte/CE</label>
                    <input type="text" id="numeroDocumento" placeholder="78964523">
                </div>

                <div class="form-field">
                    <label><i class="fas fa-credit-card"></i>Método de Pago</label>
                    <select id="metodoPago">
                    <option value="">Seleccionar...</option>
                        <option value="Tarjeta">Tarjeta de Débito/Crédito</option>
                        <option value="Transferencia">Transferencia Bancaria</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Yape">Yape</option>
                        <option value="Plin">Plin</option>
                    </select>
                </div>  

                <div class="form-field">
                    <label><i class="fas fa-users"></i>PAX (Cantidad Personas/Grupo Privado)</label>
                    <input type="number" id="cantidadPax" required min="1" value="1">
                </div>  

                <div class="form-field">
                    <label><i class="fas fa-user-tag"></i>Importe Individual/Grupo Privado</label>
                    <input type="number" id="precioUnitario" step="0.01" placeholder="S/ 0.00">
                </div>

                <div class="form-field">
                    <label><i class="fas fa-calculator"></i>Total por Pagar(S/)</label>
                    <input type="number" id="importeTotal" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-user"></i>Operador *</label>
                    <input type="text" id="Operador" placeholder="Ejm: Jacki, Pili, William...." required>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-money-bill"></i>Pago al operador (S/) *</label>
                    <input type="number" id="PagoOperador" step="0.01" placeholder="0.00" required>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-money-check-alt"></i>Estado del Pago:</label>
                    <select id="estadoPago">
                        <option id="ep01" value="pagado">Pagado (Tour con nosotros) </option>
                        <option id="ep02" value="pagado">Transferido hacia nosotros(<-)</option>
                        <option id="ep03" value="cobrar">Transferido con Deuda(->)</option>
                        <option id="ep04" value="cobrado">Deuda Saldada(Arreglada ->)</option>
                    </select>
                </div>

                <div class="form-field">
                    <label title="Es un calculo importe total - comision del operador, si es nosotros, no tiene comision, si es externo depende del tour">
                    <i class="fas fa-handshake"></i>Ganancia Estimada*</label>
                    <input type="number" id="ganancia" step="0.01" placeholder="S/ 0.00" disabled>
                </div>

                <div class="form-field">
                    <label><i class="fas fa-calendar-day"></i>Fecha *</label>
                    <input type="date" id="fechaTour" required>
                </div>

                <div class="form-field">
                    <label><i class="fa-solid fa-comment"></i>Comentario/Anotes (Opcional) *</label>
                    <input type="text" id="Comentario" placeholder="Escribe notas de tu venta(opcional)" required>
                </div>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn-save">
                    <i class="fas fa-save"></i>
                    Guardar Venta
                </button>
                <div class="points-preview">
                    <div class="points-info">
                        <i class="fas fa-star"></i>
                        <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
                    </div>
                </div>
            </div>
        </form>
    `;
}



// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [START]
// =============================================
// HOSPEDAJE HCLAUDIA - SISTEMA DE GESTIÓN
// Versión jQuery Compacta
// =============================================

$(document).ready(function() {
  
  // Variables Globales
  let registros = [];
  let registroEditando = null;
  let currentPage = 1;
  let recordsPerPage = 5;
  const usuarioActual = 'María González';
  const today = new Date().toISOString().split('T')[0];

  // =============================================
  // INICIALIZACIÓN
  // =============================================
  function init() {
    configurarFechas();
    configurarTemas();
    configurarValidaciones();
    configurarEventos();
    cargarDatos();
  }

  // =============================================
  // CONFIGURACIÓN DE FECHAS
  // =============================================
  function configurarFechas() {
    $('#fechaIngreso').val(today).attr('min', today);
    $('#fechaSalida').attr('min', today);
    calcularFechaSalida();
    
    $('#diasReservados, #fechaIngreso').on('change', calcularFechaSalida);
  }

  function calcularFechaSalida() {
    const fechaIngreso = $('#fechaIngreso').val();
    const diasReservados = parseInt($('#diasReservados').val()) || 1;
    
    if (fechaIngreso) {
      const fecha = new Date(fechaIngreso + 'T00:00:00');
      fecha.setDate(fecha.getDate() + diasReservados);
      $('#fechaSalida').val(fecha.toISOString().split('T')[0]);
    }
  }

  // =============================================
  // CONFIGURACIÓN DE TEMAS
  // =============================================
  function configurarTemas() {
    const savedTheme = localStorage.getItem('hotelTheme') || 'Dulce';
    $('html').attr('data-theme', savedTheme);
    $(`.tema[data-theme="${savedTheme}"]`).addClass('mtha');
    
    $('.tema').on('click', function() {
      const theme = $(this).data('theme');
      $('html').attr('data-theme', theme);
      $('.tema').removeClass('mtha');
      $(this).addClass('mtha');
      localStorage.setItem('hotelTheme', theme);
    });
  }

  // =============================================
  // VALIDACIONES
  // =============================================
  function configurarValidaciones() {
    // Validar documento según tipo
    $('#numDocumento').on('input', function() {
      const tipo = $('#tipoDocumento').val();
      let value = $(this).val();
      
      if (tipo === 'DNI') {
        $(this).val(value.replace(/\D/g, '').slice(0, 8));
      } else if (tipo === 'RUC') {
        $(this).val(value.replace(/\D/g, '').slice(0, 11));
      } else if (tipo === 'Carnet Extranjeria') {
        $(this).val(value.toUpperCase().slice(0, 12));
      } else if (tipo === 'Pasaporte') {
        $(this).val(value.toUpperCase().slice(0, 9));
      }
    });

    // Cambiar placeholder según tipo documento
    $('#tipoDocumento').on('change', function() {
      const placeholders = {
        'DNI': 'Ej: 12345678',
        'RUC': 'Ej: 20123456789',
        'Carnet Extranjeria': 'Ej: 001234567',
        'Pasaporte': 'Ej: ABC123456'
      };
      $('#numDocumento').val('').attr('placeholder', placeholders[$(this).val()]);
    });

    // Validar celular (9 dígitos)
    $('#celular').on('input', function() {
      $(this).val($(this).val().replace(/\D/g, '').slice(0, 9));
    });

    // Validar precio (decimales)
    $('#precio').on('input', function() {
      let value = $(this).val();
      value = value.replace(/[^\d.]/g, '');
      const parts = value.split('.');
      if (parts.length > 2) value = parts[0] + '.' + parts.slice(1).join('');
      if (parts[1] && parts[1].length > 2) value = parts[0] + '.' + parts[1].slice(0, 2);
      $(this).val(value);
    });

    // Nombre en mayúsculas
    $('#nombreCliente').on('input', function() {
      $(this).val($(this).val().toUpperCase());
    });
  }

  // =============================================
  // EVENTOS
  // =============================================
  function configurarEventos() {
    // Submit formulario
    $('#registroForm').on('submit', handleSubmit);
    
    // Filtros
    $('#mesFiltro').on('change', function() {
      currentPage = 1;
      actualizarEstadisticas();
      actualizarTarjetas();
      renderTabla();
    });
    
    $('#filterColaborador, #filterCantidad').on('change', function() {
      currentPage = 1;
      renderTabla();
    });
    
    // Cerrar sesión
    window.cerrarSesion = function() {
      if (confirm('¿Está seguro que desea cerrar sesión?')) {
        mostrarToast('Sesión cerrada correctamente', 'info');
        // window.location.href = '/login';
      }
    };
    
    // Actualizar datos
    window.actualizarDatos = function() {
      $('.btn-refresh i').css('transform', 'rotate(360deg)');
      setTimeout(() => {
        $('.btn-refresh i').css('transform', 'rotate(0deg)');
        cargarDatos();
        mostrarToast('Datos actualizados correctamente', 'success');
      }, 500);
    };
  }

  // =============================================
  // SUBMIT FORMULARIO
  // =============================================
  function handleSubmit(e) {
    e.preventDefault();
    
    // Validaciones
    const tipoDoc = $('#tipoDocumento').val();
    const numDoc = $('#numDocumento').val();
    const celular = $('#celular').val();
    
    if ((tipoDoc === 'DNI' && numDoc.length !== 8) || 
        (tipoDoc === 'RUC' && numDoc.length !== 11) ||
        celular.length !== 9) {
      mostrarToast('⚠️ Verifique los datos ingresados', 'warning');
      return false;
    }
    
    const fechaIn = new Date($('#fechaIngreso').val());
    const fechaOut = new Date($('#fechaSalida').val());
    
    if (fechaOut <= fechaIn) {
      mostrarToast('⚠️ La fecha de Check-out debe ser posterior al Check-in', 'error');
      return false;
    }
    
    // Crear registro
    const registro = {
      id: registroEditando ? registroEditando.id : Date.now(),
      registroEn: $('#registroEn').val(),
      nombreCliente: $('#nombreCliente').val(),
      tipoDocumento: $('#tipoDocumento').val(),
      numDocumento: $('#numDocumento').val(),
      celular: $('#celular').val(),
      numHabitacion: $('#numHabitacion').val(),
      tipoHabitacion: $('#tipoHabitacion').val(),
      precio: parseFloat($('#precio').val()) || 0,
      moneda: $('#moneda').val(),
      metodoPago: $('#metodoPago').val(),
      diasReservados: parseInt($('#diasReservados').val()) || 1,
      fechaIngreso: $('#fechaIngreso').val(),
      fechaSalida: $('#fechaSalida').val(),
      tipoReserva: $('#tipoReserva').val(),
      bookingId: $('#bookingId').val(),
      observaciones: $('#observaciones').val(),
      colaborador: usuarioActual,
      fechaRegistro: registroEditando ? registroEditando.fechaRegistro : new Date().toISOString()
    };
    
    // Guardar o actualizar
    if (registroEditando) {
      const index = registros.findIndex(r => r.id === registroEditando.id);
      registros[index] = registro;
      registroEditando = null;
      $('.btn-save').html('<i class="fa-solid fa-check-circle"></i> Registrar Reserva');
      mostrarToast('✅ Registro actualizado correctamente', 'success');
    } else {
      registros.unshift(registro);
      mostrarToast('✅ Registro guardado exitosamente', 'success');
    }
    
    guardarDatos();
    resetearFormulario();
    actualizarEstadisticas();
    actualizarTarjetas();
    renderTabla();
    
    return false;
  }

  // =============================================
  // RESETEAR FORMULARIO
  // =============================================
  function resetearFormulario() {
    $('#registroForm')[0].reset();
    $('#registroEn').val('HClaudia');
    $('#tipoDocumento').val('DNI');
    $('#moneda').val('Soles');
    $('#metodoPago').val('Tarjeta');
    $('#tipoReserva').val('Directo');
    $('#diasReservados').val('1');
    $('#fechaIngreso').val(today);
    calcularFechaSalida();
  }

  // =============================================
  // RENDERIZAR TABLA
  // =============================================
  function renderTabla() {
    const filterMes = $('#mesFiltro').val();
    const filterColab = $('#filterColaborador').val();
    const filterCant = $('#filterCantidad').val();
    
    let registrosFiltrados = registros.filter(r => {
      const mesRegistro = r.fechaIngreso.substring(0, 7);
      const matchMes = !filterMes || mesRegistro === filterMes;
      const matchColab = !filterColab || r.colaborador === filterColab;
      return matchMes && matchColab;
    });
    
    recordsPerPage = filterCant === 'all' ? registrosFiltrados.length : parseInt(filterCant);
    const totalPages = Math.ceil(registrosFiltrados.length / recordsPerPage);
    if (currentPage > totalPages) currentPage = 1;
    
    const start = (currentPage - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const registrosPagina = registrosFiltrados.slice(start, end);
    
    if (registrosPagina.length === 0) {
      $('#registrosTableBody').html(`
        <tr>
          <td colspan="11" style="text-align: center; padding: 3vh; color: var(--bg2); font-style: italic;">
            No se encontraron registros con los filtros seleccionados.
          </td>
        </tr>
      `);
    } else {
      const html = registrosPagina.map(r => {
        const simbolo = r.moneda === 'Soles' ? 'S/' : r.moneda === 'Dolares' ? 'US$' : '€';
        return `
          <tr>
            <td><strong>${formatFecha(r.fechaIngreso)}</strong></td>
            <td><strong>${formatFecha(r.fechaSalida)}</strong></td>
            <td>${r.nombreCliente}</td>
            <td><span class="badge badge-tipo">${r.tipoDocumento}</span><br>${r.numDocumento}</td>
            <td><strong>${r.numHabitacion}</strong></td>
            <td><span class="badge badge-tipo">${r.tipoHabitacion}</span></td>
            <td><strong>${simbolo} ${r.precio.toFixed(2)}</strong></td>
            <td><span class="badge badge-reserva">${r.metodoPago}</span></td>
            <td><span class="badge badge-reserva">${r.tipoReserva}</span></td>
            <td>${r.colaborador}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-action btn-view" onclick="verRegistro(${r.id})" title="Ver">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editarRegistro(${r.id})" title="Editar">
                  <i class="fa-solid fa-edit"></i>
                </button>
                <button class="btn-action btn-delete" onclick="eliminarRegistro(${r.id})" title="Eliminar">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
      
      $('#registrosTableBody').html(html);
    }
    
    renderPaginacion(totalPages);
  }

  // =============================================
  // PAGINACIÓN
  // =============================================
  function renderPaginacion(totalPages) {
    if (totalPages <= 1) {
      $('#paginationContainer').html('');
      return;
    }
    
    let html = '';
    
    if (currentPage > 1) {
      html += `<button class="page-btn" onclick="cambiarPagina(${currentPage - 1})">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" 
                  onclick="cambiarPagina(${i})">${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        html += `<span class="page-info">...</span>`;
      }
    }
    
    if (currentPage < totalPages) {
      html += `<button class="page-btn" onclick="cambiarPagina(${currentPage + 1})">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`;
    }
    
    $('#paginationContainer').html(html);
  }

  window.cambiarPagina = function(page) {
    currentPage = page;
    renderTabla();
  };

  // =============================================
  // ACCIONES DE REGISTROS
  // =============================================
  window.verRegistro = function(id) {
    const r = registros.find(reg => reg.id === id);
    if (!r) return;
    
    const simbolo = r.moneda === 'Soles' ? 'S/' : r.moneda === 'Dolares' ? 'US$' : '€';
    
    alert(`
═══════════════════════════════════
📋 DETALLES DEL REGISTRO
═══════════════════════════════════

🏨 Registro en: ${r.registroEn}
👤 Cliente: ${r.nombreCliente}
🆔 Documento: ${r.tipoDocumento} - ${r.numDocumento}
📱 Celular: ${r.celular}
🚪 Habitación: ${r.numHabitacion} - ${r.tipoHabitacion}
💵 Precio: ${simbolo} ${r.precio.toFixed(2)}
💳 Método de Pago: ${r.metodoPago}
📅 Días Reservados: ${r.diasReservados}
📅 Check-in: ${formatFecha(r.fechaIngreso)}
📅 Check-out: ${formatFecha(r.fechaSalida)}
📋 Fuente: ${r.tipoReserva}
🔖 Booking ID: ${r.bookingId || 'No especificado'}
👨‍💼 Registrado por: ${r.colaborador}
📝 Observaciones: ${r.observaciones || 'Sin observaciones'}

═══════════════════════════════════
    `);
  };

  window.editarRegistro = function(id) {
    const r = registros.find(reg => reg.id === id);
    if (!r) return;
    
    registroEditando = r;
    
    $('#registroEn').val(r.registroEn);
    $('#nombreCliente').val(r.nombreCliente);
    $('#tipoDocumento').val(r.tipoDocumento);
    $('#numDocumento').val(r.numDocumento);
    $('#celular').val(r.celular);
    $('#numHabitacion').val(r.numHabitacion);
    $('#tipoHabitacion').val(r.tipoHabitacion);
    $('#precio').val(r.precio);
    $('#moneda').val(r.moneda);
    $('#metodoPago').val(r.metodoPago);
    $('#diasReservados').val(r.diasReservados);
    $('#fechaIngreso').val(r.fechaIngreso);
    $('#fechaSalida').val(r.fechaSalida);
    $('#tipoReserva').val(r.tipoReserva);
    $('#bookingId').val(r.bookingId);
    $('#observaciones').val(r.observaciones);
    
    $('.btn-save').html('<i class="fa-solid fa-save"></i> Actualizar Registro');
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
  };

  window.eliminarRegistro = function(id) {
    if (!confirm('¿Está seguro de eliminar este registro?')) return;
    
    registros = registros.filter(r => r.id !== id);
    guardarDatos();
    actualizarEstadisticas();
    actualizarTarjetas();
    renderTabla();
    
    mostrarToast('🗑️ Registro eliminado correctamente', 'warning');
  };

  // =============================================
  // ESTADÍSTICAS
  // =============================================
  function actualizarTarjetas() {
    const mesFiltro = $('#mesFiltro').val();
    const registrosMes = registros.filter(r => {
      const mesRegistro = r.fechaIngreso.substring(0, 7);
      return !mesFiltro || mesRegistro === mesFiltro;
    });
    
    $('#totalRegistros').text(registrosMes.length);
    
    const habitacionesUnicas = new Set(registrosMes.map(r => r.numHabitacion));
    $('#habitacionesOcupadas').text(habitacionesUnicas.size);
    
    let ingresoTotal = 0;
    let totalNoches = 0;
    
    registrosMes.forEach(r => {
      let precioSoles = r.precio;
      if (r.moneda === 'Dolares') precioSoles *= 3.75;
      else if (r.moneda === 'Euros') precioSoles *= 4.10;
      
      ingresoTotal += precioSoles * r.diasReservados;
      totalNoches += r.diasReservados;
    });
    
    $('#ingresoTotal').text(`S/ ${ingresoTotal.toFixed(2)}`);
    
    const promedio = totalNoches > 0 ? ingresoTotal / totalNoches : 0;
    $('#promedioNoche').text(`S/ ${promedio.toFixed(2)}`);
  }

  function actualizarEstadisticas() {
    const mesFiltro = $('#mesFiltro').val();
    const colaboradores = {
      'María González': 0,
      'Carlos Pérez': 0,
      'Ana Rodríguez': 0
    };
    
    const registrosMes = registros.filter(r => {
      const mesRegistro = r.fechaIngreso.substring(0, 7);
      return !mesFiltro || mesRegistro === mesFiltro;
    });
    
    registrosMes.forEach(r => {
      if (colaboradores.hasOwnProperty(r.colaborador)) {
        colaboradores[r.colaborador]++;
      }
    });
    
    const total = registrosMes.length;
    
    $.each(colaboradores, function(nombre, count) {
      const porcentaje = total > 0 ? Math.round((count / total) * 100) : 0;
      $(`[data-colaborador="${nombre}"]`).text(count);
      $(`[data-colaborador-pct="${nombre}"]`).text(porcentaje + '%');
    });
  }

  // =============================================
  // UTILIDADES
  // =============================================
  function formatFecha(fecha) {
    const [year, month, day] = fecha.split('-');
    return `${day}/${month}/${year}`;
  }

  function mostrarToast(mensaje, tipo = 'success') {
    const colores = {
      success: { bg: 'linear-gradient(135deg, #10b981, #059669)', icon: 'fa-circle-check' },
      error: { bg: 'linear-gradient(135deg, #ef4444, #dc2626)', icon: 'fa-circle-xmark' },
      warning: { bg: 'linear-gradient(135deg, #f59e0b, #d97706)', icon: 'fa-triangle-exclamation' },
      info: { bg: 'linear-gradient(135deg, #3b82f6, #2563eb)', icon: 'fa-circle-info' }
    };
    
    const config = colores[tipo];
    
    const toast = $('<div>').css({
      position: 'fixed', top: '10vh', right: '2vw',
      background: config.bg, color: 'white',
      padding: '1.5vh 2vw', borderRadius: '1vh',
      boxShadow: '0 0.5vh 2vh rgba(0,0,0,0.3)',
      display: 'flex', alignItems: 'center', gap: '1vh',
      fontWeight: '600', zIndex: 2000,
      animation: 'slideIn 0.4s ease', minWidth: '300px'
    }).html(`
      <i class="fa-solid ${config.icon}" style="font-size: 1.5em;"></i>
      <span>${mensaje}</span>
    `);
    
    $('body').append(toast);
    
    setTimeout(() => {
      toast.fadeOut(400, function() { $(this).remove(); });
    }, 3000);
  }

  // =============================================
  // LOCAL STORAGE
  // =============================================
  function guardarDatos() {
    localStorage.setItem('hotelRegistros', JSON.stringify(registros));
  }

  function cargarDatos() {
    const data = localStorage.getItem('hotelRegistros');
    if (data) {
      registros = JSON.parse(data);
      renderTabla();
      actualizarEstadisticas();
      actualizarTarjetas();
    }
  }

  // =============================================
  // EXPORTAR A EXCEL
  // =============================================
  window.exportarExcel = function() {
    const mesFiltro = $('#mesFiltro').val();
    const registrosMes = registros.filter(r => {
      const mesRegistro = r.fechaIngreso.substring(0, 7);
      return !mesFiltro || mesRegistro === mesFiltro;
    });
    
    if (registrosMes.length === 0) {
      mostrarToast('⚠️ No hay registros para exportar', 'warning');
      return;
    }
    
    let csv = 'Check-in,Check-out,Cliente,Tipo Doc,Num Doc,Celular,Habitación,Tipo Hab,Precio,Moneda,Método Pago,Días,Fuente,Booking ID,Registrado por,Observaciones\n';
    
    registrosMes.forEach(r => {
      const simbolo = r.moneda === 'Soles' ? 'S/' : r.moneda === 'Dolares' ? 'US$' : '€';
      csv += `${formatFecha(r.fechaIngreso)},${formatFecha(r.fechaSalida)},"${r.nombreCliente}",${r.tipoDocumento},${r.numDocumento},${r.celular},${r.numHabitacion},${r.tipoHabitacion},"${simbolo} ${r.precio.toFixed(2)}",${r.moneda},${r.metodoPago},${r.diasReservados},${r.tipoReserva},"${r.bookingId || ''}",${r.colaborador},"${r.observaciones || ''}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const nombreMes = $('#mesFiltro option:selected').text();
    
    link.setAttribute('href', url);
    link.setAttribute('download', `Registros_HClaudia_${nombreMes.replace(' ', '_')}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    mostrarToast('✅ Archivo exportado correctamente', 'success');
  };

  // =============================================
  // INICIAR APLICACIÓN
  // =============================================
  init();
});
// DIOS SIEMPRE ES BUENO Y YO AMO A DIOS [END]