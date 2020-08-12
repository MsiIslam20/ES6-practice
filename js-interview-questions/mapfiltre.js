//square by using For Loop

// const numbers = [10, 22, 35, 33, 9, 8, 19];
// const output = [];

// for(let i = 0; i < numbers.length ; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


//Square by using Map method

const numbers = [10, 22, 35, 33, 9, 8, 19];

// normal function
const result = numbers.map(function(element){
    return element * element;
})

//arrow function
const result2 = numbers.map(element => element * element);
const result3 = numbers.map(x => x * x);

// console.log(result);
// console.log(result2);
// console.log(result3);


// filter and Find method use

const number = [9, 2, 4, 3, 6, 4, 8];

const output = number.filter(x => x > 4);
const isThere = number.find(x => x > 4);

// console.log(output);
// console.log(isThere);


