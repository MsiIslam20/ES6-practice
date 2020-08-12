//Using Break
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 44, 26];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(numbers[i] > 4){
        break;
    }
    // console.log(element);
}


//Using Continue
const numbersTwo = [1, -2, 3, 4,- 5, 6, 7, 8, -9, 20, 44, -26];

for (let i = 0; i < numbersTwo.length; i++) {
    const element = numbersTwo[i];
    if(numbersTwo[i] < 0){
        continue;
    }
    console.log(element);
}

