function getOddEven(){
    let arr = [1, 0, 4, 7, 8, null, undefined, '', "day", 3, 2, 0, 5];
    even = 0;
    odd = 0;
    zero = 0;
    other = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0 && typeof arr[i] == 'number') zero++;
        else if (typeof arr[i] != 'number' || !arr[i]) other++;
        else if (arr[i] % 2 == 0) even++;
        else odd++;
    }
    console.log(`Элементов в массиве\nЧётных: ${even}\nНечётных: ${odd}\nНулевых: ${zero}\nДругих элементов ${other}`);
}

getOddEven();
