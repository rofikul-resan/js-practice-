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
    Num= numberList[i]
    for(var j=1; j < Num; j++) {
        // console.log(j);
        if (numberList[i]%j!= 0 ) {
            // console.log(j);
        }else{
            primeNumber.push(numberList[i]);
            break
        }
    }
}
if(minNum<= 2){
    primeNumber.unshift(2);
}

console.log(primeNumber);