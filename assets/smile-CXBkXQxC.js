import{t as pa,$ as a,h as ta,M as ia,N as y,v as fa,d as _,a as C,C as ma,b as A,c as z,g as va,j as ga,i as ha,x as G,q as Y,e as Q,l as B}from"./widev-B9UvRTT4.js";let sa=null;pa(ta,async o=>{if(!o)return window.location.href="/";sa=o;try{const e=G("wiSmile");if(e)return oa(e);const s=(await A(Y(z(C,"smiles"),Q("usuario","==",o.displayName)))).docs[0].data();B("wiSmile",s,450),oa(s)}catch(e){console.error(e)}});a(document).on("click",".bt_salir",async()=>{await signOut(ta),window.location.href="/";try{localStorage.clear()}catch{Object.keys(localStorage).forEach(e=>localStorage.removeItem(e))}});a(document).on("click",".tab-btn",function(){const o=a(this).data("tab");adrm(this,"active"),adrm("#"+o+"-tab","active")});a(document).on("click",".bt_cargar",()=>{const o=/^(im\d+|ki\d+|remote:im\d+|dirty:im\d+|dirty:ki\d+|toursSmile|notasSmile)$/;Object.keys(localStorage).filter(e=>o.test(e)).forEach(e=>localStorage.removeItem(e)),ia("Actualizado"),setTimeout(()=>location.reload(),800)});let N="2025-09",S=1,U=5,R=[],E=[];function oa(o){console.log(o.nombre),ia("Bienvenido "+o.nombre+"!"),a(".app").html(`
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
  <\/script>

<footer class='foo hwb txc'>
<p>Creado con<i class='wicon wi-corazon'></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class='wty'></span><span class='abw tm11042025' id='101542394703517594'>| Acerca del app | Actualizado</span><span class='wtu'></span></p>
</footer>
    `),$a()}async function ba(){try{console.log("🔄 Cargando notas admin...");const o=G("notasSmile");if(o?.length>0){console.log(`✅ ${o.length} notas desde cache`),L(o);return}const e=await A(z(C,"notas"));if(e.empty){console.log("📭 No hay notas"),L([]);return}const i=e.docs.map(s=>({id:s.id,...s.data()}));B("notasSmile",i,600),console.log(`✅ ${i.length} notas cargadas`),L(i)}catch(o){console.error("❌ Error cargar notas:",o),L([])}}function L(o){const e=o.length>0?`
        ${o.map(i=>`<li>${i.nota}</li>`).join("")}
        <div style="font-size:var(--fz_s2);padding:.5vh 0">
            <i class="fas fa-sync"></i> Última actualización: ${new Date().toLocaleTimeString("es-ES")}
        </div>
    `:`
        <div style="color:#666;font-style:italic;text-align:center;padding:20px;">
            <i class="fas fa-info-circle"></i> No hay noticias disponibles
        </div>
    `;a(".descripcion_com").html(e)}function na(){const o=new Date,e=o.getFullYear(),i=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getDate()).padStart(2,"0");return`${e}-${i}-${s}`}function ya(o){if(!o)return"Sin fecha";const[e,i,s]=o.split("-");return`${s}/${i}/${e}`}async function $a(o){try{const e=new Date().toISOString().slice(0,7);N=e,a("#monthSelector").val(e),a("#fechaTour").val(na()),await Promise.all([Sa(),ra(),la(),Pa(),ba()]),Da(),X(),initTourSelector()}catch(e){console.error("Error inicializando dashboard:",e),y("Error cargando datos del dashboard","error")}}async function Sa(){try{const o=G("empleadosSmile");o&&(E=o,q());const e=Y(z(C,"smiles"),Q("participa","==","si"));E=(await A(e)).docs.map(s=>({id:s.id,...s.data()})),B("empleadosSmile",E,300),await K(),q()}catch(o){console.error("Error cargando empleados:",o),a("#workersGrid").html(`
            <div class="error-workers">
                <i class="fas fa-exclamation-triangle"></i>
                Error cargando empleados
            </div>
        `)}}async function K(){try{const e=(await A(z(C,"registrosdb"))).docs.filter(i=>{const s=i.data();return s.fechaTour&&s.fechaTour.startsWith(N)});E.forEach(i=>{const s=e.filter(d=>d.data().vendedor===i.usuario);i.totalPuntos=s.reduce((d,p)=>d+(p.data().puntos||0),0),i.totalVentas=s.reduce((d,p)=>d+(p.data().qventa||0),0)}),E.sort((i,s)=>s.totalPuntos-i.totalPuntos)}catch(o){console.error("Error calculando puntos:",o)}}function q(){const o=E.map((e,i)=>{const s=i+1,d=s===1,p=s===2;return`
            <div class="worker-card ${d?"champion":p?"runner-up":""}" data-employee="${e.usuario}">
                <div class="rank-badge">
                    <i class="fas fa-${d?"crown":p?"medal":"user"}"></i>
                    #${s}
                </div>
                <div class="worker-avatar">
                    <img src="${e.imagen||"/smile.png"}" alt="${e.nombre}">
                    <div class="status-online"></div>
                </div>
                <div class="worker-info">
                    <h3>${e.nombre}</h3>
                    <p>${e.descripcion}</p>
                </div>
                <div class="worker-points">
                    <span class="points-number">${e.totalPuntos||0}</span>
                    <span class="points-label">puntos</span>
                </div>
                <div class="worker-stats">
                    <div class="stat">
                        <span class="stat-value">${e.totalVentas||0}</span>
                        <span class="stat-label">Tours Vendidos</span>
                    </div>
                </div>
            </div>
        `}).join("");a("#workersGrid").html(o)}async function ra(){try{R=(await A(z(C,"registrosdb"))).docs.map(e=>({id:e.id,...e.data()})),R.sort((e,i)=>{const s=new Date(e.fechaTour||"1970-01-01");return new Date(i.fechaTour||"1970-01-01")-s}),O()}catch(o){console.error("Error cargando ventas:",o),a("#salesTableBody").html(`
            <tr><td colspan="9" class="error-cell">
                <i class="fas fa-exclamation-triangle"></i> Error cargando ventas
            </td></tr>
        `)}}function O(o="",e=!1){let i=[...R];if(i=i.filter(r=>r.fechaTour&&r.fechaTour.startsWith(N)),o&&(i=i.filter(r=>r.vendedor===o)),e){const r=new Date().toISOString().split("T")[0];i=i.filter(f=>f.fechaTour===r)}const s=Math.ceil(i.length/U),d=(S-1)*U,k=i.slice(d,d+U).map(r=>{const h=r.vendedor===sa?.displayName?`<button class="btn-view" onclick="verDetalleVenta('${r.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>
               <button class="btn-edit" onclick="editarVenta('${r.id}')" title="Editar"><i class="fas fa-edit"></i></button>
               <button class="btn-delete" onclick="eliminarVenta('${r.id}')" title="Eliminar"><i class="fas fa-trash"></i></button>`:`<button class="btn-view" onclick="verDetalleVenta('${r.id}')" title="Ver detalles"><i class="fas fa-eye"></i></button>`,I=ya(r.fechaTour),M=`${mis10(r.nombreCliente,15)}${r.numeroHabitacion?` <small>(${r.numeroHabitacion}</small>)`:""}`;return`
            <tr>
                <td>${I}</td>
                <td class="user-cell">
                    <img src="${E.find(x=>x.usuario===r.vendedor)?.imagen||"/smile.png"}" class="avatar-small">
                    <strong>${ma(r.vendedor)}</strong>
                </td>
                <td><span class="tour-badge">${r.tipoTour}</span></td>
                <td><span class="pax-badge"><i class="fas fa-users"></i> ${r.cantidadPax}</span></td>
                <td>${M}</td>
                <td><strong class="price">S/ ${(r.importeTotal||0).toFixed(2)}</strong></td>
                <td>S/ ${(r.precioUnitario||0).toFixed(2)}</td>
                <td><span class="status-badge ${r.estadoPago==="pagado"||r.estadoPago==="cobrado"?"paid":"pending"}">
                    <i class="fas fa-${r.estadoPago==="pagado"||r.estadoPago==="cobrado"?"check-circle":"clock"}"></i> 
                    ${wa(r.estadoPago)}
                </span></td>
                <td>S/ ${(r.ganancia||0).toFixed(2)}</td>
                <td><span class="points-badge"><i class="fas fa-star"></i> ${r.puntos||0}</span></td>
                <td><div class="action-buttons">${h}</div></td>
            </tr>
        `}).join("");a("#salesTableBody").html(k||'<tr><td colspan="11" class="empty-cell"><i class="fas fa-inbox"></i> No hay ventas para mostrar</td></tr>'),Ca(s)}function wa(o){return{pagado:"PAGADO",cobrado:"PAGADO",cobrar:"DEUDA"}[o]||"DEUDA"}function Ca(o){if(o<=1){a("#paginationContainer").html("");return}let e='<div class="pagination">';S>1&&(e+=`<button class="page-btn" onclick="cambiarPagina(${S-1})">
            <i class="fas fa-chevron-left"></i>
        </button>`);for(let i=1;i<=o;i++)i===S?e+=`<button class="page-btn active">${i}</button>`:e+=`<button class="page-btn" onclick="cambiarPagina(${i})">${i}</button>`;S<o&&(e+=`<button class="page-btn" onclick="cambiarPagina(${S+1})">
            <i class="fas fa-chevron-right"></i>
        </button>`),e+="</div>",a("#paginationContainer").html(e)}async function la(){try{const o=Ta(N),e=`${o.replace("-","")}`,i=await va(_(C,"ganadores",e));if(i.exists()){ea(i.data());return}const s=await A(z(C,"registrosdb")),d={};s.docs.forEach(x=>{const T=x.data();if(T.fechaTour?.startsWith(o)){const $=T.vendedor;d[$]||(d[$]={puntos:0,ventas:0}),d[$].puntos+=T.puntos||0,d[$].ventas+=T.qventa||0}});const p=Object.entries(d);if(p.length===0){a("#lastWinner").html(`
                <div class="winner-header">
                    <i class="fas fa-trophy"></i>
                    <h3>Ganador del Mes Anterior</h3>
                </div>
                <div class="no-winner">
                    <i class="fas fa-question-circle"></i>
                    <span>No hay datos disponibles</span>
                </div>
            `);return}p.sort((x,T)=>T[1].puntos-x[1].puntos);const[k,r]=p[0],[f,h]=o.split("-"),I=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],M={ganador:k,puntosGanados:r.puntos,totalVentas:r.ventas,mes:I[parseInt(h)-1],year:f,mesCompleto:o,fechaRegistro:ga()};await ha(_(C,"ganadores",e),M),ea(M)}catch(o){console.error("Error:",o),a("#lastWinner").html(`
            <div class="winner-header">
                <i class="fas fa-trophy"></i>
                <h3>Ganador del Mes Anterior</h3>
            </div>
            <div class="error-winner">
                <i class="fas fa-exclamation-triangle"></i>
                <span>Error cargando datos</span>
            </div>
        `)}}function ea(o){const e=E.find(i=>i.usuario===o.ganador||i.nombre===o.ganador);a("#lastWinner").html(`
        <div class="winner-header">
            <i class="fas fa-trophy"></i>
            <h3>Ganador del Mes Anterior</h3>
        </div>
        <div class="winner-info">
            <img src="${e?.imagen||"/smile.png"}" 
                 alt="${e?.nombre||o.ganador}">
            <div class="winner-details">
                <h4>${e?.nombre||o.ganador}</h4>
                <p>${o.mes} ${o.year}</p>
                <span class="winner-points">${o.puntosGanados} puntos</span>
                <span class="winner-sales">${o.totalVentas} tours</span>
            </div>
            <div class="winner-achievement">
                <i class="fas fa-crown"></i>
                <span>¡Campeón!</span>
            </div>
        </div>
    `)}function X(){const o=R.filter(f=>f.fechaTour&&f.fechaTour.startsWith(N)),e=new Date().toISOString().split("T")[0],i=o.filter(f=>f.fechaTour===e),s=o.reduce((f,h)=>f+(h.qventa||0),0),d=o.reduce((f,h)=>f+(h.puntos||0),0),p=i.reduce((f,h)=>f+(h.qventa||0),0),k=2500;a("#totalTours").text(s),a("#totalPuntos").text(d),a("#toursHoy").text(p);const r=[Math.min(p/5*100,100),Math.min(s/50*100,100),Math.min(d/k*100,100),100];a(".summary-stat").each((f,h)=>{const I=r[f]/100*360;a(h).css({"--progress":`${I}deg`,"--width":`${r[f]}%`})})}function Da(){const o=E.map(e=>`<option value="${e.usuario}">${e.nombre}</option>`).join("");a("#filterEmployee").html(`
        <option value="">Todos los vendedores</option>
        ${o}
    `)}a(document).on("change","#mostrarn",function(){U=parseInt(a(this).val()),S=1,O(a("#filterEmployee").val())});a(document).on("change","#monthSelector",function(){N=a(this).val(),S=1,Promise.all([K(),ra()]).then(()=>{q(),O(),X(),la()})});a(document).on("change","#filterEmployee",function(){S=1,O(a(this).val())});a(document).on("click","#todayFilter",function(){S=1,O(a("#filterEmployee").val(),!0)});window.cambiarPagina=function(o){S=o,O(a("#filterEmployee").val())};window.verDetalleVenta=function(o){const e=R.find(i=>i.id===o);if(!e){y("Venta no encontrada","error");return}ca(e,!0),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),y("Datos cargados para visualización","info")};window.editarVenta=function(o){const e=R.find(i=>i.id===o);if(!e){y("Venta no encontrada","error");return}ca(e,!1),a(".btn-save").html('<i class="fas fa-edit"></i> Actualizar Venta').attr("data-edit-id",o),document.querySelector("#formularioVenta").scrollIntoView({behavior:"smooth",block:"start"}),y("Datos cargados para edición","info")};window.eliminarVenta=function(o){const e=R.find(d=>d.id===o);if(!e){y("Venta no encontrada","error");return}!confirm(`¿Estás seguro de eliminar la venta de "${e.nombreCliente}"?

Esta acción NO se puede deshacer.`)||!confirm(`⚠️ CONFIRMACIÓN FINAL ⚠️

Se eliminará permanentemente:
• Cliente: ${e.nombreCliente}
• Tour: ${e.tipoTour}
• Importe: S/ ${e.importeTotal}

¿CONFIRMAS LA ELIMINACIÓN?

Esta acción es IRREVERSIBLE.`)||Ra(o)};function ca(o,e=!1){J(),P=F.find(i=>i.tour===o.tipoTour||o.tipoTour.includes(i.tour.split(" ")[1])),P?(a("#tourDisplay .tour-text").text(P.tour),a("#tipoTour").val(P.tour),a(`.tour-row[data-tour*='"nt":${P.nt}']`).addClass("selected")):(a("#tourDisplay .tour-text").text(o.tipoTour||"🔍 Seleccionar tour..."),a("#tipoTour").val(o.tipoTour||"")),a("#registroEn").val(o.registroEn),a("#nombreCliente").val(o.nombreCliente),a("#numeroHabitacion").val(o.numeroHabitacion||""),a("#tipoDocumento").val(o.tipoDocumento||"dni"),a("#numeroDocumento").val(o.numeroDocumento||""),a("#cantidadPax").val(o.cantidadPax||1),a("#precioUnitario").val(o.precioUnitario||0),a("#metodoPago").val(o.metodoPago||""),a("#importeTotal").val(o.importeTotal||0),a("#ganancia").val(o.ganancia||0),calcularComision(),a("#horaSalida").val(o.horaSalida),a("#Operador").val(o.Operador),a("#PagoOperador").val(o.PagoOperador||0),a("#Comentario").val(o.Comentario),a("#fechaTour").val(o.fechaTour),a("#estadoPago").val(o.estadoPago||"pagado"),a("#vtJulio").prop("checked",o.esVentaJulio||!1),a("#vtSonia").prop("checked",o.esVentaSonia||!1),a("#vtExterna").prop("checked",o.esVentaExterna||!1),Ea(),e?(a("#formularioVenta input, #formularioVenta select, .tour-display").prop("disabled",!0),a(".btn-save").prop("disabled",!0).html('<i class="fas fa-eye"></i> Solo Vista'),a("#formularioVenta").addClass("view-only"),a(".btn-clear-view").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-clear-view" style="background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Limpiar Vista
                </button>
            `)):(a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".tour-display").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").addClass("edit-mode"),a(".btn-cancel-edit").length===0&&a(".form-actions").prepend(`
                <button type="button" class="btn-cancel-edit" style="background: #dc3545; color: white; border: none; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">
                    <i class="fas fa-times"></i> Cancelar Edición
                </button>
            `))}function Ea(){const o=parseInt(a("#cantidadPax").val())||1,e=P?P.pts:0,s=a("#vtJulio").prop("checked")||a("#vtSonia").prop("checked")||a("#vtExterna").prop("checked")?0:e*o;a("#vistaPreviaLaPuntos").text(s)}function J(){const o=na(),e=1;P=null,a("#formularioVenta input, #formularioVenta select").prop("disabled",!1),a(".btn-save").prop("disabled",!1),a("#formularioVenta").removeClass("view-only edit-mode"),a(".btn-save").html('<i class="fas fa-save"></i> Guardar Venta').removeAttr("data-edit-id"),a(".btn-clear-view, .btn-cancel-edit").remove(),a("#formularioVenta")[0].reset(),a("#cantidadPax").val(e),a("#fechaTour").val(o),a("#vistaPreviaLaPuntos").text("0"),a("#tourDisplay .tour-text").text("🔍 Seleccionar tour..."),a(".tour-row").removeClass("selected"),a("#importeTotal").prop("disabled",!0)}async function Ra(o){try{y("Eliminando venta...","info"),await fa(_(C,"registrosdb",o));const e=[];for(let s=0;s<localStorage.length;s++){const d=localStorage.key(s);if(d&&d.startsWith("vendedor_"))try{const p=JSON.parse(localStorage.getItem(d));p&&p.idVenta===o&&e.push(d)}catch{}}e.forEach(s=>localStorage.removeItem(s)),R=R.filter(s=>s.id!==o),await K(),q(),O(),X(),a(".btn-save").attr("data-edit-id")===o&&J(),y("¡Venta eliminada exitosamente!","success")}catch(e){console.error("Error eliminando venta:",e),y("Error al eliminar la venta. Inténtalo nuevamente.","error")}}a(document).on("click",".btn-clear-view",function(){J(),y("Vista limpiada","info")});a(document).on("click",".btn-cancel-edit",function(){J(),y("Edición cancelada","info")});function Ta(o){const[e,i]=o.split("-"),s=new Date(parseInt(e),parseInt(i)-2);return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`}let F=[];async function Pa(){try{console.log("🔄 Cargando tours...");const o=G("toursSmile");if(o?.length>0){F=o.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),console.log(`✅ ${F.length} tours desde cache`),typeof initTourSelector=="function"&&initTourSelector();return}const e=await A(Y(z(C,"listatours"),Q("activo","==",!0)));if(e.empty){console.log("❌ No hay tours activos"),F=[];return}const i=e.docs.map(s=>({id:s.id,...s.data()}));F=i.map(s=>({nt:s.num||Math.random(),tour:s.tour,price:s.precio,pts:s.puntos,com:s.comision||5})),B("toursSmile",i,300),console.log(`✅ ${F.length} tours cargados desde Firebase`),typeof initTourSelector=="function"&&initTourSelector()}catch(o){console.error("❌ Error cargando tours:",o),y("Error al cargar tours","error")}}let P=null;a(document).ready(function(){let o=[],e=null,i=1,s=5;const d="María González",p=new Date().toISOString().split("T")[0];function k(){r(),h(),I(),M(),aa()}function r(){a("#fechaIngreso").val(p).attr("min",p),a("#fechaSalida").attr("min",p),f(),a("#diasReservados, #fechaIngreso").on("change",f)}function f(){const n=a("#fechaIngreso").val(),t=parseInt(a("#diasReservados").val())||1;if(n){const l=new Date(n+"T00:00:00");l.setDate(l.getDate()+t),a("#fechaSalida").val(l.toISOString().split("T")[0])}}function h(){const n=localStorage.getItem("hotelTheme")||"Dulce";a("html").attr("data-theme",n),a(`.tema[data-theme="${n}"]`).addClass("mtha"),a(".tema").on("click",function(){const t=a(this).data("theme");a("html").attr("data-theme",t),a(".tema").removeClass("mtha"),a(this).addClass("mtha"),localStorage.setItem("hotelTheme",t)})}function I(){a("#numDocumento").on("input",function(){const n=a("#tipoDocumento").val();let t=a(this).val();n==="DNI"?a(this).val(t.replace(/\D/g,"").slice(0,8)):n==="RUC"?a(this).val(t.replace(/\D/g,"").slice(0,11)):n==="Carnet Extranjeria"?a(this).val(t.toUpperCase().slice(0,12)):n==="Pasaporte"&&a(this).val(t.toUpperCase().slice(0,9))}),a("#tipoDocumento").on("change",function(){const n={DNI:"Ej: 12345678",RUC:"Ej: 20123456789","Carnet Extranjeria":"Ej: 001234567",Pasaporte:"Ej: ABC123456"};a("#numDocumento").val("").attr("placeholder",n[a(this).val()])}),a("#celular").on("input",function(){a(this).val(a(this).val().replace(/\D/g,"").slice(0,9))}),a("#precio").on("input",function(){let n=a(this).val();n=n.replace(/[^\d.]/g,"");const t=n.split(".");t.length>2&&(n=t[0]+"."+t.slice(1).join("")),t[1]&&t[1].length>2&&(n=t[0]+"."+t[1].slice(0,2)),a(this).val(n)}),a("#nombreCliente").on("input",function(){a(this).val(a(this).val().toUpperCase())})}function M(){a("#registroForm").on("submit",x),a("#mesFiltro").on("change",function(){i=1,j(),H(),$()}),a("#filterColaborador, #filterCantidad").on("change",function(){i=1,$()}),window.cerrarSesion=function(){confirm("¿Está seguro que desea cerrar sesión?")&&D("Sesión cerrada correctamente","info")},window.actualizarDatos=function(){a(".btn-refresh i").css("transform","rotate(360deg)"),setTimeout(()=>{a(".btn-refresh i").css("transform","rotate(0deg)"),aa(),D("Datos actualizados correctamente","success")},500)}}function x(n){n.preventDefault();const t=a("#tipoDocumento").val(),l=a("#numDocumento").val(),m=a("#celular").val();if(t==="DNI"&&l.length!==8||t==="RUC"&&l.length!==11||m.length!==9)return D("⚠️ Verifique los datos ingresados","warning"),!1;const u=new Date(a("#fechaIngreso").val());if(new Date(a("#fechaSalida").val())<=u)return D("⚠️ La fecha de Check-out debe ser posterior al Check-in","error"),!1;const v={id:e?e.id:Date.now(),registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val(),tipoDocumento:a("#tipoDocumento").val(),numDocumento:a("#numDocumento").val(),celular:a("#celular").val(),numHabitacion:a("#numHabitacion").val(),tipoHabitacion:a("#tipoHabitacion").val(),precio:parseFloat(a("#precio").val())||0,moneda:a("#moneda").val(),metodoPago:a("#metodoPago").val(),diasReservados:parseInt(a("#diasReservados").val())||1,fechaIngreso:a("#fechaIngreso").val(),fechaSalida:a("#fechaSalida").val(),tipoReserva:a("#tipoReserva").val(),bookingId:a("#bookingId").val(),observaciones:a("#observaciones").val(),colaborador:d,fechaRegistro:e?e.fechaRegistro:new Date().toISOString()};if(e){const c=o.findIndex(w=>w.id===e.id);o[c]=v,e=null,a(".btn-save").html('<i class="fa-solid fa-check-circle"></i> Registrar Reserva'),D("✅ Registro actualizado correctamente","success")}else o.unshift(v),D("✅ Registro guardado exitosamente","success");return Z(),T(),j(),H(),$(),!1}function T(){a("#registroForm")[0].reset(),a("#registroEn").val("HClaudia"),a("#tipoDocumento").val("DNI"),a("#moneda").val("Soles"),a("#metodoPago").val("Tarjeta"),a("#tipoReserva").val("Directo"),a("#diasReservados").val("1"),a("#fechaIngreso").val(p),f()}function $(){const n=a("#mesFiltro").val(),t=a("#filterColaborador").val(),l=a("#filterCantidad").val();let m=o.filter(w=>{const g=w.fechaIngreso.substring(0,7),W=!n||g===n,ua=!t||w.colaborador===t;return W&&ua});s=l==="all"?m.length:parseInt(l);const u=Math.ceil(m.length/s);i>u&&(i=1);const b=(i-1)*s,v=b+s,c=m.slice(b,v);if(c.length===0)a("#registrosTableBody").html(`
        <tr>
          <td colspan="11" style="text-align: center; padding: 3vh; color: var(--bg2); font-style: italic;">
            No se encontraron registros con los filtros seleccionados.
          </td>
        </tr>
      `);else{const w=c.map(g=>{const W=g.moneda==="Soles"?"S/":g.moneda==="Dolares"?"US$":"€";return`
          <tr>
            <td><strong>${V(g.fechaIngreso)}</strong></td>
            <td><strong>${V(g.fechaSalida)}</strong></td>
            <td>${g.nombreCliente}</td>
            <td><span class="badge badge-tipo">${g.tipoDocumento}</span><br>${g.numDocumento}</td>
            <td><strong>${g.numHabitacion}</strong></td>
            <td><span class="badge badge-tipo">${g.tipoHabitacion}</span></td>
            <td><strong>${W} ${g.precio.toFixed(2)}</strong></td>
            <td><span class="badge badge-reserva">${g.metodoPago}</span></td>
            <td><span class="badge badge-reserva">${g.tipoReserva}</span></td>
            <td>${g.colaborador}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-action btn-view" onclick="verRegistro(${g.id})" title="Ver">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn-action btn-edit" onclick="editarRegistro(${g.id})" title="Editar">
                  <i class="fa-solid fa-edit"></i>
                </button>
                <button class="btn-action btn-delete" onclick="eliminarRegistro(${g.id})" title="Eliminar">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        `}).join("");a("#registrosTableBody").html(w)}da(u)}function da(n){if(n<=1){a("#paginationContainer").html("");return}let t="";i>1&&(t+=`<button class="page-btn" onclick="cambiarPagina(${i-1})">
        <i class="fa-solid fa-chevron-left"></i>
      </button>`);for(let l=1;l<=n;l++)l===1||l===n||l>=i-1&&l<=i+1?t+=`<button class="page-btn ${l===i?"active":""}" 
                  onclick="cambiarPagina(${l})">${l}</button>`:(l===i-2||l===i+2)&&(t+='<span class="page-info">...</span>');i<n&&(t+=`<button class="page-btn" onclick="cambiarPagina(${i+1})">
        <i class="fa-solid fa-chevron-right"></i>
      </button>`),a("#paginationContainer").html(t)}window.cambiarPagina=function(n){i=n,$()},window.verRegistro=function(n){const t=o.find(m=>m.id===n);if(!t)return;const l=t.moneda==="Soles"?"S/":t.moneda==="Dolares"?"US$":"€";alert(`
═══════════════════════════════════
📋 DETALLES DEL REGISTRO
═══════════════════════════════════

🏨 Registro en: ${t.registroEn}
👤 Cliente: ${t.nombreCliente}
🆔 Documento: ${t.tipoDocumento} - ${t.numDocumento}
📱 Celular: ${t.celular}
🚪 Habitación: ${t.numHabitacion} - ${t.tipoHabitacion}
💵 Precio: ${l} ${t.precio.toFixed(2)}
💳 Método de Pago: ${t.metodoPago}
📅 Días Reservados: ${t.diasReservados}
📅 Check-in: ${V(t.fechaIngreso)}
📅 Check-out: ${V(t.fechaSalida)}
📋 Fuente: ${t.tipoReserva}
🔖 Booking ID: ${t.bookingId||"No especificado"}
👨‍💼 Registrado por: ${t.colaborador}
📝 Observaciones: ${t.observaciones||"Sin observaciones"}

═══════════════════════════════════
    `)},window.editarRegistro=function(n){const t=o.find(l=>l.id===n);t&&(e=t,a("#registroEn").val(t.registroEn),a("#nombreCliente").val(t.nombreCliente),a("#tipoDocumento").val(t.tipoDocumento),a("#numDocumento").val(t.numDocumento),a("#celular").val(t.celular),a("#numHabitacion").val(t.numHabitacion),a("#tipoHabitacion").val(t.tipoHabitacion),a("#precio").val(t.precio),a("#moneda").val(t.moneda),a("#metodoPago").val(t.metodoPago),a("#diasReservados").val(t.diasReservados),a("#fechaIngreso").val(t.fechaIngreso),a("#fechaSalida").val(t.fechaSalida),a("#tipoReserva").val(t.tipoReserva),a("#bookingId").val(t.bookingId),a("#observaciones").val(t.observaciones),a(".btn-save").html('<i class="fa-solid fa-save"></i> Actualizar Registro'),a("html, body").animate({scrollTop:0},"smooth"))},window.eliminarRegistro=function(n){confirm("¿Está seguro de eliminar este registro?")&&(o=o.filter(t=>t.id!==n),Z(),j(),H(),$(),D("🗑️ Registro eliminado correctamente","warning"))};function H(){const n=a("#mesFiltro").val(),t=o.filter(v=>{const c=v.fechaIngreso.substring(0,7);return!n||c===n});a("#totalRegistros").text(t.length);const l=new Set(t.map(v=>v.numHabitacion));a("#habitacionesOcupadas").text(l.size);let m=0,u=0;t.forEach(v=>{let c=v.precio;v.moneda==="Dolares"?c*=3.75:v.moneda==="Euros"&&(c*=4.1),m+=c*v.diasReservados,u+=v.diasReservados}),a("#ingresoTotal").text(`S/ ${m.toFixed(2)}`);const b=u>0?m/u:0;a("#promedioNoche").text(`S/ ${b.toFixed(2)}`)}function j(){const n=a("#mesFiltro").val(),t={"María González":0,"Carlos Pérez":0,"Ana Rodríguez":0},l=o.filter(u=>{const b=u.fechaIngreso.substring(0,7);return!n||b===n});l.forEach(u=>{t.hasOwnProperty(u.colaborador)&&t[u.colaborador]++});const m=l.length;a.each(t,function(u,b){const v=m>0?Math.round(b/m*100):0;a(`[data-colaborador="${u}"]`).text(b),a(`[data-colaborador-pct="${u}"]`).text(v+"%")})}function V(n){const[t,l,m]=n.split("-");return`${m}/${l}/${t}`}function D(n,t="success"){const m={success:{bg:"linear-gradient(135deg, #10b981, #059669)",icon:"fa-circle-check"},error:{bg:"linear-gradient(135deg, #ef4444, #dc2626)",icon:"fa-circle-xmark"},warning:{bg:"linear-gradient(135deg, #f59e0b, #d97706)",icon:"fa-triangle-exclamation"},info:{bg:"linear-gradient(135deg, #3b82f6, #2563eb)",icon:"fa-circle-info"}}[t],u=a("<div>").css({position:"fixed",top:"10vh",right:"2vw",background:m.bg,color:"white",padding:"1.5vh 2vw",borderRadius:"1vh",boxShadow:"0 0.5vh 2vh rgba(0,0,0,0.3)",display:"flex",alignItems:"center",gap:"1vh",fontWeight:"600",zIndex:2e3,animation:"slideIn 0.4s ease",minWidth:"300px"}).html(`
      <i class="fa-solid ${m.icon}" style="font-size: 1.5em;"></i>
      <span>${n}</span>
    `);a("body").append(u),setTimeout(()=>{u.fadeOut(400,function(){a(this).remove()})},3e3)}function Z(){localStorage.setItem("hotelRegistros",JSON.stringify(o))}function aa(){const n=localStorage.getItem("hotelRegistros");n&&(o=JSON.parse(n),$(),j(),H())}window.exportarExcel=function(){const n=a("#mesFiltro").val(),t=o.filter(c=>{const w=c.fechaIngreso.substring(0,7);return!n||w===n});if(t.length===0){D("⚠️ No hay registros para exportar","warning");return}let l=`Check-in,Check-out,Cliente,Tipo Doc,Num Doc,Celular,Habitación,Tipo Hab,Precio,Moneda,Método Pago,Días,Fuente,Booking ID,Registrado por,Observaciones
`;t.forEach(c=>{const w=c.moneda==="Soles"?"S/":c.moneda==="Dolares"?"US$":"€";l+=`${V(c.fechaIngreso)},${V(c.fechaSalida)},"${c.nombreCliente}",${c.tipoDocumento},${c.numDocumento},${c.celular},${c.numHabitacion},${c.tipoHabitacion},"${w} ${c.precio.toFixed(2)}",${c.moneda},${c.metodoPago},${c.diasReservados},${c.tipoReserva},"${c.bookingId||""}",${c.colaborador},"${c.observaciones||""}"
`});const m=new Blob([l],{type:"text/csv;charset=utf-8;"}),u=document.createElement("a"),b=URL.createObjectURL(m),v=a("#mesFiltro option:selected").text();u.setAttribute("href",b),u.setAttribute("download",`Registros_HClaudia_${v.replace(" ","_")}.csv`),u.style.visibility="hidden",document.body.appendChild(u),u.click(),document.body.removeChild(u),D("✅ Archivo exportado correctamente","success")},k()});
