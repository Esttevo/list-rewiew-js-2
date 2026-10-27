const campoFiltro = document.getElementById('campo-filtro');

campoFiltro.addEventListener('input', function() {
    const textoDigitado = campoFiltro.value.toLowerCase();
    const setores = document.querySelectorAll('#lista-setores li');

    setores.forEach(function(setor) {
        const nomeSetor = setor.textContent.toLowerCase();

        if (nomeSetor.includes(textoDigitado)) {
            setor.style.display = '';
        } else {
            setor.style.display = 'none';
        }
    });
});