

let toggleSubMenu = () => {
    let menuIcon = document.getElementById('hamburger');
    let subMenu = document.getElementById('subMenu');
    console.log(menuIcon)

    if(subMenu.style.display === 'none'){
        subMenu.style.display = 'block';
        menuIcon.src = './assets/icons/icon-close.svg'
    }
    else{
        subMenu.style.display = 'none';
        menuIcon.src = './assets/icons/icon-hamburger.svg'
    }
}
