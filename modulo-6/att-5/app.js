const botaoConcluir = document.getElementById('btn-concluir');

botaoConcluir.addEventListener('click', function() {
    const itens = document.querySelectorAll('#minha-lista li');

    itens.forEach(function(item) {
        item.classList.add('concluido');
    });
});