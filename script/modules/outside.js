// Função que trata cliques fora de um elemento
export default function outsideClick(elemento, eventos, functionCallback){

    // Atributo personalizado para marcar o elemento como clicável fora
    const outside = 'data-outside';

    // Verifica se o elemento não possui o atributo 'data-outside'
    if(!elemento.hasAttribute(outside)){
        // Aguarda 100 milissegundos antes de adicionar os event listeners
        setTimeout(()=>{
            // Para cada tipo de evento fornecido
            eventos.forEach((evento) =>{
                // Adiciona um event listener ao objeto HTML
                document.documentElement.addEventListener(evento, handleOutsideClick);
            });
            // Adiciona o atributo 'data-outside' ao elemento
            elemento.setAttribute(outside, '');
        }, 100)
    }

    // Função para tratar cliques fora do elemento
    function handleOutsideClick(event){
        // Log para mostrar o alvo do evento no console
        console.log(event.target);
        
        // Verifica se o elemento não contém o alvo do clique
        if(!elemento.contains(event.target)){
            // Remove o atributo 'data-outside' do elemento
            elemento.removeAttribute(outside);
            
            // Para cada tipo de evento fornecido
            eventos.forEach((evento) =>{
                // Remove os event listeners do objeto HTML
                document.documentElement.removeEventListener(evento, handleOutsideClick);
            });
            
            // Chama a função de callback fornecida
            functionCallback();
        }
    }
}
