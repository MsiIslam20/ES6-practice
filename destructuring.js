/*  ========== destructuring ===============  **/

let person = {
    name : "saidul",
    age : 20,
    phone : 2202202,
    city : "sylhet"
}
// When destructuring, you can set a value for one variable to be the value of another variable.
const {name, nickname = name} = person
// console.log(name);
// console.log(nickname);




