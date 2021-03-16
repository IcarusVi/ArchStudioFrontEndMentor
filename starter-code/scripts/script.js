

let toggleSubMenu = () => {
    let menuIcon = document.getElementById('hamburger');
    let subMenu = document.getElementById('subMenu');
    if (subMenu.style.display == 'none' || subMenu.style.display == '') {
        subMenu.style.display = 'block';
        menuIcon.src = './assets/icons/icon-close.svg'
    }
    else {
        subMenu.style.display = 'none';
        menuIcon.src = './assets/icons/icon-hamburger.svg'
    }
}

let checkValidation = (event) => {
    event.preventDefault()
    let inputErrors = document.getElementsByClassName('formInput');

    for(var i = 0; i<inputErrors.length; i++){
        let childInput = inputErrors[i].children[0];
        let childError = inputErrors[i].children[1]
        let text = childInput.value
        if(text.trim().length !== 0 ){
        }
        else{
            console.log('Error Input');
            setTimeout(() => {
                childError.style.opacity = 0
            }, 5 * 1000);
            childError.style.opacity = 1;
        }
    }
}