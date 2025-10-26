import './smile.css';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, serverTimestamp, query, where, orderBy } from 'firebase/firestore';
import { Mensaje, Notificacion, savels, getls, removels, showLoading } from '../widev.js';
import { htmSm, fmtFecj, calFecj, setFechas } from './mihtml.js';

// ESTADO (6-7 caracteres)
let usuauth = null;
let datuser = null;
let colabls = [];
let reghotl = [];
let mesactu = new Date().toISOString().slice(0,7);
let pagactv = 1;
let regxpag = 10;

// INIT
$(async () => {
  $('.app').html(htmSm());
  onAuthStateChanged(auth, async u => {
    if (!u) return location.href = '/';
    usuauth = u;
    await carUsua();
    await carCola();
    await carRegi();
    iniEves();
    actEsts();
  });
});

// EVENTOS
const iniEves = () => {
  setFechas();
  $('#diasReservados,#fechaIngreso').on('change', calFecj);
  $('#regForm').on('submit', guaRegi);
  $('#mesFiltro').on('change', function(){ mesactu = $(this).val(); pagactv = 1; renTabl(); actEsts(); });
  $('#filCola,#filCant').on('change', function(){ pagactv = 1; renTabl(); });
  $(document).on('click','.bt_cargar', refData);
  $(document).on('click','.bt_salir', async ()=>{ await signOut(auth); try{localStorage.clear();}catch{} location.href='/'});
  $('#numDocumento').on('input', valDocu);
  $('#celular').on('input', function(){ $(this).val($(this).val().replace(/\D/g,'').slice(0,9)); });
  $('#precio').on('input', valPrecio);
  $('#nombreCliente').on('input', function(){ $(this).val($(this).val().toUpperCase()); });
  $('#tipoDocumento').on('change', function(){
    const plc = {DNI:'12345678',RUC:'20123456789','Carnet Extranjeria':'001234567','Pasaporte':'ABC123456'};
    $('#numDocumento').val('').attr('placeholder', `Ej: ${plc[$(this).val()]}`);
  });
  $('#pagBox').on('click','.page-btn', function(){ pagactv = +$(this).data('page'); renTabl(); });
};

// USER
const carUsua = async () => {
  const ca = getls('wiSmile');
  if (ca) { datuser = ca; return actUsua(); }
  const q1 = await getDocs(query(collection(db,'smiles'), where('usuario','==', usuauth.displayName)));
  if (!q1.empty) {
    datuser = q1.docs[0].data();
    savels('wiSmile', datuser, 450);
  } else {
    const d2 = await getDoc(doc(db,'smiles', usuauth.displayName));
    if (d2.exists()) { datuser = d2.data(); savels('wiSmile', datuser, 450); }
    else { datuser = { usuario: usuauth.displayName, nombre: usuauth.displayName, imagen:'' }; }
  }
  actUsua();
};
const actUsua = () => {
  const nom = datuser?.nombre || datuser?.usuario || usuauth.displayName;
  $('#usrNom').text(nom);
  $('#usrImg').attr('src', (datuser?.imagen||'').trim() ? datuser.imagen : './smile.png');
  Mensaje(`Bienvenido ${nom}`);
};

// COLABORADORES
const carCola = async () => {
  const ca = getls('empleadosSmile');
  if (ca) { colabls = ca; renCola(); actFilt(); return; }
  const q = await getDocs(query(collection(db,'smiles'), where('participa','==','si')));
  colabls = q.docs.map(d=>({ id:d.id, ...d.data() }));
  savels('empleadosSmile', colabls, 300);
  renCola(); actFilt();
};
const renCola = () => {
  if (!colabls.length) return $('#colGrid').html('<div class="no-colabs">Sin colaboradores</div>');
  const tot = reghotl.length || 1;
  const html = colabls.map((c,i)=>{
    const regc = reghotl.filter(r=> r.colaborador===c.nombre || r.colaborador===c.usuario).length;
    const por = Math.round((regc/tot)*100);
    return `
    <div class="colab-card ${i===0?'champion':''}">
      <div class="colab-header">
        <img src="${(c.imagen||'').trim()?c.imagen:'./smile.png'}" alt="${c.nombre||c.usuario}" class="colab-avatar">
        <div class="colab-info"><h3>${c.nombre||c.usuario}</h3><p>${c.descripcion||'Colaborador'}</p></div>
      </div>
      <div class="colab-stats">
        <div class="stat-item"><span class="stat-value">${regc}</span><span class="stat-label">Registros</span></div>
        <div class="stat-item"><span class="stat-value">${por}%</span><span class="stat-label">Participacion</span></div>
      </div>
    </div>`;
  }).join('');
  $('#colGrid').html(html);
};
const actFilt = () => {
  const ops = colabls.map(c=> `<option value="${c.nombre||c.usuario}">${c.nombre||c.usuario}</option>`).join('');
  $('#filCola').html(`<option value="">Todos</option>${ops}`);
};

