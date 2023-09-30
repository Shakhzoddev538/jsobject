// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

// let str = 0
// let nums = 0
// let others = 0

// arr.map((sort) => {
//     if (typeof sort === 'string') {
//         str++
//     }else if (typeof sort === 'number') {
//         nums++
//     }else {
//         others++
//     }
// })

// console.log(arr);
// console.log(`String ${str}`);
// console.log(`Numbers ${nums}`);
// console.log(`Others ${others}`);


// let first_user = {
//     name: 'shakhzod',
//     surname: 'shavkatov',
//     age: 17,
//     passport: {
//         serries:"AC",
//         number: 986727562,
//         born: "2006",
//         gender:'male',
//     },
//     radio: {
//         height: 178,
//         weight:65,
//     }
// }

// let second_user = {
//     name: 'nakshbandi',
//     surname: 'xurramov',
//     age: 17,
//     passport: {
//         serries:"AC",
//         number: 363765343,
//         born: "2006",
//         gender:'male',
//     },
//     radio: {
//         height: 180,
//         weight:752,
//     }
// }

// let new_obj = Object.assign({}, {first_user}, {second_user})

// console.log(new_obj);

// //ключи
// let new_keys1 = Object.keys(new_obj)
// let new_keys2 = Object.keys(first_user)
// let new_keys3 = Object.keys(second_user)

// console.log(new_keys1, new_keys2, new_keys3);

// //значения
// let new_value1 = Object.values(first_user.passport)
// let new_value2 = Object.values(second_user.passport)
// let new_value3 = Object.values(first_user.radio)
// let new_value4 = Object.values(second_user.radio)

// console.log(new_value1, new_value2, new_value3, new_value4);

// //ключи и значения
// console.log(
//     Object.entries(first_user)
// );
// console.log(
//     Object.entries(second_user)
// );

// //типы данных
// let types = {
//     string: [],
//     number: [],
//     object: [],
//     boolean: []
// }

// new_value1.map((sort) => {
//     if (typeof sort === 'string') {
//         return types.string++
//     }else if (typeof sort === 'number') {
//         return types.number++
//     }else if (typeof sort === 'object') {
//         return types.object++
//     }else {
//         return types.boolean++
//     }
// })

// new_value2.map((sort) => {
//     if (typeof sort === 'string') {
//         return types.string++
//     }else if (typeof sort === 'number') {
//         return types.number++
//     }else if (typeof sort === 'object') {
//         return types.object++
//     }else {
//         return types.boolean++
//     }
// })

// new_value3.map((sort) => {
//     if (typeof sort === 'string') {
//         return types.string++
//     }else if (typeof sort === 'number') {
//         return types.number++
//     }else if (typeof sort === 'object') {
//         return types.object++
//     }else {
//         return types.boolean++
//     }
// })

// new_value4.map((sort) => {
//     if (typeof sort === 'string') {
//         return types.string++
//     }else if (typeof sort === 'number') {
//         return types.number++
//     }else if (typeof sort === 'object') {
//         return types.object++
//     }else {
//         return types.boolean++
//     }
// })

// console.log(`string ${types.string}`);
// console.log(`number ${types.number}`);
// console.log(`object ${types.object}`);
// console.log(`boolean ${types.boolean}`);

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