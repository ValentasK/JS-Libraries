
class DOMmanipulation {

    constructor(Selector) {
        this.myObj = document.querySelector(Selector);

        ///////// css //////////////////
   
        this.myObj.style.height = "200px";
        this.myObj.style.width = "200px";
        this.myObj.style.border = "solid 2px black";
    }

    changeColor(){
        this.myObj.addEventListener("mouseover", () => {
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            this.myObj.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
        })
        return this;
    }

    circle(size){
        this.myObj.style.borderRadius = "50%";
        this.myObj.style.height = size+ "px";
        this.myObj.style.width = size+ "px";
        return this;
    }

    cube(size){
        this.myObj.style.height = size+ "px";
        this.myObj.style.width = size+ "px";
        return this;
    }

    red(){
        this.myObj.style.backgroundColor = "rgb(219, 11, 11)";
        return this;
    }
    green(){
        this.myObj.style.backgroundColor = "rgb(1, 250, 11)";
        return this;
    }
    blue(){
        this.myObj.style.backgroundColor = "rgb(1, 1, 250)";
        return this;
    }

    rotate(degrees){
        this.myObj.style.transform = `rotate(${degrees}deg)`;
        return this;
    }

    scale(scale){
        this.myObj.style.transform = `scale(${scale})`;
        return this;
    }

}