// REGISTROS
const carRegi = async () => {
  const ca = getls('sm_regh');
  if (ca) { reghotl = ca; renTabl(); return; }
  try{
    const q = await getDocs(collection(db,'registrosHotel'));
    reghotl = q.docs.map(d=>({ id:d.id, ...d.data() }));
    reghotl.sort((a,b)=> new Date(b.fechaIngreso||'1970-01-01') - new Date(a.fechaIngreso||'1970-01-01'));
    savels('sm_regh', reghotl, 300);
  }catch(e){ console.error(e); }
  renTabl();
};

const guaRegi = async e => {
  e.preventDefault();
  if (!valForm()) return false;
  try{
    showLoading(true);
    const rid = Date.now().toString();
    const reg = {
      id: rid,
      registroEn: $('#registroEn').val(),
      nombreCliente: $('#nombreCliente').val(),
      tipoDocumento: $('#tipoDocumento').val(),
      numDocumento: $('#numDocumento').val(),
      celular: $('#celular').val(),
      numHabitacion: $('#numHabitacion').val(),
      tipoHabitacion: $('#tipoHabitacion').val(),
      precio: parseFloat($('#precio').val())||0,
      moneda: $('#moneda').val(),
      metodoPago: $('#metodoPago').val(),
      diasReservados: parseInt($('#diasReservados').val())||1,
      fechaIngreso: $('#fechaIngreso').val(),
      fechaSalida: $('#fechaSalida').val(),
      tipoReserva: $('#tipoReserva').val(),
      reservaId: $('#reservaId').val()||'',
      observaciones: $('#observaciones').val()||'',
      colaborador: (datuser?.nombre || datuser?.usuario || usuauth.displayName),
      fechaRegistro: serverTimestamp()
    };
    await setDoc(doc(db,'registrosHotel', rid), reg);
    reghotl.unshift(reg);
    savels('sm_regh', reghotl, 300);
    Mensaje('Registro guardado');
    $('#regForm')[0].reset(); setFechas();
    renTabl(); actEsts();
  }catch(e){ console.error(e); Notificacion('Error al guardar','error'); }
  finally{ showLoading(false); }
  return false;
};

const eliRegi = async id => {
  if (!confirm('Eliminar registro?')) return;
  try{
    await deleteDoc(doc(db,'registrosHotel', id.toString()));
    reghotl = reghotl.filter(r=> r.id!=id);
    savels('sm_regh', reghotl, 300);
    renTabl(); actEsts(); Mensaje('Registro eliminado');
  }catch(e){ console.error(e); Notificacion('Error al eliminar','error'); }
};

