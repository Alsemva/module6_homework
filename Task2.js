function checkingNumber(number){
    if (number <= 0 || number == 1 || number > 1000) return false;
    else return true;
}

function simpleNumber(number){
    let counter = 0;
    for (let i = 2; i < number; i++){
        if (number % i == 0) return 'Not a prime number';
    }
    return 'Prime number'
}

number = prompt('Enter number from 2 to 1000 :');

if (checkingNumber(number)){
    console.log(simpleNumber(number));
}
else console.log('The number is not correct')
