const num = [10, 20, 10, 22, 32, 55, 67, 44, 69, 86, 80];

const output = num.slice(2, 7);

console.log(output);
console.log(num);  //slice method didn't effect main array


// const removed = num.splice(2, 7);
const removed = num.splice(2, 7 , 33, 80, 60); // you can also inject some element by this

console.log(removed);
console.log(num);  //splice method remove element from the main array


const joined = num.join(", "); //apply join

console.log(joined);




