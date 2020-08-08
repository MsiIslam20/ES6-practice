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
const hello = () => {
    return "Hello World!";
  }
// single line
const hello = () => "Hello World!";
const hello = val => "Hello World!" + val;
const hello = (val, value) => "Hello World!" + val + value;