// TABLA + PAGINACION + ESTADISTICAS
const renTabl = () => {
  const fcol = $('#filCola').val();
  const fcant = $('#filCant').val();
  const data = reghotl.filter(r=>{
    const m = (r.fechaIngreso||'').slice(0,7);
    return (!mesactu || m===mesactu) && (!fcol || r.colaborador===fcol);
  });
  regxpag = fcant==='all' ? data.length : parseInt(fcant||'10');
  const tot = Math.max(1, Math.ceil((data.length||0)/(regxpag||1)));
  if (pagactv>tot) pagactv=1;
  const ini = (pagactv-1)*regxpag, pag = data.slice(ini, ini+regxpag);

  if (!pag.length) {
    $('#tabBody').html(`<tr><td colspan="11" style="text-align:center;color:var(--bg2);padding:2vh">Sin datos</td></tr>`);
  } else {
    const rows = pag.map(r=>{
      const sim = r.moneda==='Soles'?'S/':(r.moneda==='Dolares'?'US$':'€');
      return `
      <tr>
        <td><strong>${fmtFecj(r.fechaIngreso)}</strong></td>
        <td><strong>${fmtFecj(r.fechaSalida)}</strong></td>
        <td>${r.nombreCliente}</td>
        <td><span class="badge">${r.tipoDocumento}</span><br>${r.numDocumento}</td>
        <td><strong>${r.numHabitacion||'-'}</strong></td>
        <td><span class="badge">${r.tipoHabitacion}</span></td>
        <td><strong>${sim} ${(r.precio||0).toFixed(2)}</strong></td>
        <td><span class="badge">${r.metodoPago}</span></td>
        <td><span class="badge">${r.tipoReserva}</span></td>
        <td>${r.colaborador}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-delete" data-del="${r.id}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>`;
    }).join('');
    $('#tabBody').html(rows);
    // eliminar
    $('#tabBody .btn-delete').off('click').on('click', function(){ eliRegi($(this).data('del')); });
  }
  renPagi(tot);
};

const renPagi = tot => {
  if (tot<=1) return $('#pagBox').html('');
  let html = '';
  if (pagactv>1) html += `<button class="page-btn" data-page="${pagactv-1}"><i class="fa-solid fa-chevron-left"></i></button>`;
  for (let i=1;i<=tot;i++){
    html += `<button class="page-btn ${i===pagactv?'active':''}" data-page="${i}">${i}</button>`;
  }
  if (pagactv<tot) html += `<button class="page-btn" data-page="${pagactv+1}"><i class="fa-solid fa-chevron-right"></i></button>`;
  $('#pagBox').html(html);
};

const actEsts = () => {
  const dm = reghotl.filter(r=> (r.fechaIngreso||'').startsWith(mesactu));
  $('#totReg').text(dm.length);
  $('#numHab').text(new Set(dm.map(r=>r.numHabitacion).filter(Boolean)).size);
  let ing = 0, noc = 0;
  dm.forEach(r=>{
    let p = r.precio||0;
    if (r.moneda==='Dolares') p*=3.75; else if (r.moneda==='Euros') p*=4.10;
    ing += p*(parseInt(r.diasReservados)||1);
    noc += parseInt(r.diasReservados)||1;
  });
  $('#ingTot').text(`S/ ${ing.toFixed(2)}`);
  $('#proNoc').text(`S/ ${noc? (ing/noc).toFixed(2) : '0.00'}`);
};

// VALIDACIONES
const valDocu = function(){
  const t = $('#tipoDocumento').val();
  let v = $(this).val();
  if (t==='DNI') v = v.replace(/\D/g,'').slice(0,8);
  else if (t==='RUC') v = v.replace(/\D/g,'').slice(0,11);
  else v = v.toUpperCase().slice(0,12);
  $(this).val(v);
};
const valPrecio = function(){
  let v = $(this).val().replace(/[^\d.]/g,''); const p=v.split('.');
  if (p.length>2) v = p[0]+'.'+p.slice(1).join('');
  if (p[1]?.length>2) v = p[0]+'.'+p[1].slice(0,2);
  $(this).val(v);
};
const valForm = () => {
  const td=$('#tipoDocumento').val(), nd=$('#numDocumento').val(), ce=$('#celular').val();
  if ((td==='DNI' && nd.length!==8) || (td==='RUC' && nd.length!==11) || ce.length!==9) {
    Notificacion('Verifique documento/celular','error'); return false;
  }
  const fi=new Date($('#fechaIngreso').val()), fs=new Date($('#fechaSalida').val());
  if (fs<=fi) { Notificacion('Check-out debe ser posterior','error'); return false; }
  return true;
};

// REFRESH CACHE
const refData = () => {
  ['wiSmile','empleadosSmile','sm_regh'].forEach(k => removels(k));
  Mensaje('Actualizado'); setTimeout(()=>location.reload(), 500);
};