const headerBtn = document.querySelector('.header__button')
const headerMenu = document.querySelector('.header__menu')
const header = document.querySelector('.header')
const headerTitle = document.querySelector('.header__title')
const body = document.querySelector('.body')
const footer = document.querySelector('.footer')
function showMenu (){
    headerMenu.classList.toggle('show')
}

function removeMenu (){
    headerMenu.classList.remove('show')
}

headerBtn.addEventListener('click', showMenu)

headerTitle.addEventListener('click', removeMenu)
body.addEventListener('click', removeMenu)
footer.addEventListener('click', removeMenu)

header.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target == e.currentTarget){
        headerMenu.classList.remove('show')
    }
} )

