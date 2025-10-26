import './smile.css';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from '../firebase/init.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, doc, getDocs, getDoc, setDoc, deleteDoc, serverTimestamp, query, where } from 'firebase/firestore';
import { Mensaje, Notificacion, savels, getls, removels, showLoading } from '../widev.js';
import { htmSm, fmtFecj, fmtFts, calFecj, setFechas } from './mihtml.js';

// ESTADO (3+ caracteres)
let usuauth = null;
let datuser = null;
let colabls = [];
let reghotl = [];
let mesactu = new Date().toISOString().slice(0,7);
let pagactv = 1;
let regxpag = 10;
let editreg = null;
let viewmod = false;

// INIT
$(async () => {
  $('.app').html(htmSm());
  onAuthStateChanged(auth, async usr => {
    if (!usr) return location.href = '/';
    usuauth = usr;
    await carUsua();
    await carCola();
    await carRegi();
    mesactu = $('#mesFiltro').val() || mesactu;
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
  $(document).on('click','.bt_salir', async ()=>{ await signOut(auth); try{localStorage.clear();}catch{} location.href='/'; });
  $(document).on('click','.btn-cancel', canForm);
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
  const cac = getls('wiSmile');
  if (cac) { datuser = cac; return actUsua(); }
  const que = await getDocs(query(collection(db,'smiles'), where('usuario','==', usuauth.displayName)));
  if (!que.empty) { datuser = que.docs[0].data(); savels('wiSmile', datuser, 450); }
  else {
    const doc2 = await getDoc(doc(db,'smiles', usuauth.displayName));
    datuser = doc2.exists() ? doc2.data() : { usuario: usuauth.displayName, nombre: usuauth.displayName, imagen:'' };
    savels('wiSmile', datuser, 450);
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
  const cac = getls('empleadosSmile');
  if (cac) { colabls = cac; renCola(); actFilt(); return; }
  const que = await getDocs(query(collection(db,'smiles'), where('participa','==','si')));
  colabls = que.docs.map(doc=>({ id:doc.id, ...doc.data() }));
  savels('empleadosSmile', colabls, 300);
  renCola(); actFilt();
};
const renCola = () => {
  if (!colabls.length) return $('#colGrid').html('<div class="no-colabs">Sin colaboradores</div>');
  const tot = reghotl.length || 1;
  const htm = colabls.map((col,idx)=>{
    const regc = reghotl.filter(reg=> reg.colaborador===col.nombre || reg.colaborador===col.usuario).length;
    const por = Math.round((regc/tot)*100);
    return `
    <div class="colab-card ${idx===0?'champion':''}">
      <div class="colab-header">
        <img src="${(col.imagen||'').trim()?col.imagen:'./smile.png'}" alt="${col.nombre||col.usuario}" class="colab-avatar">
        <div class="colab-info"><h3>${col.nombre||col.usuario}</h3><p>${col.descripcion||'Colaborador'}</p></div>
      </div>
      <div class="colab-stats">
        <div class="stat-item"><span class="stat-value">${regc}</span><span class="stat-label">Registros</span></div>
        <div class="stat-item"><span class="stat-value">${por}%</span><span class="stat-label">Participacion</span></div>
      </div>
    </div>`;
  }).join('');
  $('#colGrid').html(htm);
};
const actFilt = () => {
  $('#filCola').html([
    '<option value="">Todos</option>',
    ...colabls.map(col=> `<option value="${col.nombre||col.usuario}">${col.nombre||col.usuario}</option>`)
  ].join(''));
};

// REGISTROS
const carRegi = async () => {
  const cac = getls('hc_regh');
  if (cac) { reghotl = cac; renTabl(); return; }
  try{
    const que = await getDocs(collection(db,'registrosHotel'));
    reghotl = que.docs.map(doc=>({ id:doc.id, ...doc.data() }));
    reghotl.sort((a,b)=> {
      const dtA = a.fechaCreacion?.toDate ? a.fechaCreacion.toDate() : new Date(a.fechaCreacion||a.fechaIngreso||'1970-01-01');
      const dtB = b.fechaCreacion?.toDate ? b.fechaCreacion.toDate() : new Date(b.fechaCreacion||b.fechaIngreso||'1970-01-01');
      return dtB - dtA;
    });
    savels('hc_regh', reghotl, 300);
  }catch(err){ console.error(err); }
  renTabl();
};

const bloBtn = (btn, txt='Guardando...') => {
  btn.data('old',btn.html()).prop('disabled',true).addClass('is-dis')
    .html(`<i class="fa-solid fa-spinner fa-spin"></i> ${txt}`);
};
const desBtn = (btn) => {
  btn.prop('disabled',false).removeClass('is-dis').html(btn.data('old')||'<i class="fa-solid fa-check-circle"></i> Guardar');
};

const guaRegi = async evt => {
  evt.preventDefault();
  if (viewmod) return canForm(); // Si está en vista, cancelar
  if (!valForm()) return false;
  const btn = $('.btn-save');
  try{
    showLoading(true); bloBtn(btn, editreg? 'Actualizando...' : 'Guardando...');
    const rid = editreg || Date.now().toString();
    const placa = ($('#carroPlaca').val()||'').trim();
    const reg = {
      id: rid,
      registroEn: ($('#registroEn').val()||'HClaudia'),
      reservaId: $('#reservaId').val()||'',
      estadoPago: $('#estadoPago').val()||'deuda',
      nombreCliente: $('#nombreCliente').val(),
      tipoDocumento: $('#tipoDocumento').val(),
      numDocumento: $('#numDocumento').val(),
      tipoHabitacion: $('#tipoHabitacion').val(),
      numHabitacion: $('#numHabitacion').val(),
      precio: parseFloat($('#precio').val())||0,
      moneda: $('#moneda').val(),
      metodoPago: $('#metodoPago').val(),
      desayuno: $('#desayuno').val()||'no',
      diasReservados: parseInt($('#diasReservados').val())||1,
      fechaIngreso: $('#fechaIngreso').val(),
      fechaSalida: $('#fechaSalida').val(),
      carroPlaca: placa,
      cochera: placa ? 'si' : 'no',
      comentario: $('#comentario').val()||'',
      celular: $('#celular').val()||'',
      colaborador: (datuser?.nombre || datuser?.usuario || usuauth.displayName),
      usuario: (usuauth.displayName || datuser?.usuario || ''),
      email: (usuauth.email || ''),
      uid: (usuauth.uid || ''),
      fechaCreacion: editreg ? undefined : serverTimestamp(),
      fechaActualizacion: serverTimestamp()
    };
    // limpiar undefined
    Object.keys(reg).forEach(key => reg[key]===undefined && delete reg[key]);

    await setDoc(doc(db,'registrosHotel', rid), reg, { merge:true });

    if (editreg){
      const idx = reghotl.findIndex(reg=> reg.id==rid);
      if (idx>-1) reghotl[idx] = { ...reghotl[idx], ...reg };
      Mensaje('Registro actualizado');
    } else {
      reghotl.unshift(reg);
      Mensaje('Registro guardado');
    }
    savels('hc_regh', reghotl, 300);
    resForm();
    renTabl(); actEsts();
  }catch(err){ console.error(err); Notificacion('Error al guardar','error'); }
  finally{ showLoading(false); desBtn(btn); }
  return false;
};

const eliRegi = async id => {
  const reg = reghotl.find(x=> x.id==id);
  if (reg && reg.uid && usuauth?.uid && reg.uid!==usuauth.uid) { 
    Notificacion('No autorizado','error'); return; 
  }
  
  // Primera confirmación
  if (!confirm('¿Estás seguro que deseas eliminar este registro?')) return;
  
  // Segunda confirmación como en retodelmes
  if (!confirm('Esta acción no se puede deshacer. ¿Confirmas la eliminación definitiva?')) return;
  
  try{
    await deleteDoc(doc(db,'registrosHotel', id.toString()));
    reghotl = reghotl.filter(reg=> reg.id!=id);
    savels('hc_regh', reghotl, 300);
    renTabl(); actEsts(); 
    Mensaje('Registro eliminado correctamente');
  }catch(err){ 
    console.error(err); 
    Notificacion('Error al eliminar','error'); 
  }
};

const verRegi = id => {
  const reg = reghotl.find(x=> x.id==id); 
  if (!reg) return;
  
  // Activar modo vista
  viewmod = true;
  editreg = null;
  
  // Llenar formulario
  $('#registroEn').val(reg.registroEn||'');
  $('#reservaId').val(reg.reservaId||'');
  $('#estadoPago').val(reg.estadoPago||'deuda');
  $('#nombreCliente').val(reg.nombreCliente||'');
  $('#tipoDocumento').val(reg.tipoDocumento||'');
  $('#numDocumento').val(reg.numDocumento||'');
  $('#tipoHabitacion').val(reg.tipoHabitacion||'');
  $('#numHabitacion').val(reg.numHabitacion||'');
  $('#precio').val(reg.precio||0);
  $('#moneda').val(reg.moneda||'');
  $('#metodoPago').val(reg.metodoPago||'');
  $('#desayuno').val(reg.desayuno||'no');
  $('#diasReservados').val(reg.diasReservados||1);
  $('#fechaIngreso').val(reg.fechaIngreso||'');
  $('#fechaSalida').val(reg.fechaSalida||'');
  $('#carroPlaca').val(reg.carroPlaca||'');
  $('#comentario').val(reg.comentario||'');
  $('#celular').val(reg.celular||'');
  
  // Deshabilitar todos los campos
  $('#regForm input, #regForm select, #regForm textarea').prop('disabled', true);
  
  // Cambiar botones
  $('.btn-save').hide();
  if (!$('.btn-cancel').length) {
    $('.btn-save').after('<button type="button" class="btn-cancel"><i class="fa-solid fa-times"></i> Cerrar</button>');
  }
  $('.btn-cancel').show();
  
  // Scroll al formulario
  $('html,body').animate({scrollTop:0}, 300);
};

const ediRegi = id => {
  const reg = reghotl.find(x=> x.id==id); 
  if (!reg) return;
  if (reg && reg.uid && usuauth?.uid && reg.uid!==usuauth.uid) { 
    Notificacion('No autorizado','error'); return; 
  }
  
  // Activar modo edición
  viewmod = false;
  editreg = reg.id;
  
  // Llenar formulario
  $('#registroEn').val(reg.registroEn||'');
  $('#reservaId').val(reg.reservaId||'');
  $('#estadoPago').val(reg.estadoPago||'deuda');
  $('#nombreCliente').val(reg.nombreCliente||'');
  $('#tipoDocumento').val(reg.tipoDocumento||'');
  $('#numDocumento').val(reg.numDocumento||'');
  $('#tipoHabitacion').val(reg.tipoHabitacion||'');
  $('#numHabitacion').val(reg.numHabitacion||'');
  $('#precio').val(reg.precio||0);
  $('#moneda').val(reg.moneda||'');
  $('#metodoPago').val(reg.metodoPago||'');
  $('#desayuno').val(reg.desayuno||'no');
  $('#diasReservados').val(reg.diasReservados||1);
  $('#fechaIngreso').val(reg.fechaIngreso||'');
  $('#fechaSalida').val(reg.fechaSalida||'');
  $('#carroPlaca').val(reg.carroPlaca||'');
  $('#comentario').val(reg.comentario||'');
  $('#celular').val(reg.celular||'');
  
  // Habilitar campos
  $('#regForm input, #regForm select, #regForm textarea').prop('disabled', false);
  
  // Cambiar botones
  $('.btn-save').html('<i class="fa-solid fa-floppy-disk"></i> Actualizar').show();
  if (!$('.btn-cancel').length) {
    $('.btn-save').after('<button type="button" class="btn-cancel"><i class="fa-solid fa-times"></i> Cancelar</button>');
  }
  $('.btn-cancel').show();
  
  // Scroll al formulario
  $('html,body').animate({scrollTop:0}, 300);
};

const canForm = () => {
  resForm();
};

const resForm = () => {
  $('#regForm')[0].reset(); 
  setFechas(); 
  editreg = null;
  viewmod = false;
  
  // Habilitar todos los campos
  $('#regForm input, #regForm select, #regForm textarea').prop('disabled', false);
  
  // Restaurar botones
  $('.btn-save').html('<i class="fa-solid fa-check-circle"></i> Guardar').show();
  $('.btn-cancel').hide();
};

// TABLA + PAGINACION + ESTADISTICAS
const renTabl = () => {
  const fcol = $('#filCola').val();
  const fcant = $('#filCant').val();
  const dat = reghotl.filter(reg=>{
    const mes = (reg.fechaIngreso||'').slice(0,7);
    return (!mesactu || mes===mesactu) && (!fcol || reg.colaborador===fcol);
  });
  regxpag = fcant==='all' ? dat.length : parseInt(fcant||'10');
  const tot = Math.max(1, Math.ceil((dat.length||0)/(regxpag||1)));
  if (pagactv>tot) pagactv=1;
  const ini = (pagactv-1)*regxpag, pag = dat.slice(ini, ini+regxpag);

  if (!pag.length) {
    $('#tabBody').html(`<tr><td colspan="10" style="text-align:center;color:var(--bg2);padding:2vh">Sin datos</td></tr>`);
  } else {
    const row = pag.map(reg=>{
      const sim = reg.moneda==='Soles'?'S/':(reg.moneda==='Dolares'?'US$':'€');
      const can = (reg.uid && usuauth?.uid) ? reg.uid===usuauth.uid : (reg.email && usuauth?.email ? reg.email===usuauth.email : true);
      const bdg = reg.estadoPago==='pagado' ? `<span class="badge ok">Pagado</span>` : `<span class="badge warn">Deuda</span>`;
      return `
      <tr>
        <td>${fmtFts(reg.fechaCreacion)}</td>
        <td>
          <div class="urow">
            <img class="colab-avatar" src="${(reg.usuarioImg||'').trim()?reg.usuarioImg:'./smile.png'}" alt="${reg.usuario||reg.colaborador||''}" style="width:28px;height:28px;border-radius:50%;object-fit:cover;margin-right:8px">
            <span>${reg.colaborador||reg.usuario||''}</span>
          </div>
        </td>
        <td><strong>${fmtFecj(reg.fechaIngreso)}</strong></td>
        <td><strong>${fmtFecj(reg.fechaSalida)}</strong></td>
        <td>${reg.nombreCliente}</td>
        <td><span class="badge">${reg.tipoDocumento}</span><br>${reg.numDocumento}</td>
        <td><strong>${reg.numHabitacion||'-'} - ${reg.tipoHabitacion}</strong></td>
        <td><strong>${sim} ${(reg.precio||0).toFixed(2)}</strong></td>
        <td>${bdg}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-view" data-ver="${reg.id}" title="Ver"><i class="fa-solid fa-eye"></i></button>
            ${can ? `<button class="btn-edit" data-edi="${reg.id}" title="Editar"><i class="fa-solid fa-pen"></i></button>
            <button class="btn-delete" data-del="${reg.id}" title="Eliminar"><i class="fa-solid fa-trash"></i></button>` : ''}
          </div>
        </td>
      </tr>`;
    }).join('');
    $('#tabBody').html(row);
    $('#tabBody .btn-view').off('click').on('click', function(){ verRegi($(this).data('ver')); });
    $('#tabBody .btn-edit').off('click').on('click', function(){ ediRegi($(this).data('edi')); });
    $('#tabBody .btn-delete').off('click').on('click', function(){ eliRegi($(this).data('del')); });
  }
  renPagi(tot);
};

const renPagi = tot => {
  if (tot<=1) return $('#pagBox').html('');
  let htm = '';
  if (pagactv>1) htm += `<button class="page-btn" data-page="${pagactv-1}"><i class="fa-solid fa-chevron-left"></i></button>`;
  for (let i=1;i<=tot;i++){ htm += `<button class="page-btn ${i===pagactv?'active':''}" data-page="${i}">${i}</button>`; }
  if (pagactv<tot) htm += `<button class="page-btn" data-page="${pagactv+1}"><i class="fa-solid fa-chevron-right"></i></button>`;
  $('#pagBox').html(htm);
};

const actEsts = () => {
  const dem = reghotl.filter(reg=> (reg.fechaIngreso||'').startsWith(mesactu));
  $('#totReg').text(dem.length);
  $('#numHab').text(new Set(dem.map(reg=>reg.numHabitacion).filter(Boolean)).size);
  let ing = 0, noc = 0;
  dem.forEach(reg=>{
    let pre = reg.precio||0;
    if (reg.moneda==='Dolares') pre*=3.75; 
    else if (reg.moneda==='Euros') pre*=4.10;
    ing += pre*(parseInt(reg.diasReservados)||1);
    noc += parseInt(reg.diasReservados)||1;
  });
  $('#ingTot').text(`S/ ${ing.toFixed(2)}`);
  $('#proNoc').text(`S/ ${noc? (ing/noc).toFixed(2) : '0.00'}`);
};

// VALIDACIONES
const valDocu = function(){
  const tip = $('#tipoDocumento').val();
  let val = $(this).val();
  if (tip==='DNI') val = val.replace(/\D/g,'').slice(0,8);
  else if (tip==='RUC') val = val.replace(/\D/g,'').slice(0,11);
  else val = val.toUpperCase().slice(0,12);
  $(this).val(val);
};
const valPrecio = function(){
  let val = $(this).val().replace(/[^\d.]/g,''); 
  const par = val.split('.');
  if (par.length>2) val = par[0]+'.'+par.slice(1).join('');
  if (par[1]?.length>2) val = par[0]+'.'+par[1].slice(0,2);
  $(this).val(val);
};
const valForm = () => {
  const tip=$('#tipoDocumento').val(), num=$('#numDocumento').val(), cel=$('#celular').val();
  if ((tip==='DNI' && num.length!==8) || (tip==='RUC' && num.length!==11)) { 
    Notificacion('Documento invalido','error'); return false; 
  }
  if (cel && cel.length!==9) { 
    Notificacion('Celular invalido','error'); return false; 
  }
  const fin=new Date($('#fechaIngreso').val()), fsa=new Date($('#fechaSalida').val());
  if (fsa<=fin) { 
    Notificacion('Check-out debe ser posterior','error'); return false; 
  }
  return true;
};

// REFRESH CACHE
const refData = () => {
  ['wiSmile','empleadosSmile','hc_regh'].forEach(key => removels(key));
  Mensaje('Actualizado'); 
  setTimeout(()=>location.reload(), 400);
};