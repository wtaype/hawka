import{$ as a,t as O,h as T,v as Y,x as w,b as I,q as j,e as q,c as P,a as b,l as g,g as L,d as x,M as D,n as H,j as k,i as Q,N as m,y as V,z as W}from"./widev-DkHXNduW.js";const J=()=>`
<header class="top-header">
  <div class="header-container">
    <div class="header-left">
      <h1><i class="fa-solid fa-hotel"></i> Hospedaje Hawka</h1>
      <select id="mesFiltro" class="mes-selector">${K()}</select>
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
      <button class="btn-logout bt_salir"><i class="fa-solid fa-sign-out-alt"></i> Salir</button>
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
                <option value="Hawka" selected>Hawka</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-hashtag"></i> Numero de Reserva</label>
              <input type="text" id="reservaId" placeholder="Opcional">
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-credit-card"></i> Estado del Pago</label>
              <select id="estadoPago" required>
                <option value="pagado selected">Pagado</option>
                <option value="deuda">Deuda</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-user"></i> Nombre del Cliente</label>
              <input type="text" id="nombreCliente" placeholder="Nombre completo" required>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-id-card"></i> Tipo de Documento</label>
              <select id="tipoDocumento" required>
                <option value="DNI">DNI</option>
                <option value="Carnet Extranjeria">Carnet Extranjeria</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Cedula">Cédula</option>
                <option value="RUC">RUC</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-hashtag"></i> N° Documento</label>
              <input type="text" id="numDocumento" placeholder="Ingrese documento" required>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-bed"></i> Tipo Hab</label>
              <select id="tipoHabitacion" required>
                <option value="">Seleccione...</option>
                <option value="Simple">Simple</option>
                <option value="Doble">Doble</option>
                <option value="Triple">Triple</option>
                <option value="Matrimonial">Matrimonial</option>
                <option value="Matrimonial Queen">Matrimonial Queen</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-door-open"></i> Habitación</label>
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
              <label><i class="fa-solid fa-money-check-dollar"></i> Método</label>
              <select id="metodoPago" required>
                <option value="Tarjeta">Tarjeta de Débito/Crédito</option>
                <option value="Transferencia">Transferencia Bancaria</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
                <option value="Efectivo">Efectivo</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-utensils"></i> Incluye Desayuno</label>
              <select id="desayuno">
              <option value="si" selected>Si incluye</option>
                <option value="no">No incluye</option>
              </select>
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-calendar-days"></i> Noches Rervados</label>
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
              <label><i class="fa-solid fa-car"></i> Número de Placa</label>
              <input type="text" id="carroPlaca" placeholder="Opcional">
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-phone"></i> Celular</label>
              <input type="tel" id="celular" placeholder="987654321">
            </div>

            <div class="form-group">
              <label><i class="fa-solid fa-comment"></i> Comentario</label>
              <input type="text" id="comentario" placeholder="Opcional">
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
      <div class="panel-body"><div class="colabs-grid" id="colGrid"><div class="loading-colabs"><i class="fa-solid fa-spinner fa-spin"></i> Cargando...</div></div></div>
    </div>
  </div>

  <div class="info-cards">
    <div class="info-card"><div class="card-icon" style="background:rgba(34,197,94,.1)"><i class="fa-solid fa-clipboard-check" style="color:#22c55e"></i></div><div class="card-content"><span class="card-value" id="totReg">0</span><span class="card-label">Total</span></div></div>
    <div class="info-card"><div class="card-icon" style="background:rgba(59,130,246,.1)"><i class="fa-solid fa-bed" style="color:#3b82f6"></i></div><div class="card-content"><span class="card-value" id="numHab">0</span><span class="card-label">Habitaciones</span></div></div>
    <div class="info-card"><div class="card-icon" style="background:rgba(251,191,36,.1)"><i class="fa-solid fa-coins" style="color:#fbbf24"></i></div><div class="card-content"><span class="card-value" id="ingTot">S/ 0.00</span><span class="card-label">Ingreso</span></div></div>
    <div class="info-card"><div class="card-icon" style="background:rgba(168,85,247,.1)"><i class="fa-solid fa-chart-line" style="color:#a855f7"></i></div><div class="card-content"><span class="card-value" id="proNoc">S/ 0.00</span><span class="card-label">Prom/Noche</span></div></div>
  </div>

  <div class="registros-section">
    <div class="section-header">
      <h2><i class="fa-solid fa-list"></i> Historial</h2>
      <div class="filters-container">
        <div class="filter-group"><label>Colaborador</label><select id="filCola"><option value="">Todos</option></select></div>
        <div class="filter-group"><label>Mostrar</label><select id="filCant"><option value="5">5</option><option value="10" selected>10</option><option value="15">15</option><option value="all">Todos</option></select></div>
      </div>
    </div>

    <div class="table-container">
      <table class="registros-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Cliente</th>
            <th>Doc</th>
            <th>Hab - Tipo</th>
            <th>Precio</th>
            <th>Pago</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="tabBody">
          <tr><td colspan="10" style="text-align:center;color:var(--bg2);padding:2vh">Sin datos</td></tr>
        </tbody>
      </table>
    </div>

    <div class="pagination" id="pagBox"></div>
  </div>
</div>

<footer class="foo hwb txc">
  <p>Creado con <i class="wicon wi-corazon"></i> by <a class="ftx lkme" href="https://wtaype.github.io/" target="_blank">@wilder.taype</a> 2025 - Hawka</p>
</footer>
`,K=()=>{const o=new Date,e=[];for(let t=-2;t<=3;t++){const i=new Date(o.getFullYear(),o.getMonth()+t,1),l=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}`,c=t===0?"selected":"",d=i.toLocaleDateString("es-PE",{month:"long",year:"numeric"});e.push(`<option value="${l}" ${c}>${d.charAt(0).toUpperCase()+d.slice(1)}</option>`)}return e.join("")},F=o=>o?o.split("-").reverse().join("/"):"—",X=o=>{if(!o)return"—";const e=o.toDate?o.toDate():typeof o=="string"?new Date(o):new Date(o),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),l=e.getFullYear(),c=String(e.getHours()).padStart(2,"0"),d=String(e.getMinutes()).padStart(2,"0");return`${t}/${i}/${l} ${c}:${d}`},B=()=>{const o=a("#fechaIngreso").val(),e=parseInt(a("#diasReservados").val())||1;if(!o)return;const t=new Date(`${o}T00:00:00`);t.setDate(t.getDate()+e),a("#fechaSalida").val(t.toISOString().split("T")[0])},M=()=>{const o=new Date().toISOString().split("T")[0];a("#fechaIngreso").val(o),B()};let r=null,u=null,h=[],n=[],y=new Date().toISOString().slice(0,7),p=1,C=10,v=null,S=!1;a(async()=>{a(".app").html(J()),O(T,async o=>{if(!o)return location.href="/";r=o,await aa(),await ea(),await oa(),y=a("#mesFiltro").val()||y,Z(),$()})});const Z=()=>{M(),a("#diasReservados,#fechaIngreso").on("change",B),a("#regForm").on("submit",sa),a("#mesFiltro").on("change",function(){y=a(this).val(),p=1,f(),$()}),a("#filCola,#filCant").on("change",function(){p=1,f()}),a(document).on("click",".bt_cargar",va),a(document).on("click",".bt_salir",async()=>{await Y(T);try{localStorage.clear()}catch{}location.href="/"}),a(document).on("click",".btn-cancel",U),a("#numDocumento").on("input",da),a("#celular").on("input",function(){a(this).val(a(this).val().replace(/\D/g,"").slice(0,9))}),a("#precio").on("input",ua),a("#nombreCliente").on("input",function(){a(this).val(a(this).val().toUpperCase())}),a("#tipoDocumento").on("change",function(){const o={DNI:"12345678",RUC:"20123456789","Carnet Extranjeria":"001234567",Pasaporte:"ABC123456"};a("#numDocumento").val("").attr("placeholder",`Ej: ${o[a(this).val()]}`)}),a("#pagBox").on("click",".page-btn",function(){p=+a(this).data("page"),f()})},aa=async()=>{const o=w("wiSmile");if(o)return u=o,R();const e=await I(j(P(b,"smiles"),q("usuario","==",r.displayName)));if(!e.empty)u=e.docs[0].data(),g("wiSmile",u,450);else{const t=await L(x(b,"smiles",r.displayName));u=t.exists()?t.data():{usuario:r.displayName,nombre:r.displayName,imagen:""},g("wiSmile",u,450)}R()},R=()=>{const o=u?.nombre||u?.usuario||r.displayName;a("#usrNom").text(o),a("#usrImg").attr("src",(u?.imagen||"").trim()?u.imagen:"./smile.png"),D(`Bienvenido ${o}`)},ea=async()=>{const o=w("empleadosSmile");if(o){h=o,E(),N();return}h=(await I(j(P(b,"smiles"),q("participa","==","si")))).docs.map(t=>({id:t.id,...t.data()})),g("empleadosSmile",h,300),E(),N()},E=()=>{if(!h.length)return a("#colGrid").html('<div class="no-colabs">Sin colaboradores</div>');const o=n.length||1,e=h.map((t,i)=>{const l=n.filter(d=>d.colaborador===t.nombre||d.colaborador===t.usuario).length,c=Math.round(l/o*100);return`
    <div class="colab-card ${i===0?"champion":""}">
      <div class="colab-header">
        <img src="${(t.imagen||"").trim()?t.imagen:"./smile.png"}" alt="${t.nombre||t.usuario}" class="colab-avatar">
        <div class="colab-info"><h3>${t.nombre||t.usuario}</h3><p>${t.descripcion||"Colaborador"}</p></div>
      </div>
      <div class="colab-stats">
        <div class="stat-item"><span class="stat-value">${l}</span><span class="stat-label">Registros</span></div>
        <div class="stat-item"><span class="stat-value">${c}%</span><span class="stat-label">Participacion</span></div>
      </div>
    </div>`}).join("");a("#colGrid").html(e)},N=()=>{a("#filCola").html(['<option value="">Todos</option>',...h.map(o=>`<option value="${o.nombre||o.usuario}">${o.nombre||o.usuario}</option>`)].join(""))},oa=async()=>{const o=w("hc_regh");if(o){n=o,f();return}try{n=(await I(P(b,"registrosHotel"))).docs.map(t=>({id:t.id,...t.data()})),n.sort((t,i)=>{const l=t.fechaCreacion?.toDate?t.fechaCreacion.toDate():new Date(t.fechaCreacion||t.fechaIngreso||"1970-01-01");return(i.fechaCreacion?.toDate?i.fechaCreacion.toDate():new Date(i.fechaCreacion||i.fechaIngreso||"1970-01-01"))-l}),g("hc_regh",n,300)}catch(e){console.error(e)}f()},ta=(o,e="Guardando...")=>{o.data("old",o.html()).prop("disabled",!0).addClass("is-dis").html(`<i class="fa-solid fa-spinner fa-spin"></i> ${e}`)},ia=o=>{o.prop("disabled",!1).removeClass("is-dis").html(o.data("old")||'<i class="fa-solid fa-check-circle"></i> Guardar')},sa=async o=>{if(o.preventDefault(),S)return U();if(!pa())return!1;const e=a(".btn-save");try{H(!0),ta(e,v?"Actualizando...":"Guardando...");const t=v||Date.now().toString(),i=(a("#carroPlaca").val()||"").trim(),l={id:t,registroEn:a("#registroEn").val()||"HClaudia",reservaId:a("#reservaId").val()||"",estadoPago:a("#estadoPago").val()||"deuda",nombreCliente:a("#nombreCliente").val(),tipoDocumento:a("#tipoDocumento").val(),numDocumento:a("#numDocumento").val(),tipoHabitacion:a("#tipoHabitacion").val(),numHabitacion:a("#numHabitacion").val(),precio:parseFloat(a("#precio").val())||0,moneda:a("#moneda").val(),metodoPago:a("#metodoPago").val(),desayuno:a("#desayuno").val()||"no",diasReservados:parseInt(a("#diasReservados").val())||1,fechaIngreso:a("#fechaIngreso").val(),fechaSalida:a("#fechaSalida").val(),carroPlaca:i,cochera:i?"si":"no",comentario:a("#comentario").val()||"",celular:a("#celular").val()||"",colaborador:u?.nombre||u?.usuario||r.displayName,usuario:r.displayName||u?.usuario||"",email:r.email||"",uid:r.uid||"",fechaCreacion:v?void 0:k(),fechaActualizacion:k()};if(Object.keys(l).forEach(c=>l[c]===void 0&&delete l[c]),await Q(x(b,"registrosHotel",t),l,{merge:!0}),v){const c=n.findIndex(d=>d.id==t);c>-1&&(n[c]={...n[c],...l}),D("Registro actualizado")}else n.unshift(l),D("Registro guardado");g("hc_regh",n,300),z(),f(),$()}catch(t){console.error(t),m("Error al guardar","error")}finally{H(!1),ia(e)}return!1},la=async o=>{const e=n.find(t=>t.id==o);if(e&&e.uid&&r?.uid&&e.uid!==r.uid){m("No autorizado","error");return}if(confirm("¿Estás seguro que deseas eliminar este registro?")&&confirm("Esta acción no se puede deshacer. ¿Confirmas la eliminación definitiva?"))try{await W(x(b,"registrosHotel",o.toString())),n=n.filter(t=>t.id!=o),g("hc_regh",n,300),f(),$(),D("Registro eliminado correctamente")}catch(t){console.error(t),m("Error al eliminar","error")}},na=o=>{const e=n.find(t=>t.id==o);e&&(S=!0,v=null,a("#registroEn").val(e.registroEn||""),a("#reservaId").val(e.reservaId||""),a("#estadoPago").val(e.estadoPago||"deuda"),a("#nombreCliente").val(e.nombreCliente||""),a("#tipoDocumento").val(e.tipoDocumento||""),a("#numDocumento").val(e.numDocumento||""),a("#tipoHabitacion").val(e.tipoHabitacion||""),a("#numHabitacion").val(e.numHabitacion||""),a("#precio").val(e.precio||0),a("#moneda").val(e.moneda||""),a("#metodoPago").val(e.metodoPago||""),a("#desayuno").val(e.desayuno||"no"),a("#diasReservados").val(e.diasReservados||1),a("#fechaIngreso").val(e.fechaIngreso||""),a("#fechaSalida").val(e.fechaSalida||""),a("#carroPlaca").val(e.carroPlaca||""),a("#comentario").val(e.comentario||""),a("#celular").val(e.celular||""),a("#regForm input, #regForm select, #regForm textarea").prop("disabled",!0),a(".btn-save").hide(),a(".btn-cancel").length||a(".btn-save").after('<button type="button" class="btn-cancel"><i class="fa-solid fa-times"></i> Cerrar</button>'),a(".btn-cancel").show(),a("html,body").animate({scrollTop:0},300))},ra=o=>{const e=n.find(t=>t.id==o);if(e){if(e&&e.uid&&r?.uid&&e.uid!==r.uid){m("No autorizado","error");return}S=!1,v=e.id,a("#registroEn").val(e.registroEn||""),a("#reservaId").val(e.reservaId||""),a("#estadoPago").val(e.estadoPago||"deuda"),a("#nombreCliente").val(e.nombreCliente||""),a("#tipoDocumento").val(e.tipoDocumento||""),a("#numDocumento").val(e.numDocumento||""),a("#tipoHabitacion").val(e.tipoHabitacion||""),a("#numHabitacion").val(e.numHabitacion||""),a("#precio").val(e.precio||0),a("#moneda").val(e.moneda||""),a("#metodoPago").val(e.metodoPago||""),a("#desayuno").val(e.desayuno||"no"),a("#diasReservados").val(e.diasReservados||1),a("#fechaIngreso").val(e.fechaIngreso||""),a("#fechaSalida").val(e.fechaSalida||""),a("#carroPlaca").val(e.carroPlaca||""),a("#comentario").val(e.comentario||""),a("#celular").val(e.celular||""),a("#regForm input, #regForm select, #regForm textarea").prop("disabled",!1),a(".btn-save").html('<i class="fa-solid fa-floppy-disk"></i> Actualizar').show(),a(".btn-cancel").length||a(".btn-save").after('<button type="button" class="btn-cancel"><i class="fa-solid fa-times"></i> Cancelar</button>'),a(".btn-cancel").show(),a("html,body").animate({scrollTop:0},300)}},U=()=>{z()},z=()=>{a("#regForm")[0].reset(),M(),v=null,S=!1,a("#regForm input, #regForm select, #regForm textarea").prop("disabled",!1),a(".btn-save").html('<i class="fa-solid fa-check-circle"></i> Guardar').show(),a(".btn-cancel").hide()},f=()=>{const o=a("#filCola").val(),e=a("#filCant").val(),t=n.filter(d=>{const s=(d.fechaIngreso||"").slice(0,7);return(!y||s===y)&&(!o||d.colaborador===o)});C=e==="all"?t.length:parseInt(e||"10");const i=Math.max(1,Math.ceil((t.length||0)/(C||1)));p>i&&(p=1);const l=(p-1)*C,c=t.slice(l,l+C);if(!c.length)a("#tabBody").html('<tr><td colspan="10" style="text-align:center;color:var(--bg2);padding:2vh">Sin datos</td></tr>');else{const d=c.map(s=>{const A=s.moneda==="Soles"?"S/":s.moneda==="Dolares"?"US$":"€",_=s.uid&&r?.uid?s.uid===r.uid:s.email&&r?.email?s.email===r.email:!0,G=s.estadoPago==="pagado"?'<span class="badge ok">Pagado</span>':'<span class="badge warn">Deuda</span>';return`
      <tr>
        <td>${X(s.fechaCreacion)}</td>
        <td>
          <div class="urow">
            <img class="colab-avatar" src="${(s.usuarioImg||"").trim()?s.usuarioImg:"./smile.png"}" alt="${s.usuario||s.colaborador||""}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;margin-right:8px">
            <span>${s.colaborador||s.usuario||""}</span>
          </div>
        </td>
        <td><strong>${F(s.fechaIngreso)}</strong></td>
        <td><strong>${F(s.fechaSalida)}</strong></td>
        <td>${s.nombreCliente}</td>
        <td><span class="badge">${s.tipoDocumento}</span><br>${s.numDocumento}</td>
        <td><strong>${s.numHabitacion||"-"} - ${s.tipoHabitacion}</strong></td>
        <td><strong>${A} ${(s.precio||0).toFixed(2)}</strong></td>
        <td>${G}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-view" data-ver="${s.id}" title="Ver"><i class="fa-solid fa-eye"></i></button>
            ${_?`<button class="btn-edit" data-edi="${s.id}" title="Editar"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-delete" data-del="${s.id}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>`:""}
          </div>
        </td>
      </tr>`}).join("");a("#tabBody").html(d),a("#tabBody .btn-view").off("click").on("click",function(){na(a(this).data("ver"))}),a("#tabBody .btn-edit").off("click").on("click",function(){ra(a(this).data("edi"))}),a("#tabBody .btn-delete").off("click").on("click",function(){la(a(this).data("del"))})}ca(i)},ca=o=>{if(o<=1)return a("#pagBox").html("");let e="";p>1&&(e+=`<button class="page-btn" data-page="${p-1}"><i class="fa-solid fa-chevron-left"></i></button>`);for(let t=1;t<=o;t++)e+=`<button class="page-btn ${t===p?"active":""}" data-page="${t}">${t}</button>`;p<o&&(e+=`<button class="page-btn" data-page="${p+1}"><i class="fa-solid fa-chevron-right"></i></button>`),a("#pagBox").html(e)},$=()=>{const o=n.filter(i=>(i.fechaIngreso||"").startsWith(y));a("#totReg").text(o.length),a("#numHab").text(new Set(o.map(i=>i.numHabitacion).filter(Boolean)).size);let e=0,t=0;o.forEach(i=>{let l=i.precio||0;i.moneda==="Dolares"?l*=3.75:i.moneda==="Euros"&&(l*=4.1),e+=l*(parseInt(i.diasReservados)||1),t+=parseInt(i.diasReservados)||1}),a("#ingTot").text(`S/ ${e.toFixed(2)}`),a("#proNoc").text(`S/ ${t?(e/t).toFixed(2):"0.00"}`)},da=function(){const o=a("#tipoDocumento").val();let e=a(this).val();o==="DNI"?e=e.replace(/\D/g,"").slice(0,8):o==="RUC"?e=e.replace(/\D/g,"").slice(0,11):e=e.toUpperCase().slice(0,12),a(this).val(e)},ua=function(){let o=a(this).val().replace(/[^\d.]/g,"");const e=o.split(".");e.length>2&&(o=e[0]+"."+e.slice(1).join("")),e[1]?.length>2&&(o=e[0]+"."+e[1].slice(0,2)),a(this).val(o)},pa=()=>{const o=a("#tipoDocumento").val(),e=a("#numDocumento").val(),t=a("#celular").val();if(o==="DNI"&&e.length!==8||o==="RUC"&&e.length!==11)return m("Documento invalido","error"),!1;if(t&&t.length!==9)return m("Celular invalido","error"),!1;const i=new Date(a("#fechaIngreso").val());return new Date(a("#fechaSalida").val())<=i?(m("Check-out debe ser posterior","error"),!1):!0},va=()=>{["wiSmile","empleadosSmile","hc_regh"].forEach(o=>V(o)),D("Actualizado"),setTimeout(()=>location.reload(),400)};
