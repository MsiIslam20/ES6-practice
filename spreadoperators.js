/*  ========== Spread Operators ===============  **/

const age = [12, 14, 15, 18, 20]
const age2 = [22, 44, 25, 38, 10]


// const add = age.concat(age2);
const result = [...age,...age2]
console.log(result);

const arrayMax = [650, 300, 800, 200];
const max = Math.max(...arrayMax);
console.log(max);