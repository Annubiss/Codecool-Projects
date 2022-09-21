
 let num1 = Math.floor(Math.random()*100);
 let num2 = Math.floor(Math.random()*100);
 function calculate(num1,num2,operator){
if(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){
    return "Invalid input, try again"
}

switch(operator){
    case "+":
        return num1+num2;
    case "-":
        return num1-num2;
    case "*":
        return num1*num2;
    case "/":
        if (num2 == 0){
            return "Divison by 0 is not allowed!"
        }
        return num1/num2;
}

}
console.log(num1,num2);
console.log(calculate(num1,num2,"*"));
// First number
// Operation (+, -, *, /): ")
// Second number

// Possible outcomes:
// - Invalid input, try again
// - Division by zero is not allowed
// - or the result of the operation
