/**
 * # Открытие меню
 * 1. Кликаем по бургеру
 * 2. Открывается меню
 *
 * # Закрытие меню
 * 1. Кликаем по крестику
 * 2. Меню закрывается
 */

/**
 * # Добавить класс
 * menu.classList.add('is-show')
 *
 * # Удалить класс
 * menu.classList.remove('is-show')
 *
 * # Добавить или удалить класс
 * menu.classList.toggle('is-show')
 */

const burger = document.querySelector('.header__burger')
const btnClose = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')
const body = document.body

const bodyLock = () => {
	body.style.paddingRight = window.innerWidth - body.offsetWidth + 'px'
	body.style.overflow = 'hidden'
}
const bodyUnLock = () => {
	body.style.paddingRight = 0
	body.style.overflow = ''
}

burger.addEventListener('click', function() {
	menu.classList.add('is-show')
	bodyLock()
})

btnClose.addEventListener('click', function() {
	menu.classList.remove('is-show')
	bodyUnLock()
})

