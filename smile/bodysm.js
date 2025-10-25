import $ from 'jquery';

const htmSm = () => `
<header class="top-header">
  <div class="header-container">
    <div class="header-left">
      <h1><i class="fa-solid fa-hotel"></i> Hospedaje HClaudia</h1>
      <select id="mesFiltro" class="mes-selector">
        ${genMeses()}
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
                <option value="HClaudia" selected>HClaudia</option>
                <option value="Hawka">Hawka</option>
              </select>
            </div>
            <div class="form-group span-2">
              <label><i class="fa-solid fa-user"></i> Cliente</label>
              <input type="text" id="nombreCliente" placeholder="Nombre completo" required>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-id-card"></i> Tipo Doc</label>
              <select id="tipoDocumento" required>
                <option value="DNI">DNI</option>
                <option value="Carnet Extranjeria">Carnet Extranjeria</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="RUC">RUC</option>
              </select>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-hashtag"></i> N° Doc</label>
              <input type="text" id="numDocumento" placeholder="Ingrese documento" required>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-phone"></i> Celular</label>
              <input type="tel" id="celular" placeholder="987654321" required>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-door-open"></i> Habitación</label>
              <input type="text" id="numHabitacion" placeholder="Ej: 101">
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
              <label><i class="fa-solid fa-dollar-sign"></i> Precio</label>
              <input type="number" id="precio" step="0.01" min="0" placeholder="150.00" required>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-coins"></i> Moneda</label>
              <select id="moneda" required>
                <option value="Soles">Soles (S/)</option>
                <option value="Dolares">Dólares (US$)</option>
                <option value="Euros">Euros (€)</option>
              </select>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-credit-card"></i> Pago</label>
              <select id="metodoPago" required>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
                <option value="Efectivo">Efectivo</option>
              </select>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-calendar-days"></i> Días</label>
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
              <label><i class="fa-solid fa-clipboard-list"></i> Fuente</label>
              <select id="tipoReserva" required>
                <option value="Directo">Directo</option>
                <option value="BOOKING">BOOKING</option>
                <option value="Airbnb">Airbnb</option>
                <option value="Agencia">Agencia</option>
              </select>
            </div>
            <div class="form-group">
              <label><i class="fa-solid fa-hashtag"></i> Booking ID</label>
              <input type="text" id="bookingId" placeholder="Opcional">
            </div>
            <div class="form-group span-2">
              <label><i class="fa-solid fa-pen"></i> Observaciones</label>
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
`;

const genMeses = () => {
  const hoy = new Date();
  const opt = [];
  for (let i = -2; i <= 3; i++) {
    const d = new Date(hoy.getFullYear(), hoy.getMonth() + i, 1);
    const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const sel = i === 0 ? 'selected' : '';
    const txt = d.toLocaleDateString('es-PE', { month: 'long', year: 'numeric' });
    opt.push(`<option value="${ym}" ${sel}>${txt.charAt(0).toUpperCase()+txt.slice(1)}</option>`);
  }
  return opt.join('');
};

const fmtFecj = f => !f ? '—' : f.split('-').reverse().join('/');
const calFecj = () => {
  const f = $('#fechaIngreso').val(), d = parseInt($('#diasReservados').val())||1;
  if (!f) return;
  const dt = new Date(`${f}T00:00:00`); dt.setDate(dt.getDate()+d);
  $('#fechaSalida').val(dt.toISOString().split('T')[0]);
};
const setFechas = () => {
  const h = new Date().toISOString().split('T')[0];
  $('#fechaIngreso').val(h); calFecj();
};

export { htmSm, fmtFecj, calFecj, setFechas };