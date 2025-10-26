import{$ as a,t as M,h as P,v as B,x as C,b as $,q,e as T,c as w,a as m,l as g,g as U,d as I,M as D,n as R,j as A,i as O,N as h,y as _,z}from"./widev-C8Ez2uC0.js";const G=()=>`
<header class="top-header">
  <div class="header-container">
    <div class="header-left">
      <h1><i class="fa-solid fa-hotel"></i> Hospedaje HClaudia</h1>
      <select id="mesFiltro" class="mes-selector">
        ${Y()}
      </select>
    </div>
    <div class="header-right">
      <button class="btn-refresh bt_cargar" title="Actualizar"><i class="fa-solid fa-rotate-right"></i></button>
      <div class="witemas">
        <div class="tema mtha" data-theme="Dulce"></div>
        <div class="tema" data-theme="Cielo"></div>
        <div class="tema" data-theme="Paz"></div>
        <div class="tema" data-theme="Mora"></div>
      </div>
      <div class="user-info">
        <img id="usrImg" src="./smile.png" alt="Usuario" class="user-avatar">
        <span id="usrNom">Cargando...</span>
      </div>
      <button class="btn-logout bt_salir">
        <i class="fa-solid fa-sign-out-alt"></i> Salir
      </button>
    </div>
  </div>
</header>

<div class="miwp">
  <div class="main-layout">
    <div class="form-panel">
      <div class="panel-header"><h2><i class="fa-solid fa-clipboard-check"></i> Registro de Habitación</h2></div>
      <div class="panel-body">
        <form id="regForm">
          <div class="form-grid">

            <div class="form-group">
              <label><i class="fa-solid fa-building"></i> Registro en</label>
              <select id="registroEn" required>
                <option value="Hawka">Hawka</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-hashtag"></i> Numero de Reserva</label>
              <input type="text" id="reservaId" placeholder="Opcional">
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-clipboard-list"></i> Fuente</label>
              <select id="tipoReserva" required>
                <option value="Directo">Directo</option>
                <option value="BOOKING">Booking</option>
                <option value="Airbnb">Airbnb</option>
                <option value="Agencia">Agencia</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-user"></i> Nombres del Cliente</label>
              <input type="text" id="nombreCliente" placeholder="Nombre completo" required>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-id-card"></i> Tipo de Documento</label>
              <select id="tipoDocumento" required>
                <option value="DNI">DNI</option>
                <option value="Carnet Extranjeria">Carnet Extranjeria</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="RUC">RUC</option>
              </select>
            </div>
            
            <div class="form-group">
              <label><i class="fa-solid fa-hashtag"></i> N° Documento</label>
              <input type="text" id="numDocumento" placeholder="Ingrese documento" required>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-bed"></i> Tipo Habitación</label>
              <select id="tipoHabitacion" required>
                <option value="">Seleccione...</option>
                <option value="Triple">Triple</option>
                <option value="DobleSimple">Doble Simple</option>
                <option value="DobleSuperior">Doble Superior</option>
                <option value="MatrimonialSimple">Matrimonial Simple</option>
                <option value="MatrimonialSuperior">Matrimonial Superior</option>
                <option value="Matrimonial Queen">Matrimonial Queen</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-door-open"></i> N° Habitación</label>
              <input type="text" id="numHabitacion" placeholder="Ej: 101">
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-dollar-sign"></i> Precio</label>
              <input type="number" id="precio" step="0.01" min="0" placeholder="150.00" required>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-coins"></i> Moneda</label>
              <select id="moneda" required>
                <option value="Soles">Soles (S/)</option>
                <option value="Dolares">Dólares (US$)</option>
              </select>
            </div>


            <div class="form-group">
              <label><i class="fa-solid fa-credit-card"></i> Pago</label>
              <select id="metodoPago" required>
                <option value="Tarjeta">Tarjeta Débito/Crédito</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
                <option value="Transferencia">Transferencia Bancaria</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-utensils"></i> Incluye Desayuno</label>
              <select id="desayuno" required>
                <option value="si">Si Incluye</option>
                <option value="no">No Incluye</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-calendar-days"></i> Noches Registrados</label>
              <input type="number" id="diasReservados" min="1" value="1" required>
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
              <label><i class="fa-solid fa-phone"></i> Celular(Opcional)</label>
              <input type="tel" id="celular" placeholder="987654321">
            </div>

           <div class="form-group">
              <label><i class="fa-solid fa-car"></i> Placa del Carro(Opcional)</label>
              <input type="tel" id="carroPlaca" placeholder="XRW134">
            </div>            

            <div class="form-group">
              <label><i class="fa-solid fa-pen"></i> Comentario(opcional)</label>
              <input type="text" id="observaciones" placeholder="Opcional">
            </div>

          </div>
          <button type="submit" class="btn-save">
            <i class="fa-solid fa-check-circle"></i> Guardar
          </button>
        </form>
      </div>
    </div>

    <div class="separator"></div>

    <div class="colabs-panel">
      <div class="panel-header"><h2><i class="fa-solid fa-users"></i> Colaboradores</h2></div>
      <div class="panel-body">
        <div class="colabs-grid" id="colGrid">
          <div class="loading-colabs"><i class="fa-solid fa-spinner fa-spin"></i> Cargando...</div>
        </div>
      </div>
    </div>
  </div>

  <div class="info-cards">
    <div class="info-card">
      <div class="card-icon" style="background:rgba(34,197,94,.1)"><i class="fa-solid fa-clipboard-check" style="color:#22c55e"></i></div>
      <div class="card-content"><span class="card-value" id="totReg">0</span><span class="card-label">Total</span></div>
    </div>
    <div class="info-card">
      <div class="card-icon" style="background:rgba(59,130,246,.1)"><i class="fa-solid fa-bed" style="color:#3b82f6"></i></div>
      <div class="card-content"><span class="card-value" id="numHab">0</span><span class="card-label">Habitaciones</span></div>
    </div>
    <div class="info-card">
      <div class="card-icon" style="background:rgba(251,191,36,.1)"><i class="fa-solid fa-coins" style="color:#fbbf24"></i></div>
      <div class="card-content"><span class="card-value" id="ingTot">S/ 0.00</span><span class="card-label">Ingreso</span></div>
    </div>
    <div class="info-card">
      <div class="card-icon" style="background:rgba(168,85,247,.1)"><i class="fa-solid fa-chart-line" style="color:#a855f7"></i></div>
      <div class="card-content"><span class="card-value" id="proNoc">S/ 0.00</span><span class="card-label">Prom/Noche</span></div>
    </div>
  </div>

  <div class="registros-section">
    <div class="section-header">
      <h2><i class="fa-solid fa-list"></i> Historial</h2>
      <div class="filters-container">
        <div class="filter-group">
          <label>Colaborador</label>
          <select id="filCola"><option value="">Todos</option></select>
        </div>
        <div class="filter-group">
          <label>Mostrar</label>
          <select id="filCant">
            <option value="5">5</option><option value="10" selected>10</option>
            <option value="15">15</option><option value="all">Todos</option>
          </select>
        </div>
      </div>
    </div>
    <div class="table-container">
      <table class="registros-table">
        <thead>
          <tr>
            <th>Check-in</th><th>Check-out</th><th>Cliente</th><th>Doc</th>
            <th>Hab</th><th>Tipo</th><th>Precio</th><th>Pago</th>
            <th>Fuente</th><th>Por</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tabBody">
          <tr><td colspan="11" style="text-align:center;color:var(--bg2);padding:2vh">Sin datos</td></tr>
        </tbody>
      </table>
    </div>
    <div class="pagination" id="pagBox"></div>
  </div>
</div>
<footer class="foo hwb txc">
  <p>Creado con <i class="wicon wi-corazon"></i> by <a class="ftx lkme" href="https://wtaype.github.io/" target="_blank">@wilder.taype</a> 2025 - HClaudia</p>
</footer>
`,Y=()=>{const e=new Date,o=[];for(let i=-2;i<=3;i++){const t=new Date(e.getFullYear(),e.getMonth()+i,1),n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`,v=i===0?"selected":"",d=t.toLocaleDateString("es-PE",{month:"long",year:"numeric"});o.push(`<option value="${n}" ${v}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`)}return o.join("")},x=e=>e?e.split("-").reverse().join("/"):"—",E=()=>{const e=a("#fechaIngreso").val(),o=parseInt(a("#diasReservados").val())||1;if(!e)return;const i=new Date(`${e}T00:00:00`);i.setDate(i.getDate()+o),a("#fechaSalida").val(i.toISOString().split("T")[0])},j=()=>{const e=new Date().toISOString().split("T")[0];a("#fechaIngreso").val(e),E()};let p=null,r=null,f=[],l=[],y=new Date().toISOString().slice(0,7),c=1,b=10;a(async()=>{a(".app").html(G()),M(P,async e=>{if(!e)return location.href="/";p=e,await Q(),await W(),await K(),L(),S()})});const L=()=>{j(),a("#diasReservados,#fechaIngreso").on("change",E),a("#regForm").on("submit",V),a("#mesFiltro").on("change",function(){y=a(this).val(),c=1,u(),S()}),a("#filCola,#filCant").on("change",function(){c=1,u()}),a(document).on("click",".bt_cargar",oa),a(document).on("click",".bt_salir",async()=>{await B(P);try{localStorage.clear()}catch{}location.href="/"}),a("#numDocumento").on("input",Z),a("#celular").on("input",function(){a(this).val(a(this).val().replace(/\D/g,"").slice(0,9))}),a("#precio").on("input",aa),a("#nombreCliente").on("input",function(){a(this).val(a(this).val().toUpperCase())}),a("#tipoDocumento").on("change",function(){const e={DNI:"12345678",RUC:"20123456789","Carnet Extranjeria":"001234567",Pasaporte:"ABC123456"};a("#numDocumento").val("").attr("placeholder",`Ej: ${e[a(this).val()]}`)}),a("#pagBox").on("click",".page-btn",function(){c=+a(this).data("page"),u()})},Q=async()=>{const e=C("wiSmile");if(e)return r=e,N();const o=await $(q(w(m,"smiles"),T("usuario","==",p.displayName)));if(!o.empty)r=o.docs[0].data(),g("wiSmile",r,450);else{const i=await U(I(m,"smiles",p.displayName));i.exists()?(r=i.data(),g("wiSmile",r,450)):r={usuario:p.displayName,nombre:p.displayName,imagen:""}}N()},N=()=>{const e=r?.nombre||r?.usuario||p.displayName;a("#usrNom").text(e),a("#usrImg").attr("src",(r?.imagen||"").trim()?r.imagen:"./smile.png"),D(`Bienvenido ${e}`)},W=async()=>{const e=C("empleadosSmile");if(e){f=e,H(),k();return}f=(await $(q(w(m,"smiles"),T("participa","==","si")))).docs.map(i=>({id:i.id,...i.data()})),g("empleadosSmile",f,300),H(),k()},H=()=>{if(!f.length)return a("#colGrid").html('<div class="no-colabs">Sin colaboradores</div>');const e=l.length||1,o=f.map((i,t)=>{const n=l.filter(d=>d.colaborador===i.nombre||d.colaborador===i.usuario).length,v=Math.round(n/e*100);return`
    <div class="colab-card ${t===0?"champion":""}">
      <div class="colab-header">
        <img src="${(i.imagen||"").trim()?i.imagen:"./smile.png"}" alt="${i.nombre||i.usuario}" class="colab-avatar">
        <div class="colab-info"><h3>${i.nombre||i.usuario}</h3><p>${i.descripcion||"Colaborador"}</p></div>
      </div>
      <div class="colab-stats">
        <div class="stat-item"><span class="stat-value">${n}</span><span class="stat-label">Registros</span></div>
        <div class="stat-item"><span class="stat-value">${v}%</span><span class="stat-label">Participacion</span></div>
      </div>
    </div>`}).join("");a("#colGrid").html(o)},k=()=>{const e=f.map(o=>`<option value="${o.nombre||o.usuario}">${o.nombre||o.usuario}</option>`).join("");a("#filCola").html(`<option value="">Todos</option>${e}`)},K=async()=>{const e=C("sm_regh");if(e){l=e,u();return}try{l=(await $(w(m,"registrosHotel"))).docs.map(i=>({id:i.id,...i.data()})),l.sort((i,t)=>new Date(t.fechaIngreso||"1970-01-01")-new Date(i.fechaIngreso||"1970-01-01")),g("sm_regh",l,300)}catch(o){console.error(o)}u()},V=async e=>{if(e.preventDefault(),!ea())return!1;try{R(!0);const o=Date.now().toString(),i={id:o,registroEn:a("#registroEn").val(),nombreCliente:a("#nombreCliente").val(),tipoDocumento:a("#tipoDocumento").val(),numDocumento:a("#numDocumento").val(),celular:a("#celular").val(),numHabitacion:a("#numHabitacion").val(),tipoHabitacion:a("#tipoHabitacion").val(),precio:parseFloat(a("#precio").val())||0,moneda:a("#moneda").val(),metodoPago:a("#metodoPago").val(),diasReservados:parseInt(a("#diasReservados").val())||1,fechaIngreso:a("#fechaIngreso").val(),fechaSalida:a("#fechaSalida").val(),tipoReserva:a("#tipoReserva").val(),reservaId:a("#reservaId").val()||"",observaciones:a("#observaciones").val()||"",colaborador:r?.nombre||r?.usuario||p.displayName,fechaRegistro:A()};await O(I(m,"registrosHotel",o),i),l.unshift(i),g("sm_regh",l,300),D("Registro guardado"),a("#regForm")[0].reset(),j(),u(),S()}catch(o){console.error(o),h("Error al guardar","error")}finally{R(!1)}return!1},X=async e=>{if(confirm("Eliminar registro?"))try{await z(I(m,"registrosHotel",e.toString())),l=l.filter(o=>o.id!=e),g("sm_regh",l,300),u(),S(),D("Registro eliminado")}catch(o){console.error(o),h("Error al eliminar","error")}},u=()=>{const e=a("#filCola").val(),o=a("#filCant").val(),i=l.filter(d=>{const s=(d.fechaIngreso||"").slice(0,7);return(!y||s===y)&&(!e||d.colaborador===e)});b=o==="all"?i.length:parseInt(o||"10");const t=Math.max(1,Math.ceil((i.length||0)/(b||1)));c>t&&(c=1);const n=(c-1)*b,v=i.slice(n,n+b);if(!v.length)a("#tabBody").html('<tr><td colspan="11" style="text-align:center;color:var(--bg2);padding:2vh">Sin datos</td></tr>');else{const d=v.map(s=>{const F=s.moneda==="Soles"?"S/":s.moneda==="Dolares"?"US$":"€";return`
      <tr>
        <td><strong>${x(s.fechaIngreso)}</strong></td>
        <td><strong>${x(s.fechaSalida)}</strong></td>
        <td>${s.nombreCliente}</td>
        <td><span class="badge">${s.tipoDocumento}</span><br>${s.numDocumento}</td>
        <td><strong>${s.numHabitacion||"-"}</strong></td>
        <td><span class="badge">${s.tipoHabitacion}</span></td>
        <td><strong>${F} ${(s.precio||0).toFixed(2)}</strong></td>
        <td><span class="badge">${s.metodoPago}</span></td>
        <td><span class="badge">${s.tipoReserva}</span></td>
        <td>${s.colaborador}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-delete" data-del="${s.id}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>`}).join("");a("#tabBody").html(d),a("#tabBody .btn-delete").off("click").on("click",function(){X(a(this).data("del"))})}J(t)},J=e=>{if(e<=1)return a("#pagBox").html("");let o="";c>1&&(o+=`<button class="page-btn" data-page="${c-1}"><i class="fa-solid fa-chevron-left"></i></button>`);for(let i=1;i<=e;i++)o+=`<button class="page-btn ${i===c?"active":""}" data-page="${i}">${i}</button>`;c<e&&(o+=`<button class="page-btn" data-page="${c+1}"><i class="fa-solid fa-chevron-right"></i></button>`),a("#pagBox").html(o)},S=()=>{const e=l.filter(t=>(t.fechaIngreso||"").startsWith(y));a("#totReg").text(e.length),a("#numHab").text(new Set(e.map(t=>t.numHabitacion).filter(Boolean)).size);let o=0,i=0;e.forEach(t=>{let n=t.precio||0;t.moneda==="Dolares"?n*=3.75:t.moneda==="Euros"&&(n*=4.1),o+=n*(parseInt(t.diasReservados)||1),i+=parseInt(t.diasReservados)||1}),a("#ingTot").text(`S/ ${o.toFixed(2)}`),a("#proNoc").text(`S/ ${i?(o/i).toFixed(2):"0.00"}`)},Z=function(){const e=a("#tipoDocumento").val();let o=a(this).val();e==="DNI"?o=o.replace(/\D/g,"").slice(0,8):e==="RUC"?o=o.replace(/\D/g,"").slice(0,11):o=o.toUpperCase().slice(0,12),a(this).val(o)},aa=function(){let e=a(this).val().replace(/[^\d.]/g,"");const o=e.split(".");o.length>2&&(e=o[0]+"."+o.slice(1).join("")),o[1]?.length>2&&(e=o[0]+"."+o[1].slice(0,2)),a(this).val(e)},ea=()=>{const e=a("#tipoDocumento").val(),o=a("#numDocumento").val(),i=a("#celular").val();if(e==="DNI"&&o.length!==8||e==="RUC"&&o.length!==11||i.length!==9)return h("Verifique documento/celular","error"),!1;const t=new Date(a("#fechaIngreso").val());return new Date(a("#fechaSalida").val())<=t?(h("Check-out debe ser posterior","error"),!1):!0},oa=()=>{["wiSmile","empleadosSmile","sm_regh"].forEach(e=>_(e)),D("Actualizado"),setTimeout(()=>location.reload(),500)};
