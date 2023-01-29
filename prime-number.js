var numberList = [];
var primeNumber =[];
var minNum = 1 ;
var maxNum = 100 ;

// make numberList array 
for (var i = minNum; i <= maxNum ; i++){
    numberList.push(i);
}
// make primeNumber array 
for( var i = 0 ; i < numberList.length ; i++){
    if (numberList[1]<= 1) {
        break
    }else{
        for(var j=2; j < numberList[i] ; j++) {
        if (numberList[i]%j == 0 ) {
             break
        }else{
           primeNumber.push(numberList[i]);
            break
        }
    }
    }
    // console.log(numberList[i]);
    
}
if(minNum == 2){
    primeNumber.unshift(2);
}

console.log(primeNumber);