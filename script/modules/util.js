
export const adicionarOuRemover = {
    add(elemento, classe){
        if(!elemento.classList.contains(classe))
        elemento.classList.add(classe);
    },
    remove(elemento, classe){
        if(elemento.classList.contains(classe))
        elemento.classList.remove(classe);
    },

}

export const criarElemento = {
    adicionarUmElemento(elemento, conteudo, appendTag){
        let novoElemento = document.createElement(elemento);
        const tag = document.querySelector(appendTag);
        novoElemento.innerHTML = conteudo;
        tag.appendChild(novoElemento);
    },
    adicionarElementoPaieFilho(elemento, filho, conteudo, href,  appendTag){
        let novoElemento = document.createElement(elemento);
        let filhoElemento = document.createElement(filho);
        const tag = document.querySelector(appendTag);
        filhoElemento.setAttribute('href', href);
        filhoElemento.innerHTML = conteudo;
        novoElemento.appendChild(filhoElemento);
        tag.appendChild(novoElemento);
        
    },
    removerElementoPaieFilho(elemento,){

    }
}

