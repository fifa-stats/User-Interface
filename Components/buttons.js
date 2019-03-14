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



// Fetch the buttons and turn them into components
let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.style.transition ="filter .4s");
buttons.forEach(button => new Button(button));