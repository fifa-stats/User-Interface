class NavBar{
    constructor(navBar){
        this.navBar = navBar;
        console.log(navBar);
        this.dropdownContent = this.navBar.querySelector(".dropdown-content");
        console.log(this.dropdownContent);
        this.navContent = this.navBar.querySelectorAll("span");
        console.log(this.navContent);

        this.navBar.addEventListener('click', () => this.toggleDropdown());
    }

    toggleDropdown(){
        this.dropdownContent.classList.toggle("hidden");
        this.navBar.classList.toggle("dropdown-invert");
        this.navContent.forEach(element => element.classList.toggle("nav-content-invert"));
    }
}

// class Button {
//     constructor(button){
//         this.button = button;
//         // this.button.style.transition = "background .5s";
//         console.log(this.button);
//         this.button.addEventListener('mouseenter', () => this.brighten());
//         this.button.addEventListener('mouseleave', () => this.darken());
//     }

//     brighten(){
//         this.button.style.filter = "brightness(150%)";
//     }

//     darken(){
//         this.button.style.filter ="brightness(100%)";
//     }
// }

// Fetch the nav bar and turn it into a component

    let navBars = document.querySelectorAll(".dropdown").forEach(navBar => new NavBar(navBar));


// Fetch the buttons and turn them into components

// let buttons = document.querySelectorAll("button");
// buttons.forEach(button => button.style.transition ="filter .4s");
// buttons.forEach(button => new Button(button));