class CustomButton extends HTML{
    constructor(){
        super();
        console.log('Custom Button creado')
    }
}

window.customElements.define('custom-button', CustomButton);