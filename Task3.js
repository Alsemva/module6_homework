function getNumber(number1){
    return function(number2){
            return number1 + number2;
    }
}
let resultSum = getNumber(5);
console.log(resultSum(2));