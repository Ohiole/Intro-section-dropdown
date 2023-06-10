const clickableList = document.querySelector('.clickThis');
const clickableListFirst = document.querySelector('.clickThisFirst')
const insideListComp = document.querySelector('.insideListComp');
const insideList = document.querySelector('.insideList');
const menubar = document.querySelector('.menubar');
const navLinks = document.querySelector('.btns');
const body = document.querySelector('body');

clickableList.addEventListener('click', () => 
{
    insideListComp.classList.toggle('showList');
    if (insideListComp.classList.contains('showList')) {
        clickableList.setAttribute('src', 'images/icon-arrow-up.svg')
    } else {
        clickableList.setAttribute('src', 'images/icon-arrow-down.svg')
    }  
})

clickableListFirst.addEventListener('click', () =>{
    insideList.classList.toggle('showList');
    if (insideList.classList.contains('showList')) {
        clickableListFirst.setAttribute('src', 'images/icon-arrow-up.svg')
    } else {
        clickableListFirst.setAttribute('src', 'images/icon-arrow-down.svg')
    }  
})

menubar.addEventListener('click', ()=>{
    navLinks.classList.toggle('showBtns');
    body.classList.toggle('clickedMenu');
    if (navLinks.classList.contains('showBtns')) {
        menubar.setAttribute('src', 'images/icon-close-menu.svg');
    } else {
        menubar.setAttribute('src', 'images/icon-menu.svg');
    };
});

