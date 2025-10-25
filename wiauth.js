import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth, db } from './firebase/init.js';

// Auth imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

// Firestore imports
import { getFirestore, setDoc, getDoc, deleteDoc, onSnapshot, 
  collection, doc, updateDoc, query, where, getDocs, serverTimestamp} from "firebase/firestore";

// widev imports
import { witip, Mensaje, Notificacion, fechaLocal, savels, getls, removels, accederRol, calcularEdad } from './widev.js';

export function wiAuth(){

const showLogin = `
<div id="loginModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Wii Login</h2>
      
      <form id="loginForm" class="dfd">
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" id="rememberMe">
          <label for="rememberMe">Recordar mis datos</label>
        </div>
        <button type="button" id="Login" class="inactivo btn-auth">Iniciar Sesión</button>
      </form>
      
      <div class="auth-links">
        <span class="olvidastePass">¿Olvidaste tu contraseña?</span>
        <!-- <span class="crearCuenta">Crear cuenta</span> -->
      </div>
    </div>
  </div>
</div>`;

const showRegistro = `
<div id="registroModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Crear Cuenta</h2>
      
      <form id="registroForm" class="dfd">
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-envelope"></i>
            <input type="email" id="regEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user"></i>
            <input type="text" id="regUsuario" placeholder="Crear usuario" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regNombre" placeholder="Nombre" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-user-tie"></i>
            <input type="text" id="regApellidos" placeholder="Apellidos" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-phone"></i>
            <input type="text" id="regCelular" placeholder="Celular" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-cake-candles"></i>
            <input type="date" id="regFechaNacimiento" placeholder="Fecha de nacimiento" class="datepicker" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword" placeholder="Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="input-icon"> <i class="fas fa-lock"></i>
            <input type="password" id="regPassword1" placeholder="Confirmar Contraseña" required>
            <i class="fas fa-eye togglePass"></i>
          </div>
        </div>
        <button type="button" id="Registrar" class="inactivo btn-auth">Registrarme</button>
      </form>
      
      <div class="auth-links">
        <span class="conCuenta">Ya tengo cuenta</span>
      </div>
    </div>
  </div>
</div>`;

const showRestablecer = `
<div id="recuperarModal" class="modal authModals">
  <div class="modal-content">
    <div class="modal-header">
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body auth-form">
      <div class="auth-logo">
        <img src="./smile.png" alt="Smile Beneficios">
      </div>
      <h2 class="auth-title">Restablecer Contraseña</h2>
      <form id="recuperarForm" class="dfd">
        <p class="auth-text">Ingresa tu Correo o usuario:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-envelope"></i>
            <input type="email" id="recEmail" placeholder="Correo electrónico" required>
          </div>
        </div>
        <p class="auth-text">Valida tu fecha de nacimiento:</p>
        <div class="form-group">
          <div class="input-icon">
            <i class="fas fa-cake-candles"></i>
            <input type="date" id="recFechaNacimiento" placeholder="Fecha Nacimiento" class="datepicker" required>
          </div>
        </div>
        <button type="button" id="Recuperar" class="inactivo btn-auth">Restablecer Contraseña</button>
      </form>
      <div class="auth-links">
        <span class="volverLogin"><i class="fas fa-arrow-left"></i> Volver a Inicio</span>
      </div>
    </div>
  </div>
</div>`;


// PARA LOS EVENTOS 
$(function(){
  let midb = 'smiles';  //Para base de datos 
  let wiAuthTm = 3000;  //Tiempo para guardar en firestore
  let wiAuthIn = 'wiAuthIn';  //Para guardar auth en localstorage
  let wiAuthRol = 'wiAuthRol';  //Para guardar auth en localstorage
  let rol = 'smile' //Rol default


  // Navegación entre modales
  $('.login').click(() => OpenAuthM('loginModal'));
  $('.registrar').click(() => OpenAuthM('registroModal'));
  $('.crearCuenta').click(()=> {OpenAuthM('registroModal');CloseAuthM('loginModal')});
  $('.conCuenta').click(()=> {OpenAuthM('loginModal');CloseAuthM('registroModal')});
  $('.olvidastePass').click(()=> {OpenAuthM('recuperarModal');CloseAuthM('loginModal')});
  $('.volverLogin').click(()=> {OpenAuthM('loginModal');CloseAuthM('recuperarModal')});

  $('.togglePass').click(function() {
    const input = $(this).siblings('input');
    const isPassword = input.attr('type') === 'password';
    input.attr('type', isPassword ? 'text' : 'password');
    $(this).toggleClass('fa-eye fa-eye-slash');
  }); // Toggle password visibilidad

  $('.miauth input:not([type="checkbox"])').on('click', function() {
    witip(this, $(this).attr('placeholder'));
  }); //Tooltips validaciones 

  $('#regUsuario, #regEmail, #email, #recEmail').on('input', function() {
    $(this).val($(this).val().toLowerCase().trim());
  }); // Conversión a minúsculas

  [['#password','#Login'], ['#regPassword1','#Registrar'], ['#recFechaNacimiento','#Recuperar'], ['#recEmail','#Recuperar']].forEach(([input, btn]) => {
    $(input).on('input keyup', e => {
      $(btn).removeClass('inactivo'); // 🌟 BRILLAR COMO EL SOL
      e.key === 'Enter' && ($(btn).click(), $(btn).addClass('inactivo')); // Click + Procesando
    });
  }); // Tecla Enter para login y registro

  const validacionesRegistro = {
      regEmail: [v => v.toLowerCase(), v => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v) || 'Correo inválido'],
      regUsuario: [v => v.toLowerCase().replace(/[^a-z0-9_]/g, ''), v => v.length >= 4 || 'Usuario 4-20 caracteres'],
      regNombre: [v => v.trim(), v => v.length > 0 || 'Ingrese nombre'],
      regApellidos: [v => v.trim(), v => v.length > 0 || 'Ingrese apellidos'],
      regCelular: [v => v.replace(/\D/g, ''), v => v.length >= 8 || 'Mínimo 8 dígitos'],
      regFechaNacimiento: [v => v, v => calcularEdad(v) >= 13 || 'Tienes que ser mayor de 13 años'],
      regPassword: [v => v, v => v.length >= 6 || 'Mínimo 6 caracteres'],
      regPassword1: [v => v, v => v === $('#regPassword').val() || 'Contraseñas no coinciden']
  };
  $.each(validacionesRegistro, function(id, [tis, validado]) {
    $(`#${id}`).on('blur', function() {
      const vl = tis($(this).val());  $(this).val(vl);
      const result = validado(vl);
      if (result !== true) witip(this, result, 'error');
    });
  }); // Validaciones en tiempo real

  let usuarioListo = false;
  $('#regUsuario').on('blur focus', async function(){
    const usuarioVL = $(this).val();
    if(usuarioVL.length >= 3){
      try{
        const busq = await getDoc(doc(db, midb, usuarioVL));
      const existe = busq.exists();  usuarioListo = !existe; //Para validar
      const mensaje = `Usuario ${existe ? 'no disponible' : 'disponible ✅'}`;
      witip(this, mensaje, existe ? 'error' : 'success','top',7000);
      }catch(e){console.error(e)}
    }
  }); // Validaciones para el usuario disponible con firestore

  let emailListo = false;
  $('#regEmail').on('blur focus', async function(){
    const emailVL = $(this).val();
    if(emailVL.length >= 3){
      try{
        const busq = await getDocs(query(collection(db, midb), where('email', '==', emailVL)));
        const existe = !busq.empty; emailListo = !existe; //Para validar
        const mensaje = `Email ${existe ? 'no disponible' : 'disponible ✅'}`;
        witip(this, mensaje, existe ? 'error' : 'success','top',7000);
      }catch(e){console.error(e)}
    }
  }); // Validación para email disponible con firestore

$('#Registrar').click(async function(){
  const todasValidaciones = [[usuarioListo, $('#regUsuario')[0], 'Usuario no disponible'], [emailListo, $('#regEmail')[0], 'Email no disponible'],
    ...Object.entries(validacionesRegistro).map(([id, [tis, validado]]) => {
      const campo = $(`#${id}`), vl = tis(campo.val()), result = validado(vl);
      return [result === true, campo[0], result !== true ? result : ''];
  })]; // Validando las entradas
  for (const [listo, campo, mensaje] of todasValidaciones) {
    if (!listo && mensaje && (witip(campo, mensaje, 'error'), campo.focus(), true)) return;
  } // Validando las entradas con mensaje para registrar

  try {
    //Trayendo valores listos y verificados
    const campos = ['regEmail', 'regUsuario', 'regNombre', 'regApellidos', 'regCelular', 'regPassword'];
    const [email, usuario, nombre, apellidos, celular, password] = campos.map(id=> $('#' + id).val().trim());
    
    // REGISTRANDO EN AUTH 
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    await Promise.all([updateProfile(user, { displayName: usuario}), sendEmailVerification(user)]); 
    console.log('Registro completo en Auth ✅' + Date());
    
    // REGISTRANDO EN FIRESTORE 
    const wisave = doc(db, midb, usuario);
    await setDoc(wisave,{
      usuario,     
      email,         
      nombre,     
      apellidos,  
      celular,
      rol,    
      fechaNacimiento: fechaLocal($('#regFechaNacimiento').val()),
      creacion: serverTimestamp(),
      uid: user.uid
    });
    console.log('Registro completo en Firestore ✅' + Date());
    Mensaje('Registro completado! ✅');

  }catch(e){Mensaje({'auth/email-already-in-use': 'Email ya registrado', 'auth/weak-password': 'Contraseña muy débil'}[e.code] || e.message) || console.error(e);}
  finally{savels(wiAuthIn,'wIn',24); savels(wiAuthRol,rol,24); setTimeout(()=> (accederRol(rol)), wiAuthTm);}
});

// LOGIN CENTER APP 
$('#Login').click(async function() {
  try {
    const [usuario, password] = ['#email', '#password'].map(id => $(id).val());
    
    let busq = null;
    let email = usuario; //Para ingresar con usuario, actualizando a email 
    if (!usuario.includes('@')){
      try{
        busq = await getDoc(doc(db, midb, usuario));
        email = busq.exists() ? busq.data().email : null;
      }catch(e){console.error('ebdUsuario', e); email = null;}
    } // Convertir usuario a email si es necesario

    await signInWithEmailAndPassword(auth, email, password); // Iniciando
    savels(wiAuthIn,'wIn',24); savels(wiAuthRol, busq.data().rol, 24); accederRol(busq.data().rol);  //Actualizando seguridad
  }catch(e){
    const errores = {
      'auth/invalid-credential': 'Contraseña incorrecta',
      'auth/invalid-email': 'Falta registrar Email',
      'auth/missing-email': 'Email o usuario no registrado'
    }; Mensaje(errores[e.code] || e.message, 'error'); console.error(e);   
  }
});

// RECUPERAR CENTER APP 
$('#Recuperar').click(async function() {
  try {
    const [campo, fecha] = ['#recEmail', '#recFechaNacimiento'].map(id => $(id).val());
    
    // Convertir + validar usuario
    const email = campo.includes('@') ? campo : await (async () => {
      const b = await getDoc(doc(db, midb, campo));
      return b.exists() ? b.data().email : null;
    })();
    if (!email) return Mensaje('Usuario no registrado', 'error');
    
    // Buscar + validar email
    const busq = await getDocs(query(collection(db, midb), where('email', '==', email)));
    if (busq.empty) return Mensaje('Email incorrecto o no existe', 'error');
    
    // Validar fecha
    const fechabd = busq.docs[0].data().fechaNacimiento.toDate().toISOString().split('T')[0];
    if (fechabd !== fecha) return Mensaje('Fecha de nacimiento incorrecta', 'error');
    
    // Enviar
    await sendPasswordResetEmail(auth, email);
    Mensaje('Se envió correo para restablecer su contraseña, revisa en principal o spam ✅', 'success');
    
  }catch(e){console.error(e);}
});

}); // FUNCTIONS LISTO $(FUNCTION(){}) [END]
$('body').append(showLogin + showRegistro + showRestablecer); //Actualizando en body 

