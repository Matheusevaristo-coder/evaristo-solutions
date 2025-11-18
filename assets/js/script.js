// Espera o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicia a biblioteca de Animação (AOS)
    AOS.init({
        duration: 800,  // Duração da animação em milissegundos
        once: true      // Anima apenas uma vez (quando o usuário rola para baixo)
    });

    // =========================================
    // NOVO: Script para encolher o botão Wpp
    // =========================================
    const header = document.querySelector('header.sticky-top');
    if (header) {
        window.addEventListener('scroll', function() {
            // Se o usuário rolar mais de 50 pixels...
            if (window.scrollY > 50) {
                // Adiciona a classe que encolhe o botão
                header.classList.add('header-scrolled');
            } else {
                // Remove a classe quando voltar ao topo
                header.classList.remove('header-scrolled');
            }
        });
    }

});