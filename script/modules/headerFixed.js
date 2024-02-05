
export default function initHeaderMove() {
    const header = document.querySelector('.header-bg');


    window.addEventListener('scroll', function () {
        if (window.scrollY > header.offsetHeight) {
            header.classList.add('fixed-header');
        } else {
            header.classList.remove('fixed-header');
            
        }
    });
}


