// modal.js
import { adicionarOuRemover } from "./util.js";

export default function initAbrirModal() {
    const modal_container = document.querySelector('.modal-container');
    const botaoFechar = document.querySelector('.fechar-modal');
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');

    function abrirModal() {
        if (botaoAbrir) {
            botaoAbrir.addEventListener("click", function (event) {
                event.preventDefault();
                adicionarOuRemover.add(modal_container, 'ativado');
            });
        }
        
        if (botaoFechar) {
            botaoFechar.addEventListener("click", function () {
                adicionarOuRemover.remove(modal_container, 'ativado');
            });
        }

        function fecharModal(event) {
            if (event.target === modal_container) {
                adicionarOuRemover.remove(modal_container, 'ativado');
            }
        }

        window.addEventListener('click', fecharModal);
    }

    abrirModal();
}
