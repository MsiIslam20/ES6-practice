const students = [
    {id: 1, name: "Saidul Islam"},
    {id: 3, name: "Shakil ahmed"},
    {id: 6, name: "Maruf"},
    {id: 5, name: "mohammad ssk"},
    {id: 2, name: "Saidul Islam"},
    {id: 9, name: "Rocky Bond"},
];

const output = students.map(sName => sName.id);

const output2 = students.filter(sName => sName.id > 3);

console.log(output);
console.log(output2);
