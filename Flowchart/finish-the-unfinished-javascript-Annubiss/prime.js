for(num = 0; num<20; num++){
    if(num<=1){
        console.log(num);
        console.log("Too small");
    }

    if(num % 2 == 0 || num % 3 == 0){
        console.log(num);
        console.log("Not Prime");
    }else{
        console.log(num);
        console.log("Prime");
    }

}
// Implement flowchart "Prime" here.

// Give me an integer (greater than 1)
// Possible outcomes:
// - Not an integer
// - Too small
// - Not prime
// - Prime
