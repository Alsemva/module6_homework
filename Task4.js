function printNumbers(numberFrom, numberTo){

    function outputInterval() {
        console.log(numberFrom);
        if (numberFrom <  numberTo) numberFrom++;
        else clearInterval(intervalId);
    }

    let intervalId = setInterval(outputInterval, 1000);
}

printNumbers(+prompt('Enter number from:'), +prompt('Enter number to:'));