// MODALES Y ESTILOS PARA CSS 
function wiAuthCSS(){
  const css=".modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.modal.active{display:flex}@keyframes mfade{from{opacity:0}to{opacity:1}}.modal{animation:mfade .25s ease}body.modal-open{overflow:hidden}.modal-content{background:var(--F);border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mpop .22s ease}@keyframes mpop{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.authModals .modal-content{max-width:430px;padding:0;border:0;position:relative}.authModals .modal-header{border:0;padding:12px;position:absolute;right:0;z-index:10}.authModals .close-modal{background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15)}.authModals .close-modal:hover{transform:scale(1.08);opacity:.95}.auth-form{padding:0 36px 32px;display:flex;flex-direction:column;align-items:center}.auth-logo{width:76px;height:76px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:34px 0 8px;box-shadow:0 6px 18px var(--bxs)}.auth-logo img{width:100%;height:auto}.auth-title{font:700 1.6rem var(--ff_P);color:var(--mco);margin:4px 0 18px;text-align:center}.auth-title span{color:#ffe800}.auth-text{color:var(--tx);font-size:.92rem;margin:12px 0 4px;align-self:flex-start}#loginForm,#registroForm,#recuperarForm{width:100%;display:flex;flex-direction:column;gap:12px}.form-group{width:100%;position:relative}.input-icon{position:relative;display:flex;align-items:center}.input-icon i{position:absolute;left:14px;color:var(--mco);opacity:.75;transition:.25s}.input-icon .togglePass{left:auto;right:12px;cursor:pointer;color:#a8a8a8}.input-icon input{width:100%;padding:13px 38px 13px 42px;border-radius:10px;border:1px solid var(--bdr);background:var(--wb);color:var(--tx);transition:border-color .2s,box-shadow .2s}.input-icon input:focus{border-color:var(--mco);box-shadow:0 0 0 3px var(--bxs);outline:0}.input-icon input::placeholder{color:var(--txe);opacity:.7}.form-check{display:flex;align-items:center;gap:8px;margin:6px 0}.form-check input[type=checkbox]{width:16px;height:16px;accent-color:var(--mco)}.btn-auth{width:100%;padding:13px 14px;background:var(--mco);color:var(--txa);border:0;border-radius:10px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px var(--bxs);transition:transform .15s,box-shadow .15s,background .15s}.btn-auth:hover{background:var(--hva);transform:translateY(-1px)}.inactivo{opacity:.75}.auth-links{width:100%;display:flex;justify-content:space-between;margin-top:12px;flex-wrap:wrap}.auth-links span{color:var(--mco);cursor:pointer;padding:6px 0;font-size:.95rem}.auth-links span:hover{color:var(--hv);text-decoration:underline}#registroModal #registroForm{display:grid;grid-template-columns:1fr 1fr;gap:12px}#registroModal .modal-content{max-width:568px}@media (max-width:576px){.auth-form{padding:0 20px 24px}.auth-title{font-size:1.4rem}.auth-logo{width:70px;height:70px;margin-top:26px}#registroModal #registroForm{display:flex;flex-direction:column}}";
  const $tag=$('.wiAuthCss'); $tag.length?$tag.text(css):$('head').append(`<style class="wiAuthCss">${css}</style>`);
}

const OpenAuthM=id=>{const $m=$(`#${id}`).addClass('active');$('body').addClass('modal-open');setTimeout(()=>{$m.find('input,select,textarea,button').filter(':visible:first').trigger('focus');},20);}
const CloseAuthM=id=>{$(`#${id}`).removeClass('active');if(!$('.modal.active').length)$('body').removeClass('modal-open');}
const GoAuthM=()=>{const AllClose=()=>{$('.modal').removeClass('active');$('body').removeClass('modal-open');};$(document).off('.authModals').on('click.authModals','.close-modal',AllClose).on('click.authModals','.modal',e=>{$(e.target).is('.modal')&&AllClose();}).on('keydown.authModals',e=>{e.key==='Escape'&&AllClose();});}

wiAuthCSS(); GoAuthM(); //Actualizado automáticamente

} wiAuth();
 