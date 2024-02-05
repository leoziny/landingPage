
export default function initBarraRolagem(){
    function barraRolagem(){
        window.addEventListener('scroll', function(){
            const posicaoAtual = window.scrollY;
            const barra = document.querySelector('.barra-rolagem');
            const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
            const porcentagemRolada = Math.round((posicaoAtual / alturaTotal) * 100);
                barra.style.width = porcentagemRolada + "%" 
              
           
        })
    }
    barraRolagem();
}
