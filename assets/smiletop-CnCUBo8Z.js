import{t as it,x as I,b as P,q as L,c as C,a as w,e as S,N as i,y as W,h as U,l as V,$ as e,z as rt,C as M,A as Y,B as H,v as ct,d as N,D as x,j as _,E as X,i as J}from"./widev-B9UvRTT4.js";let m=null,v=new Date().toISOString().slice(0,7),g="todos",d=0,T=0,b=[],y=[],u=[],F=7,p=[];it(U,async t=>{if(!t)return window.location.href="/";try{const o=I("wiSmileTop");if(o)return await q(o);const a=await P(L(C(w,"smiles"),S("usuario","==",t.displayName)));if(a.empty||a.docs[0].data().rol!=="smiletop")return i("No tienes permisos de administrador","error"),await W(U);const s=a.docs[0].data();V("wiSmileTop",s,450),await q(s)}catch(o){console.error("Error auth:",o),i("Error al cargar aplicación","error")}});async function q(t){m=t,console.log(`✅ Admin: ${t.nombre}`),e(".app").html(lt()),rt();try{await K(),await k(),await Q(),await A(),ft(),E(),$(),i("Dashboard cargado","success")}catch(o){console.error("Error init:",o),i("Error al inicializar","error")}}function lt(){return`
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
                    <img src="${m.imagen||"./smile.png"}" alt="Avatar" class="user-avatar">
                    <span>${m.nombre||"Admin"}</span>
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
                        <select id="monthFilter">${dt()}</select>
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
    `}function dt(){const t=[],o=new Date;for(let a=-6;a<=5;a++){const s=new Date(o.getFullYear(),o.getMonth()+a,1),n=s.toISOString().slice(0,7),r=s.toLocaleDateString("es-ES",{year:"numeric",month:"long"}),l=n===v?"selected":"";t.push(`<option value="${n}" ${l}>${M(r)}</option>`)}return t.join("")}async function K(){try{console.log("🔄 Cargando usuarios...");const t=I("usuariosSmileTop");if(t&&t.length>0){y=t,console.log(`✅ ${y.length} usuarios desde cache`),O();return}y=(await P(L(C(w,"smiles"),S("rol","==","smile")))).docs.map(a=>({id:a.id,...a.data()})),console.log(`✅ ${y.length} usuarios cargados desde Firestore`),V("usuariosSmileTop",y,300),O()}catch(t){console.error("❌ Error load usuarios:",t),i("Error al cargar usuarios","error")}}async function k(t=0,o=!0){try{console.log(`🔄 Cargando ventas página ${t}...`);let a=L(C(w,"registrosdb"),S("fechaTour",">=",v+"-01"),S("fechaTour","<=",v+"-31"),Y("fechaTour","desc")),n=(await P(a)).docs.map(f=>({id:f.id,...f.data()}));if(g!=="todos"&&(n=n.filter(f=>f.vendedor===g),console.log(`🔍 Filtrado por usuario ${g}: ${n.length} ventas`)),T=Math.ceil(n.length/F),n.length===0){d=0,b=[],console.log("❌ No hay ventas para este filtro");return}d>=T&&(d=0);const r=d*F,l=r+F;b=n.slice(r,l),console.log(`✅ ${b.length}/${n.length} ventas cargadas para página ${d+1}/${T}`)}catch(a){console.error("❌ Error load ventas:",a),i("Error al cargar ventas","error")}}async function z(){try{console.log("🔄 Refrescando datos..."),e("#tableContainer").html(`
            <div class="loading-state">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Actualizando datos...</p>
            </div>
        `),d=0,await K(),await k(d),E(),i("✅ Datos actualizados correctamente","success")}catch(t){console.error("❌ Error refresh:",t),i("Error al actualizar datos","error")}}async function Q(){try{console.log("🔄 Cargando notas...");const t=I("notasSmileTop");if(t?.length>0){u=t,console.log(`✅ ${u.length} notas desde cache`),$();return}const o=await P(C(w,"notas"));if(o.empty){console.log("📭 No hay notas, creando por defecto"),u=[],$();return}u=o.docs.map(a=>({id:a.id,titulo:"Noticias a trabajadores",contenido:a.data().nota||"",editando:!1,...a.data()})),V("notasSmileTop",u,720),console.log(`✅ ${u.length} notas cargadas desde Firebase`),$()}catch(t){console.error("❌ Error load notas:",t),u=[],$()}}function O(){const t=e("#userFilter"),o=t.val();t.find('option:not([value="todos"])').remove(),console.log("📋 Actualizando filtro de usuarios..."),y.forEach(a=>{const s=a.nombre||a.usuario;t.append(`<option value="${a.usuario}">${s}</option>`)}),o&&t.find(`option[value="${o}"]`).length&&t.val(o),console.log(`✅ ${t.find("option").length-1} usuarios en filtro`)}function E(){const t=e("#tableContainer");if(console.log(`📊 Renderizando ${b.length} ventas`),b.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No hay ventas</h3>
                <p>No se encontraron ventas para ${g==="todos"?"este mes":"este usuario en este mes"}</p>
                <button class="btn-refresh bt_cargar" style="margin-top: 1rem;">
                    <i class="fas fa-sync"></i>
                    Buscar en base de datos
                </button>
            </div>
        `),G([],0,0),e("#pagination").hide();return}const o=`
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
                ${b.map(n=>Z(n)).join("")}
            </tbody>
        </table>
    `;t.html(o);const a=b.reduce((n,r)=>n+(parseFloat(r.importeTotal)||0),0),s=b.reduce((n,r)=>n+(parseInt(r.puntos)||0),0);G(b,a,s),ut()}function Z(t,o=!1){const a=y.find(c=>c.usuario===t.vendedor||c.id===t.vendedor),s=t.fechaTour?new Date(t.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",n=parseFloat(t.precioUnitario)||0,r=parseFloat(t.importeTotal)||0,l=parseFloat(t.comision)||r*.1,f=parseFloat(t.ganancia)||r-l,h=parseInt(t.puntos)||0;return o?`
            <tr class="editing-row" data-id="${t.id}">
                <td>${s}</td>
                <td class="user-cell">
                    <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                    ${a?.nombre||a?.usuario||t.vendedor}
                </td>
                <td class="tour-cell">${t.tipoTour||"Tour"}</td>
                <td class="money-cell">${t.cantidadPax||"0"}</td>
                <td class="money-cell">${H(t.nombreCliente)||"Sin nombre"}</td>
                <td><input type="number" class="edit-input" data-field="importeTotal" value="${r.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="precioUnitario" value="${n.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="comision" value="${l.toFixed(2)}" step="0.01"></td>
                <td class="money-cell">${M(t.estadoPago)||"No"}</td>
                <td><input type="number" class="edit-input" data-field="ganancia" value="${f.toFixed(2)}" step="0.01"></td>
                <td><input type="number" class="edit-input" data-field="puntos" value="${h}"></td>
                <td class="actions-cell">
                    <button class="btn-action btn-save" onclick="saveVenta('${t.id}')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn-action btn-cancel" onclick="cancelEdit('${t.id}')">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td>${s}</td>
            <td class="user-cell">
                <img src="${a?.imagen||"./smile.png"}" class="avatar-small">
                ${a?.nombre||a?.usuario||t.vendedor}
            </td>
            <td class="tour-cell">${t.tipoTour||"Tour"}</td>
            <td class="money-cell">${t.cantidadPax||"0"}</td>
            <td class="money-cell">${H(t.nombreCliente)||"Sin nombre"}</td>
            <td class="money-cell">${r.toFixed(2)}</td>
            <td class="money-cell">${n.toFixed(2)}</td>
            <td class="money-cell">${l.toFixed(2)}</td>
            <td class="money-cell">${M(t.estadoPago)||"No"}</td>
            <td class="money-cell">${f.toFixed(2)}</td>
            <td class="points-cell">${h}</td>
            <td class="actions-cell">
                <button class="btn-action btn-view" onclick="viewVenta('${t.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editVenta('${t.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `}function G(t,o,a){e("#totalVentas").text(`${t.length} ${t.length===1?"venta":"ventas"}`),e("#totalIngresos").text(`S/ ${o.toFixed(2)}`),e("#totalPuntos").text(`${a} puntos`)}function ut(){const t=e("#pagination"),o=e("#prevPage"),a=e("#nextPage"),s=e("#pageNumbers");if(T<=1){t.hide();return}let n="";const r=8;let l=Math.max(0,d-Math.floor(r/2)),f=Math.min(T-1,l+r-1);f-l<r-1&&(l=Math.max(0,f-r+1));for(let h=l;h<=f;h++)n+=`
            <button class="btn-page page-number ${h===d?"active":""}" data-page="${h}">
                ${h+1}
            </button>
        `;s.html(n),o.prop("disabled",d===0),a.prop("disabled",d>=T-1),t.show()}async function A(){try{console.log("🔄 Cargando tours...");const t=I("toursSmileTop");if(t&&t.length>0){p=t,console.log(`✅ ${p.length} tours desde cache`),D();return}console.log("📡 Cargando desde Firestore...");const o=await P(C(w,"listatours"));if(o.empty){console.log("📭 No hay tours en Firestore"),p=[],D();return}p=o.docs.map(a=>({id:a.id,...a.data()})),V("toursSmileTop",p,300),console.log(`✅ ${p.length} tours cargados y guardados en cache`),D()}catch(t){console.error("❌ Error cargando tours:",t),i("Error al cargar tours","error"),e("#toursContainer").html(`
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle" style="color:#dc3545;font-size:48px;margin-bottom:15px;"></i>
                <h3>Error al cargar tours</h3>
                <p>No se pudieron cargar los tours desde la base de datos</p>
                <button onclick="loadTours()" class="btn-refresh" style="margin-top:15px;">
                    <i class="fas fa-sync"></i> Reintentar
                </button>
            </div>
        `)}}function D(){console.log("🎨 Renderizando tours...",p);const t=`
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
                ${p.length>0?p.map((o,a)=>tt(o,a+1)).join(""):`
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
    `;e("#toursContainer").html(t),console.log("✅ Tours renderizados en interfaz")}function tt(t,o,a=!1){const s=t.num||o;return a?`
            <tr class="editing-row" data-id="${t.id}">
                <td><strong>${s}</strong></td>
                <td>
                    <input id="tourNombre" 
                           type="text" 
                           class="edit-input" 
                           placeholder="Ingresa el tour" 
                           value="${t.tour||t.nombre||""}" 
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourPrecio" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Precio: Ingresa el valor" 
                           value="${t.precio||""}" 
                           step="0.01" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourComision" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Ingresa Comisión: 25.00" 
                           value="${t.comision||""}" 
                           step="0.01" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td>
                    <input id="tourPuntos" 
                           type="number" 
                           class="edit-input" 
                           placeholder="Aquí también solo número: 50" 
                           value="${t.puntos||""}" 
                           min="0"
                           style="width:100%;padding:8px;border:1px solid #ced4da;border-radius:4px;">
                </td>
                <td class="actions-cell">
                    <button onclick="saveTour('${t.id}', ${s})" class="btn-action btn-save" title="Guardar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button onclick="cancelEditTour('${t.id}')" class="btn-action btn-cancel" title="Cancelar">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `:`
        <tr data-id="${t.id}">
            <td><strong>${s}</strong></td>
            <td class="tour-name">${t.tour||t.nombre||"Tour sin nombre"}</td>
            <td class="money-cell">${(t.precio||0).toFixed(2)}</td>
            <td class="money-cell">${(t.comision||0).toFixed(2)}</td>
            <td class="points-cell">${t.puntos||0}</td>
            <td class="actions-cell">
                <button onclick="editTour('${t.id}')" class="btn-action btn-edit" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="delTour('${t.id}')" class="btn-action btn-delete" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `}function at(){const t=`
        <tr class="editing-row new-tour-row">
            <td><strong>${p.length+1}</strong></td>
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
                <button onclick="saveTour('', ${p.length+1})" class="btn-action btn-save" title="Guardar">
                    <i class="fas fa-check"></i>
                </button>
                <button onclick="cancelAddTour()" class="btn-action btn-cancel" title="Cancelar">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `;p.length>0?e("#toursTableBody").append(t):e("#toursTableBody").html(t),setTimeout(()=>e("#tourNombre").focus(),100),i("📝 Agregando nuevo tour...","info")}window.editTour=function(t){const o=p.find(n=>n.id===t);if(!o)return;const a=p.findIndex(n=>n.id===t)+1;e(`tr[data-id="${t}"]`).replaceWith(tt(o,a,!0)),setTimeout(()=>e("#tourNombre").focus(),100),i("✏️ Editando tour...","info")};window.cancelEditTour=function(t){D(),i("❌ Edición cancelada","info")};window.cancelAddTour=function(){p.length>0?e(".new-tour-row").remove():D(),i("❌ Nuevo tour cancelado","info")};window.delTour=async function(t){const o=p.find(s=>s.id===t);if(!(!o||!confirm(`¿Eliminar el tour "${o.tour||o.nombre}"?

Esta acción no se puede deshacer.`)))try{await ct(N(w,"listatours",t)),x("toursSmileTop"),await A(),i("🗑️ Tour eliminado correctamente","success")}catch(s){console.error("Error eliminar tour:",s),i("❌ Error al eliminar tour","error")}};window.refreshToursFromDB=async function(){console.log("🔄 Forzando recarga desde Firebase..."),x("toursSmileTop"),await A(),i("✅ Tours actualizados desde Firebase","success")};window.saveTour=async function(t,o){const a=e("#tourNombre").val().trim(),s=parseFloat(e("#tourPrecio").val())||0,n=parseFloat(e("#tourComision").val())||0,r=parseInt(e("#tourPuntos").val())||0;if(!a){i("⚠️ El nombre del tour es obligatorio","error"),e("#tourNombre").focus();return}if(s<=0){i("⚠️ El precio debe ser mayor a 0","error"),e("#tourPrecio").focus();return}try{if(t){const l={activo:!0,comision:n,tour:a,precio:s,puntos:r,actualizadoPor:m.nombre||m.usuario||"Admin",fecha:_()};await X(N(w,"listatours",t),l),i("✅ Tour actualizado correctamente","success")}else{const l=p.length>0?Math.max(...p.map(c=>c.num||0))+1:1,f={activo:!0,comision:n,tour:a,precio:s,puntos:r,num:l,creadoPor:m.nombre||m.usuario||"Admin",actualizadoPor:m.nombre||m.usuario||"Admin",fecha:_()},h=Date.now().toString();await J(N(w,"listatours",h),f),i(`✅ Tour #${l} creado correctamente`,"success")}x("toursSmileTop"),await A()}catch(l){console.error("❌ Error guardar tour:",l),i("❌ Error al guardar tour: "+l.message,"error")}};window.showAddForm=at;window.loadTours=A;function $(){const t=e("#notesContainer");if(!u||u.length===0){t.html(`
            <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <h3>Sin notas</h3>
                <p>Agrega tu primera nota</p>
            </div>
        `);return}const o=u.map(a=>`
        <div class="note-item" data-id="${a.id}">
            <h4>${a.titulo||"Nota"}</h4>
            <textarea 
                class="note-content" 
                ${a.editando?"":"disabled"} 
                placeholder="Escribe aquí tu nota..."
            >${a.nota||a.contenido||""}</textarea>
            <div class="note-actions">
                ${a.editando?`
                    <button class="btn-save" onclick="saveNota('${a.id}')">
                        <i class="fas fa-save"></i> 
                    </button>
                    <button class="btn-cancel" onclick="cancelNota('${a.id}')">
                        <i class="fas fa-times"></i> 
                    </button>
                `:`
                    <button class="btn-edit" onclick="editNota('${a.id}')">
                        <i class="fas fa-edit"></i> 
                    </button>
                `}
            </div>
        </div>
    `).join("");t.html(o)}window.viewVenta=function(t){const o=b.find(r=>r.id===t);if(!o)return;const a=y.find(r=>r.usuario===o.vendedor||r.id===o.vendedor),s=o.nombreCliente||"Cliente",n=a?.nombre||a?.usuario||o.vendedor;i(`👁️ Viendo: ${s} - Vendedor: ${n}`,"info",4e3)};window.editVenta=function(t){const o=b.find(s=>s.id===t);if(!o)return;e(`tr[data-id="${t}"]`).replaceWith(Z(o,!0)),i("Modo edición activado","info")};window.saveVenta=async function(t){try{const o=e(`.editing-row[data-id="${t}"]`),a={};o.find(".edit-input").each(function(){const n=e(this).data("field"),r=e(this).val();a[n]=n==="puntos"?parseInt(r):parseFloat(r)}),a.actualizadoPor=m.nombre||m.usuario,a.fechaActualizacion=_(),await X(N(w,"registrosdb",t),a);const s=b.findIndex(n=>n.id===t);s!==-1&&Object.assign(b[s],a),E(),i("✅ Venta actualizada correctamente","success")}catch(o){console.error("❌ Error save venta:",o),i("Error al actualizar venta","error")}};window.cancelEdit=function(t){E(),i("Edición cancelada","info")};window.editNota=function(t){console.log("📝 Editando nota:",t);const o=u.find(a=>a.id==t);o?(o.editando=!0,$(),setTimeout(()=>{e(`.note-item[data-id="${t}"] .note-content`).focus()},100),i("✏️ Editando nota...","info")):(console.error("❌ Nota no encontrada:",t),i("❌ Error: Nota no encontrada","error"))};window.saveNota=async function(t){console.log("💾 Guardando nota:",t);const o=e(`.note-item[data-id="${t}"] .note-content`).val().trim();if(!o){i("⚠️ La nota no puede estar vacía","error"),e(`.note-item[data-id="${t}"] .note-content`).focus();return}try{const a={nota:o,creadoPor:m.nombre||m.usuario||"Admin",actualizadoPor:m.nombre||m.usuario||"Admin",fechaCreacion:_()};if(t&&t!=="new"){await X(N(w,"notas",t.toString()),a);const s=u.find(n=>n.id==t);s&&(s.nota=o,s.editando=!1),i("✅ Nota actualizada","success")}else{const s=Date.now().toString();await J(N(w,"notas",s),a),u=u.filter(n=>n.id!=="new"),u.push({id:s,titulo:"Nota",nota:o,editando:!1,...a}),i("✅ Nota creada","success")}x("notasSmileTop"),$()}catch(a){console.error("❌ Error guardar nota:",a),i("❌ Error al guardar: "+a.message,"error")}};window.cancelNota=function(t){if(console.log("❌ Cancelando edición:",t),t==="new")u=u.filter(o=>o.id!=="new");else{const o=u.find(a=>a.id==t);o&&(o.editando=!1)}$(),i("❌ Edición cancelada","info")};async function pt(){try{console.log("📊 Exportando a Excel...");let t=L(C(w,"registrosdb"),S("fechaTour",">=",v+"-01"),S("fechaTour","<=",v+"-31"),Y("fechaTour","desc")),a=(await P(t)).docs.map(c=>({id:c.id,...c.data()}));if(g!=="todos"&&(a=a.filter(c=>c.vendedor===g)),a.length===0)return i("❌ No hay datos para exportar","warning");const s=a.map(c=>{const j=y.find(nt=>nt.usuario===c.vendedor),ot=c.fechaTour?new Date(c.fechaTour).toLocaleDateString("es-ES"):"Sin fecha",R=parseFloat(c.importeTotal)||0,et=parseFloat(c.precioUnitario)||0,B=parseFloat(c.comision)||R*.1,st=parseFloat(c.ganancia)||R-B;return{Fecha:ot,Usuario:j?.nombre||j?.usuario||c.vendedor,"Tipo Tour":c.tipoTour||"Tour",PAX:c.cantidadPax||0,"Nombre Cliente":c.nombreCliente||"Sin nombre","Monto Total":R.toFixed(2),"Monto Individual":et.toFixed(2),Comisión:B.toFixed(2),"Estado Pago":M(c.estadoPago)||"Pendiente",Ganancia:st.toFixed(2),Puntos:parseInt(c.puntos)||0,Hotel:c.hotel||"",Habitación:c.numeroHabitacion||"","Fecha Registro":c.fechaRegistro?new Date(c.fechaRegistro.toDate()).toLocaleDateString("es-ES"):""}}),n=XLSX.utils.json_to_sheet(s),r=[{wch:12},{wch:15},{wch:20},{wch:8},{wch:25},{wch:12},{wch:15},{wch:12},{wch:12},{wch:12},{wch:8},{wch:20},{wch:10},{wch:15}];n["!cols"]=r;const l=XLSX.utils.book_new(),f=g==="todos"?`Ventas_${v.replace("-","_")}`:`${g}_${v.replace("-","_")}`;XLSX.utils.book_append_sheet(l,n,f);const h=g==="todos"?`ventas_${v}_todas.xlsx`:`ventas_${v}_${g}.xlsx`;XLSX.writeFile(l,h),console.log(`✅ Excel exportado: ${h}`),i(`📊 Excel exportado: ${s.length} registros`,"success")}catch(t){console.error("❌ Error exportar Excel:",t),i("Error al exportar Excel","error")}}function ft(){e(document).on("click",".bt_salir",async()=>{try{await W(U),window.location.href="/",localStorage.clear()}catch(t){console.error("Error logout:",t)}}),e(document).on("click",".bt_cargar",async()=>{x("usuariosSmileTop"),x("toursSmileTop"),x("notasSmileTop"),await z(),await A(),await Q()}),e(document).on("click",".bt_exportar",async()=>{await pt()}),e(document).on("change","#monthFilter",async function(){v=e(this).val(),d=0,console.log(`📅 Cambiando a mes: ${v}`),await z()}),e(document).on("change","#userFilter",async function(){const t=e(this).val();t!==g&&(g=t,d=0,console.log(`👤 Filtrando por usuario: ${g}`),await z())}),e(document).on("click","#prevPage",async()=>{d>0&&(d--,await k(d,!1),E())}),e(document).on("click","#nextPage",async()=>{d<T-1&&(d++,await k(d,!1),E())}),e(document).on("click",".page-number",async function(){const t=parseInt(e(this).data("page"));t!==d&&(d=t,await k(d,!1),E())}),e(document).on("click","#addNote",()=>{const t={id:"new",titulo:"Nueva Nota",contenido:"",editando:!0,fechaCreacion:new Date().toISOString()};u.push(t),$(),i("📝 Agregando nueva nota...","info")}),e(document).on("change","#itemsFilter",async function(){const t=parseInt(e(this).val());t!==F&&(F=t,d=0,console.log(`📊 Mostrando ${F} ventas por página`),await z())}),e(document).on("click","#addTour",()=>at())}e(document).ready(()=>{if(console.log("🚀 SmileTop Admin v2.0 iniciado"),typeof XLSX>"u"){const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",t.onload=()=>console.log("✅ Biblioteca XLSX cargada"),document.head.appendChild(t)}});e(document).ready(()=>{console.log("🚀 SmileTop Admin v2.0 iniciado")});
