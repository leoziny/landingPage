export default function initAnimaScroll(){
    const metadeTela = window.innerHeight * 0.7;
    const sections = document.querySelectorAll('[data-anima=scroll]');

    function animaScroll(){
        sections.forEach((secao) => {
            const secaoTop = secao.getBoundingClientRect().top;
            const eVisivel = (secaoTop - metadeTela) < 0;

            if(eVisivel)
            secao.classList.add('ativado');
        });
        window.addEventListener('scroll', animaScroll)

    }
    animaScroll();

}
