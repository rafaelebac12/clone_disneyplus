document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const herpsecton = document.querySelectorAll('.hero');
    const alturahero = herosection.clientheight;

    window.addEventListener('scroll', function() {
        const posicaoatual = scrollY;

        if (posicaoatual < alturahero) {
            ocultaelemmentosdoheader();
        } else {
            exibeelementosdoheader();
        }
    }
    )

// Secao de atraçao promaçao das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }


// secao FAQ. accordion
    for (let i =0; i < question.length; i++) {
        question[i].addEventListener('click', abreOufecharesposta);
    }
})

function ocultaelemmentosdoheader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeelementosdoheader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOufecharesposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementopai = elemento.target.parentNode;

    elementopai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}