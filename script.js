const loginForm = document.getElementById('loginForm');
const registroForm = document.getElementById('registroForm');

if (loginForm && registroForm) {
    const mostrarRegistro = document.getElementById('mostrarRegistro');
    const mostrarLogin = document.getElementById('mostrarLogin');

    mostrarRegistro.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('oculto');
        registroForm.classList.remove('oculto');
    });

    mostrarLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registroForm.classList.add('oculto');
        loginForm.classList.remove('oculto');
    });

    document.getElementById('formLogin').addEventListener('submit', (e) => {
        e.preventDefault();
        const usuario = document.getElementById('loginUsuario').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (usuario === '' || password === '') {
            alert('⚠️ Por favor, completa todos los campos.');
            return;
        }
        alert(`¡Bienvenido, ${usuario}!`);
        window.location.href = 'casco.html';
    });

    document.getElementById('formRegistro').addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('regNombre').value.trim();
        const usuario = document.getElementById('regUsuario').value.trim();
        const password = document.getElementById('regPassword').value.trim();

        if (nombre === '' || usuario === '' || password === '') {
            alert('⚠️ Todos los campos son obligatorios.');
            return;
        }
        if (password.length < 6) {
            alert('🔒 La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        alert(`✅ ¡Registro exitoso, ${nombre}! Ahora puedes iniciar sesión.`);
        document.getElementById('formRegistro').reset();
        registroForm.classList.add('oculto');
        loginForm.classList.remove('oculto');
    });
}

const btnTexto = document.getElementById('btnTexto');

if (btnTexto) {
    const textoDinamico = document.getElementById('textoDinamico');
    const textoOriginal = textoDinamico.textContent;
    let mostrandoEstado = false;

    btnTexto.addEventListener('click', () => {
        if (!mostrandoEstado) {
            textoDinamico.textContent = 'Casco activo. Ritmo cardíaco estable. Velocidad moderada.';
            btnTexto.textContent = 'Ocultar estado';
        } else {
            textoDinamico.textContent = textoOriginal;
            btnTexto.textContent = 'Mostrar estado';
        }
        mostrandoEstado = !mostrandoEstado;
    });
const imagen = document.getElementById('imagenIntercambio');
const btnImagen = document.getElementById('btnImagen');
const imagenes = [
    { src: 'img/casco1.jpg', alt: 'Casco abierto' },
    { src: 'img/casco2.jpg', alt: 'Casco cerrado' },
    { src: 'img/casco3.jpg', alt: 'estereeg' }
];
let imagenActual = 0;

function cambiarImagen() {
    imagenActual = (imagenActual + 1) % imagenes.length;
    imagen.src = imagenes[imagenActual].src;
    imagen.alt = imagenes[imagenActual].alt;
}
btnImagen.addEventListener('click', cambiarImagen);
imagen.addEventListener('click', cambiarImagen);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            document.body.classList.add('fondo-scroll');
        } else {
            document.body.classList.remove('fondo-scroll');
        }
    });

    const btnActualizar = document.getElementById('btnActualizar');
    const ritmoSpan = document.getElementById('ritmo');
    const velocidadSpan = document.getElementById('velocidad');

    btnActualizar.addEventListener('click', () => {
        const ritmo = Math.floor(Math.random() * 61) + 60;
        const velocidad = Math.floor(Math.random() * 121);
        ritmoSpan.textContent = ritmo;
        velocidadSpan.textContent = velocidad;
    });

    const btnIzquierda = document.getElementById('btnIzquierda');
    const btnDerecha = document.getElementById('btnDerecha');
    const direccion = document.getElementById('direccion');

    btnIzquierda.addEventListener('click', () => {
        direccion.textContent = '← Izquierda';
    });
    btnDerecha.addEventListener('click', () => {
        direccion.textContent = 'Derecha →';
    });
}