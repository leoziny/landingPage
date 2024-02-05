export default function initAnimaScroll(){
    const metadeTela = window.innerHeight * 0.7;
    const sections = document.querySelectorAll('[data-anima=scroll]');
   const mediaQueryList = window.matchMedia('(max-width: 768px)');
    function animaScroll(){
        sections.forEach((secao) => {
            const secaoTop = secao.getBoundingClientRect().top;
            const eVisivel = (secaoTop - metadeTela) < 0;

            if(eVisivel)
            secao.classList.add('ativado');
        });
        function handleMediaChange(mediaQueryList) {
          if (mediaQueryList.matches) {
        
            document.documentElement.className = '';
          } else {
        
            document.documentElement.className = 'js';
          }
        }
        mediaQueryList.addListener(handleMediaChange);
        handleMediaChange(mediaQueryList);
        window.addEventListener('scroll', animaScroll)

    }
    animaScroll();

}
