
 // Mensagem ao clicar no botão "Saiba Mais"
    const button = document.querySelector('.btn-hero');
    button.addEventListener('click', () => {
        alert('Obrigado por se interessar! Estamos prontos para te ajudar.');
    });

    // Rolagem suave para âncoras internas (se tiver links internos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });