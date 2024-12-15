document.addEventListener('DOMContentLoaded', () => {
    // Mostrar la sección "Sobre Mí" por defecto
    showSection('sobreMi');
});

function showSection(sectionId) {
    const sections = ['sobreMi', 'proyectos', 'contacto'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            if (id === sectionId) {
                section.style.display = 'block';
                section.classList.add('seccion-activa'); // Añadir animación
            } else {
                section.style.display = 'none';
                section.classList.remove('seccion-activa'); // Quitar animación
            }
        }
    });

    // Si seleccionas habilidades, ejecuta la animación de los círculos
    if (sectionId === 'sobreMi') {
        animateCircles();
    }
}

// Ejecutar animación de los círculos
function animateCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        let currentPercent = 0;

        // Animar el progreso del círculo
        const interval = setInterval(() => {
            currentPercent++;
            if (currentPercent > percent) {
                clearInterval(interval);
            } else {
                circle.style.background = `conic-gradient(
                    #4caf50 ${currentPercent * 3.6}deg,
                    #ddd ${currentPercent * 3.6}deg
                )`;
            }
        }, 15); // Velocidad de la animación
    });
}


let proyectoActual = 0;

function cambiarProyecto(direccion) {
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos[proyectoActual].classList.remove('activo');

    if (direccion === 'next') {
        proyectoActual = (proyectoActual + 1) % proyectos.length; // Siguiente proyecto
    } else if (direccion === 'prev') {
        proyectoActual = (proyectoActual - 1 + proyectos.length) % proyectos.length; // Proyecto anterior
    }

    proyectos[proyectoActual].classList.add('activo');
}
