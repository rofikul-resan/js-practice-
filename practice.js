var resan = 90;
var resad = 40;
var riyad = 31;
var siam = 55;

var student = resan;

if( student > 33 && student < 50){
    console.log('you gat D');
}else if (student >= 50 && student < 60 ){
    console.log('you gat C');
}else if (student >= 50 && student < 60 ){
    console.log('you gat C');
}else if (student >= 60 && student < 70 ){
    console.log('you gat B');
}else if (student >= 70 && student < 80 ){
    console.log('you gat A-');
}else if (student >= 80 && student <= 100 ){
    console.log('you gat A+');
}else{
    console.log('you gat F.. now everybody call yoû faltu');
}
console.log(6 == 6)

using whale loop make odd and even array 

var number= 0;
var odd = [];
var even =[];

while (number <= 200) {
    if (number%2 == 0 ) {
        even.push( number)
    }else{
        odd.push(number)
    }
    number++
}

console.log( even);
console.log( odd);




