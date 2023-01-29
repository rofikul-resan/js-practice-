//----------------------------------- task 5--------------------------

// var traffickLightColor= "yellow"

// using if else 

// if (traffickLightColor === "red") {
//     console.log("don't move . It is dangers");
// }else if (traffickLightColor === "yellow"){
//     console.log("please wait some minute.");
// }else{
//     console.log("you can go");
// }

// using switch statement



// switch (traffickLightColor) {
//     case ("red"):
//         console.log("don't move . It is dangers");
//         break;
//         case("yellow"):
//         console.log("please weit some minute.");
//         break

//     default:    console.log("you can go");

//         break;
// }


// task ---4  a function to check the value odd or even -------------------------------

var number= 2545212;

function checkReturn(num){
    var result
    if (num%2== 0) {
        result= "odd";
    }else{
        result="even";
    }
    return console.log(result);
}


function check(num){
    var result
    if (num%2== 0) {
        console.log("your result is odd without return value ");
    }else{
        console.log("your result is even without return value ");
    }
}

// checkReturn(number);
// check(number);



//--------------- task 3 output an average number from a array element --------------------------------------

var numArray= [10,23,45,485,12,56,15]

function average(){
    var total= 0;
    for( var i= 0; i<numArray.length; i++){
        total+=numArray[i]
        // console.log(total)
    }
    return total/(numArray.length)

}
var avgResult= average()
// console.log(avgResult)



//------------------------ task 2  make average function-------------------------- 

var number1= 450;
var number2= 850;
var number3= 550;

function make_avg(num1, num2, num3){
    var resultAvg= (num1+num2+num3)/3;
    return resultAvg
}

console.log(make_avg(number1, number2, number3 ));