const menuTarget = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

menuTarget.addEventListener('click', event => {
  event.preventDefault()
  menu.classList.toggle('hidden')
})