// Importa a função criarElemento do arquivo util.js
import { criarElemento } from "./util.js";

// Importa a função outsideClick do arquivo outside.js
import outsideClick from "./outside.js";

// Função para inicializar o comportamento de um menu hamburguer
export default function initHamburguer(){
    // Seleciona o elemento da lista no documento
    const lista = document.querySelector('.lista-primaria');
    
    // Seleciona o botão de abertura do menu no documento
    const botaoH = document.querySelector('[data-menu="botao"]');
    
    // Seleciona o botão de fechamento do menu no documento
    const botaoF = document.querySelector('[data-menu="fechar"]');
    
    // Tipos de eventos a serem considerados ('click' e 'touchstart')
    const tiposEventos = ['click', 'touchstart'];

    // Para cada tipo de evento fornecido
    tiposEventos.forEach((evento) =>{
        // Adiciona um event listener ao botão de abertura do menu
        botaoH.addEventListener(evento, handleClick);
        
        // Adiciona um event listener ao botão de fechamento do menu
        botaoF.addEventListener(evento, botaoFechar);
    })

    // Função para tratar o evento de clique no botão de abertura do menu
    function handleClick(event){
        // Adiciona a classe 'ativo' à lista
        lista.classList.add('ativo');
        
        // Chama a função outsideClick para tratar cliques fora da lista
        // Passa a lista, tipos de eventos e uma função de callback para remover a classe 'ativo'
        outsideClick(lista, tiposEventos, ()=>{
            // Remove a classe 'ativo' da lista quando o clique ocorre fora dela
            lista.classList.remove('ativo');
        })
    }

    // Função para tratar o evento de clique no botão de fechamento do menu
    function botaoFechar(){
        // Remove a classe 'ativo' da lista
        lista.classList.remove('ativo');
    }
}
