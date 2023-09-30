// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

// let str = 0
// let nums = 0
// let others = 0

// arr.map((sort) => {
//     if (typeof sort === 'string') {
//         str++
//     }else if (typeof sort === 'number') {
//         nums++git
//     }else {
//         others++
//     }
// })

// console.log(arr);
// console.log(`String ${str}`);
// console.log(`Numbers ${nums}`);
// console.log(`Others ${others}`);

//home work 3
let students = [
    {
        name: "baxtzod",
        age: 15,
        isMarried: false,
        hair_color: "blue"
    },
    {
        name: "islom",
        age: 15,
        isMarried: true,
        hair_color: "red"
    },
    {
        name: "safir",
        age: 15,
        isMarried: false,
        hair_color: "lisiy"
    },
    {
        name: "abdumanon",
        age: 13,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "xojimurod",
        age: 16,
        isMarried: true,
        hair_color: "pink"
    },
    {
        name: "aziza soliyeva",
        age: 15,
        isMarried: true,
        hair_color: "green"
    },
    {
        name: "aziza",
        age: 15,
        isMarried: false,
        hair_color: "skyblue"
    },
    {
        name: "ismoil",
        age: 12,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "artyom",
        age: 14,
        isMarried: false,
        hair_color: "purple"
    },
    {
        name: "abdukhafiz",
        age: 17,
        isMarried: false,
        hair_color: "white"
    },
    {
        name: "bobur",
        age: 18,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "shoxa",
        age: 17,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "alSafir",
        age: 15,
        isMarried: true,
        hair_color: "orange"
    },
]

// 1. Отсортировать массив по нарастанию возраста 
let student = students.sort((a, b) => b.age - a.age)

console.log(student);
// 2. Распледелить женатых и не женатых в разные массивы должны быть только имена 
let marriedStudents = []
let unmarriedStudents = []

students.forEach(students__married_and_unmarried =>{
    if (students__married_and_unmarried.isMarried === true) {
        marriedStudents.push(students__married_and_unmarried.name)
    } else {
        unmarriedStudents.push(students__married_and_unmarried.name)
    }
})

console.log(marriedStudents);
console.log(unmarriedStudents);
// 3. Найти самого старшего 
let older = students.reduce((older, student) => {
    if (older >= student) {
        return older
    } else {
        return student
    }
})

console.log(older);
// 4. Найти самого младшего
let junior = students.reduce((junior, student) => {
    if (junior  < student) {
        return junior
    } else {
        return student
    }
})

console.log(junior);