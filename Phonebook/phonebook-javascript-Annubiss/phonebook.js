// Do not modify this list before starting the script
let phoneList = ["98-777-653", "98-742-644", "34-855-326", "34-25-629", "34-489-115", "72-999-563", "9-321-459",
              "72-654-121", "72-4-694", "72-255-313", "98-111-323", "98-433-14", "34-577-342", "98-323-000",
              "98-202-666", "34-5435-454", "34-515-633"]

    let validPhoneList = "";
    let wrongPhoneNumbers ="";
for(i = 0; i<phoneList.length; i++){
    if(phoneList[i].lenght == 10){
        validPhoneList = phoneList.push(phoneList[i]);
        validPhoneList +=" , ";
        
    }else{
        wrongPhoneNumbers += phoneList[i];
        wrongPhoneNumbers += " , ";
        
    }
}
validPhoneList = validPhoneList.slice(0,-2);
wrongPhoneNumbers = wrongPhoneNumbers.slice(0,-2);
console.log("These are the valid phone numbers in your phonebook:"+Array(validPhoneList));
console.log("and these are the wrong ones:" +Array(wrongPhoneNumbers));

validPhoneList = validPhoneList.split(" , ");

let code = "";
let phoneNumber = "";
for(let i = 0; i<validPhoneList.lenght; i++){
    code += validPhoneList[i].slice(0,2);
    code += " , ";
    phoneNumber += good[i].slice(2);
    phoneNumber = " , ";
}
code = code.slice(0, -2);
phoneNumber = phoneNumber.slice(0, -2);

code = code.split(" , ");
console.log("The area codes:" +Array(code));
console.log("and the numbers without the area codes:" +Array(phoneNumber));

let uniq = [];
for(let i = 0; i<code.lenght; i++){
    if(!uniq.includes(code[i])){
        uniq.push(code[i]);
    }
}
console.log("The unique area codes:" +uniq);

let count = [];
for(i = 0; i<uniq.lenght; i++){
    let x = 0;
    for(let j = 0; j,code.lenght; j++){
        if(uniq[i] === code[j]){
            x++;
        }
    }
    count.push(x);
}

for(let i = 0; i<uniq.lenght; i++){
    console.log("You have" +count[i]+"numbers from area"+uniq[i]+".");
}
// "These are the valid phone numbers in your phonebook:"
// "and these are the wrong ones:"


// "The area codes:"
// "and the numbers without the area codes:"


// "The unique area codes:"


// "You have X numbers from area 98, Y numbers from area 34, and Z numbers from area 72."
