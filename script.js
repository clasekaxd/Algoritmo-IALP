let provinciaSeleccionada = null;
const successSound = document.getElementById('success-sound');

document.getElementById('provincias-lista').onclick = (e) => {
    if (e.target.tagName === 'LI') {
        document.querySelector('.selected')?.classList.remove('selected');
        e.target.classList.add('selected');
        provinciaSeleccionada = e.target.dataset.provincia;
    }
};

document.getElementById('mapa').onclick = (e) => {
    if (e.target.tagName === 'rect') {
        if (e.target.id === provinciaSeleccionada) {
            e.target.classList.add('highlight');
            successSound.play();
            const nombreProvincia = e.target.dataset.nombre;
            const textoNombre = document.getElementById('nombre-provincia');
            textoNombre.textContent = `¡Genial! Encontraste ${nombreProvincia}`;
            textoNombre.classList.add('visible');
            provinciaSeleccionada = null;
            document.querySelector('.selected')?.classList.remove('selected');
        } else {
            // Efecto visual para fallo
            e.target.style.fill = '#ff6b6b';
            setTimeout(() => {
                e.target.style.fill = '#eee';
            }, 500);
        }
    }
};

document.getElementById('reset-btn').onclick = () => {
    document.querySelectorAll('#mapa rect').forEach(rect => {
        rect.classList.remove('highlight');
        rect.style.fill = '#eee';
    });
    document.getElementById('nombre-provincia').classList.remove('visible');
    document.querySelector('.selected')?.classList.remove('selected');
    provinciaSeleccionada = null;
};