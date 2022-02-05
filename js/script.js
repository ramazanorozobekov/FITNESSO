let openModal = document.querySelector('.navbar__menu--shop')
let modal = document.querySelector('.nav__modal')
let closeBtn = document.querySelector('.nav__modal--content__btn')
// let btn = document.querySelector('.modal')

openModal.addEventListener("click", function () {
    modal.style.display = 'flex'
})


closeBtn.addEventListener("click", function () {
    modal.style.display = 'none'
})

window.onclick = (e) =>{
    if (e.target === modal) {
        modal.style.display = 'none'
    }
}
