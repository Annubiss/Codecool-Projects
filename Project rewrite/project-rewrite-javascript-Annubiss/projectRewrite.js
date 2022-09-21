
function min(x, y) {
    if(x>y){
     return y;
    } else {
        return x;
    }

}


function max(valuesList) {
    let MaxValue = 0;
    for(let i of valuesList){
        if(i>MaxValue){
            MaxValue =i;
            
        }
    }return MaxValue;

}

function len(valuesList) {
    let Lenght = 0;
    for(let i of valuesList){
        Lenght++
    }return Lenght;

}

function multiply(x, y) {
    let val = 0;
    for(i = 0; i<y; i++){
        val = val+x;
        
    }return val;

}

function pow(x, y) {
    let exp = 1;
    for(i = 0; i<y; i++){
        exp = exp*x;
    }return exp;

}

function divmod(x, y) {

}
