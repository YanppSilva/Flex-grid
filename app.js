const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
const list = document.querySelectorAll('.menu-lateral__link') 

botaoMenu.addEventListener('click', () => (
    menu.classList.toggle('menu-lateral--ativo')
))

function activeList() {
    list.forEach((item) =>
    item.classList.remove('menu-lateral__link--ativo'));
    this.classList.add('menu-lateral__link--ativo')
}

list.forEach((item) =>
item.addEventListener('click', activeList))


