document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const alvoId = this.getAttribute('href').substring(1);
        const alvo = document.getElementById(alvoId);

        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth'});
        }
    });
});