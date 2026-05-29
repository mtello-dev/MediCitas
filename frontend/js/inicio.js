const API = 'http://localhost:3000/api';

const token = sessionStorage.getItem('token');
const nombre = sessionStorage.getItem('nombre');

if (!token) {
    window.location.href = 'login.html';
}

document.getElementById('nombreUsuario').textContent = nombre || '';

function cargarInicio() {

    fetch(`${API}/inicio`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {

        if (res.status === 401) {
            sessionStorage.clear();
            window.location.href = 'login.html';
            return;
        }

        return res.json();

    })
    .then(data => {

        if (!data) return;

        document.getElementById('spinner').classList.add('d-none');
        document.getElementById('contenido').classList.remove('d-none');

        document.getElementById('tituloBienvenida').textContent =
            `Bienvenido, ${nombre}`;

        document.getElementById('fechaHora').textContent =
            new Date(data.fecha).toLocaleDateString('es-MX');

        const contenedor = document.getElementById('tarjetasModulos');

        contenedor.innerHTML = '';

        data.módulos.forEach(modulo => {

            contenedor.innerHTML += `
                <div class="col-md-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">${modulo}</h5>
                            <a href="${modulo}.html" class="btn btn-primary btn-sm">
                                Ir al módulo
                            </a>
                        </div>
                    </div>
                </div>
            `;

        });

        Object.keys(data.resumen).forEach(key => {

            contenedor.innerHTML += `
                <div class="col-md-4">
                    <div class="card border-primary shadow-sm h-100">
                        <div class="card-body text-center">
                            <h1 class="text-primary">${data.resumen[key]}</h1>
                            <p class="text-muted">${key.replace(/_/g, ' ')}</p>
                        </div>
                    </div>
                </div>
            `;

        });

    })
    .catch(() => {
        document.getElementById('spinner').classList.add('d-none');
        mostrarAlerta('Error al cargar datos del servidor', 'danger');
    });

}

function cerrarSesion() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function mostrarAlerta(mensaje, tipo) {
    document.getElementById('alerta').innerHTML = `
        <div class="alert alert-${tipo}">
            ${mensaje}
        </div>
    `;
}

cargarInicio();