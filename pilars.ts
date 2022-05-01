import P5 from 'p5'
export class Pilar {
    x:number
    y:number
    h:number
    w:number

    static screen:P5

    isObserved:boolean = false

    constructor(x:number, y:number, h:number, w:number, screen:P5){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        Pilar.screen = screen
    }

    draw():void {
        if(this.isObserved){
            Pilar.screen.fill(255, 0, 0)
        }else{
            Pilar.screen.fill(100, 100, 100)
        }

        Pilar.screen.rect(this.x, this.y, this.w, this.h)
    }

    static showWater(left: Pilar, right:Pilar){
        Pilar.screen.fill(0,0,255, 50)
        Pilar.screen.rect(
            left.x+left.w,
            10,
            right.x-left.x-left.w,
            Math.min(left.h, right.h),
        )
    }

    static showWaters(pilares: Pilar[]){
        let left: Pilar= null
        let right:Pilar = null
        for(let pilar of pilares){
            if(pilar.isObserved && left == null){
                left = pilar
            }else if(pilar.isObserved && right == null){
                right = pilar
            }
        }
        if(right == null) return
        this.showWater(left, right)
    }
}