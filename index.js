/* cambiar fondo */

Image1 = () => {
    document.getElementById('backround').style.backgroundImage = "url('./images/hero.jpg')"
}

Image2 = () => {
    document.getElementById('backround').style.backgroundImage = "url('/images/hero2.jpg')"
}

Image3 = () => {
    document.getElementById('backround').style.backgroundImage = "url('/images/hero3.jpg')"
}


ScrollReveal().reveal('.titulo-2 , .parrafo-2', { origin: "bottom", distance: "100px", duration: 1000});

ScrollReveal().reveal('.carta', {
    origin: 'bottom',
    distance: '100px',
    duration: 1000
})

