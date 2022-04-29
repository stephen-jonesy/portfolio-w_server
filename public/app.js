const portfolioTiles = document.querySelectorAll('.portfolio-tiles');
tilesImage = document.querySelectorAll('.tiles-img');
const tilesText = document.querySelectorAll('.tiles-text-container');
const burgerNav = document.querySelector('.nav-burger');

const toggleNav = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('side-nav');
}

/*
function hoverOver(index) {
    console.log('hovered');
    tilesImage[index].classList.add('tiles-img-active');
    tilesText[index].classList.add('tiles-text-container-active');
}

function hoverLeave(index) {
    console.log('off')
    tilesImage[index].classList.remove('tiles-img-active');
    tilesText[index].classList.remove('tiles-text-container-active');

}

portfolioTiles.forEach((element, index) => {
    element.addEventListener('mouseover',() => hoverOver(index));
    element.addEventListener('mouseleave', () => hoverLeave(index));
});
*/


document.addEventListener('click', (e) => {
    if(e.target.matches('.fas')) {
        toggleNav()
        

    }
})
