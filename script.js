/*  ========== Template String ===============  **/
const firstName = "Mahin"
const lastName = "Ahmed"
// const fullName = firstName + lastName;
const fullName = `${firstName} ${lastName} is a good boy.`
console.log(fullName);

//Multiline string
const paragraph = `I love my country.
I will be a creative developer.`
console.log(paragraph);


/*  ========= Arrow function ===============  **/

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

/*  ========== Spread Operators ===============  **/

const age = [12, 14, 15, 18, 20]
const age2 = [22, 44, 25, 38, 10]

// const add = age.concat(age2);
const result = [...age,...age2]
// console.log(result);

const arrayMax = [650, 300, 800, 200];
const max = Math.max(...arrayMax);
// console.log(max);


/*  ========== Class Constructor ===============  **/

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Khanihati ML High School"
    }
}

const studentOne = new Student(2, "Saidul");
const studentTwo = new Student(3, "Islam");
// console.log(studentOne);
// console.log(studentTwo);






