let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str = 0
let nums = 0
let others = 0

arr.map((sort) => {
    if (typeof sort === 'string') {
        str++
    }else if (typeof sort === 'number') {
        nums++
    }else {
        others++
    }
})

console.log(arr);
console.log(`String ${str}`);
console.log(`Numbers ${nums}`);
console.log(`Others ${others}`);