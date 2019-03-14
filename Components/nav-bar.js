class NavBar{
    constructor(navBar){
        this.navBar = navBar;
        console.log(this.navBar);
        this.dropdownContent = this.navBar.querySelector(".dropdown-content");
        console.log(this.dropdownContent);

        this.navBar.addEventListener('click', () => this.toggleDropdown());
    }

    toggleDropdown(){
        this.dropdownContent.classList.toggle("hidden");
    }
}

class Button {
    constructor(button){
        this.button = button;
        // this.button.style.transition = "background .5s";
        console.log(this.button);
        this.button.addEventListener('mouseenter', () => this.brighten());
        this.button.addEventListener('mouseleave', () => this.darken());
    }

    brighten(){
        this.button.style.filter = "brightness(150%)";
    }

    darken(){
        this.button.style.filter ="brightness(100%)";
    }
}

let navBars = document.querySelectorAll(".dropdown");
console.log(navBars);
navBars.forEach(navBar => new NavBar(navBar));

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.style.transition ="filter .4s");
buttons.forEach(button => new Button(button));