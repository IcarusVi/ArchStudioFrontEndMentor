
//Function for opening hamburger navbar
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
//Function to validate form input
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

//Function to slide images
let sliderImages = [
    {
        src:'./assets/home/desktop/image-hero-paramour.jpg',
        header: 'Project Paramour',
        paragraph: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture",
    },
    {
        src:'./assets/home/desktop/image-hero-seraph.jpg',
        header: 'Project Seraph',
        paragraph: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
        src:'./assets/home/desktop/image-hero-federal.jpg',
        header: 'Federal II Tower',
        paragraph: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
        src:'./assets/home/desktop/image-hero-trinity.jpg',
        header: 'Trinity Bank Tower',
        paragraph: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    }
    
]

let slideImages = (event) => {
    let number = event.target.innerHTML;
    number = parseInt(number);
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sliderImages[number-1].src}) `
    let allActiveBtns = document.querySelectorAll('.active');
    allActiveBtns[0].classList.remove('active');
    event.target.classList.add('active');
    let heroHeader = document.getElementById('heroHeader');
    let heroParagraph = document.getElementById('heroParagraph');
    heroHeader.innerHTML = sliderImages[number-1].header;
    heroParagraph.innerHTML = sliderImages[number-1].paragraph;

}
