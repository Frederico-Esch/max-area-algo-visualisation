import P5 from "p5";
import { algoIterate } from "./analyser";
import { Pilar } from "./pilars";
const sketch = (p5:P5) => {
    let width:number
    let amount: number
    let size:number
    let searching = false

    let pillars:Pilar[] = []

    p5.setup = () =>{
        p5.createCanvas(1300, 600);
        width = p5.width;
        amount = 10;
        size = width/(amount*2);

        let sizes = [100, 150, 1, 5, 20, 300, 20, 30, 120, 235]
        for(let i =0; i < amount; i++){
            let x = i*2*size;
            pillars.push(new Pilar(x, 10, sizes[i], size, p5))
        }

        let button = p5.createButton("Seach Max Area")
        button.mouseClicked(() => searching = true)

        p5.frameRate(2)
    }

    p5.draw = () =>{
        p5.background(150);
        p5.translate(size/2, p5.height); p5.scale(1, -1)
        p5.noStroke();

        for(let pilar of pillars){
            pilar.draw()
        }

        if(searching){ if(algoIterate(pillars)) searching = false}
        else(Pilar.showWaters(pillars))
    }

    function search():void{
        algoIterate(pillars)
    }

    p5.mouseClicked = ()=>{
        let x = p5.mouseX - size/2;
        let y = p5.height - p5.mouseY;
        if(y < 0 ) return
        for(let pilar of pillars){
            if(x < pilar.x + pilar.w && x > pilar.x){
                console.log("achou")
                pilar.h = y
                break;
            }
        }
    }
}

new P5(sketch)