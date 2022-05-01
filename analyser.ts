import {Pilar} from './pilars'

let finished = false

let left:number = 0
let right:number = null
let maxArea: {left:number, right:number, value:number} = {"left": 0, "right": 0, "value":-1};

export function algoIterate(pilares:Pilar[]):boolean{
    if(right == null){
        right = pilares.length -1 
        pilares[left].isObserved = true
        pilares[right].isObserved = true
        return finished
    }
    if(left >= right){
        finished = true
        pilares[left].isObserved = false
        pilares[right].isObserved = false
        pilares[left].draw()
        pilares[right].draw()

        left = maxArea['left']
        right = maxArea['right']
        pilares[left].isObserved = true
        pilares[right].isObserved = true
        pilares[left].draw()
        pilares[right].draw()
        return finished;
    }
    if(finished){
        finished = false;
        pilares[left].isObserved = false
        pilares[right].isObserved = false
        pilares[left].draw()
        pilares[right].draw()

        left = 0
        right = null
        maxArea = {"left":0, "right":0, "value":-1}
        return false;
    }

    pilares[left].isObserved = false
    pilares[right].isObserved = false

    if(maxArea.value < (right-left)*Math.min(pilares[left].h, pilares[right].h)){
        maxArea = {
            "left":left,
            "right":right,
            "value":(right-left)*Math.min(pilares[left].h, pilares[right].h)
        }
    }else{
        if(pilares[left].h < pilares[right].h){
            left++
        }else{
            right--
        }
    }

    pilares[left].isObserved = true
    pilares[right].isObserved = true

    return finished
}