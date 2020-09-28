class DropDownList {

    listOpen;

    constructor(DropDownDiv,button) {
        this.DropDownDiv = document.querySelector(`${DropDownDiv}`);
        this.button = document.querySelector(`${button}`);
        this.UL = document.querySelector(`${DropDownDiv}`).querySelector("ul");
        this.listOpen = false;
        this.UL.style.display = "none";
    }


    initialise() {
        this.button.addEventListener("click", () => {
            if(!this.listOpen){
                this.UL.style.display = "block";
                this.listOpen = true;
                console.log(this.listOpen);
                return;
            }
            if(this.listOpen){
                this.UL.style.display = "none";
                this.listOpen = false;
                console.log(this.listOpen);
                return;
            }
        })
        return this;
    }


}