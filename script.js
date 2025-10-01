let provinciaSeleccionada = null;

document.getElementById('provincias-lista').onclick = (e) => {
    if (e.target.tagName === 'LI') {
        document.querySelector('.selected')?.classList.remove('selected');
        e.target.classList.add('selected');
        provinciaSeleccionada = e.target.dataset.provincia;
    }
};

document.getElementById('mapa').onclick = (e) => {
    if (e.target.tagName === 'rect' && e.target.id === provinciaSeleccionada) {
        e.target.classList.add('highlight');
        const nombreProvincia = e.target.dataset.nombre;
        const textoNombre = document.getElementById('nombre-provincia');
        textoNombre.textContent = nombreProvincia;
        textoNombre.classList.add('visible');
        provinciaSeleccionada = null;
        document.querySelector('.selected').classList.remove('selected');
    }
};