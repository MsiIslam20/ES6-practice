//Template String
const firstName = "Mahin"
const lastName = "Ahmed"
// const fullName = firstName + lastName;
const fullName = `${firstName} ${lastName} is a good boy.`
console.log(fullName);

//Multiline string
const paragraph = `I love my country.
I will be a creative developer.`
console.log(paragraph);


//Arrow Function

//multiline
const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total
}
// single line
const doubleIt = num => num * 2;
const sum = (x , y) => x + y;


