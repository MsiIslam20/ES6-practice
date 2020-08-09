//Inheritance extends
class Parent{
    constructor(){
        this.father = "Abraham Khan Joy"
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name = name;
    }
}

const actor = new Child("Shakib Khan")
const actor2 = new Child("SRK khan")
console.log(actor);
console.log(actor2);
