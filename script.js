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


let first_user = {
    name: 'shakhzod',
    surname: 'shavkatov',
    age: 17,
    passport: {
        serries:"AC",
        number: 986727562,
        born: "2006",
        gender:'male',
    },
    radio: {
        height: 178,
        weight:65,
    }
}

let second_user = {
    name: 'nakshbandi',
    surname: 'xurramov',
    age: 17,
    passport: {
        serries:"AC",
        number: 363765343,
        born: "2006",
        gender:'male',
    },
    radio: {
        height: 180,
        weight:752,
    }
}

let new_obj = Object.assign({}, {first_user}, {second_user})

console.log(new_obj);

//ключи
let new_keys1 = Object.keys(new_obj)
let new_keys2 = Object.keys(first_user)
let new_keys3 = Object.keys(second_user)

console.log(new_keys1, new_keys2, new_keys3);

//значения
let new_value1 = Object.values(first_user.passport)
let new_value2 = Object.values(second_user.passport)
let new_value3 = Object.values(first_user.radio)
let new_value4 = Object.values(second_user.radio)

console.log(new_value1, new_value2, new_value3, new_value4);

//ключи и значения
console.log(
    Object.entries(first_user)
);
console.log(
    Object.entries(second_user)
);

//типы данных
let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}

new_value1.map((sort) => {
    if (typeof sort === 'string') {
        return types.string++
    }else if (typeof sort === 'number') {
        return types.number++
    }else if (typeof sort === 'object') {
        return types.object++
    }else {
        return types.boolean++
    }
})

new_value2.map((sort) => {
    if (typeof sort === 'string') {
        return types.string++
    }else if (typeof sort === 'number') {
        return types.number++
    }else if (typeof sort === 'object') {
        return types.object++
    }else {
        return types.boolean++
    }
})

new_value3.map((sort) => {
    if (typeof sort === 'string') {
        return types.string++
    }else if (typeof sort === 'number') {
        return types.number++
    }else if (typeof sort === 'object') {
        return types.object++
    }else {
        return types.boolean++
    }
})

new_value4.map((sort) => {
    if (typeof sort === 'string') {
        return types.string++
    }else if (typeof sort === 'number') {
        return types.number++
    }else if (typeof sort === 'object') {
        return types.object++
    }else {
        return types.boolean++
    }
})

console.log(`string ${types.string}`);
console.log(`number ${types.number}`);
console.log(`object ${types.object}`);
console.log(`boolean ${types.boolean}`);