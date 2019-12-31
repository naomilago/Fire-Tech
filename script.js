const nav = document.getElementById('abnav')
const topOfNav = nav.offsetTop

function fixNav() {

    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        nav.classList.add('fixed-top')
    } else {
        document.body.style.paddingTop = 0
        nav.classList.remove('fixed-top')
    }

}

window.addEventListener('scroll', fixNav)