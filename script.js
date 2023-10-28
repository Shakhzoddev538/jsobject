// // let companies = [
// //     {
// //         id: 1,
// //         name: 'baxtMen',
// //         budget: 200000,
// //         tax: 19,
// //         expenses: [10000, 2000, 60000]
// //     },
// //     {
// //         id: 2,
// //         name: 'nosfrush',
// //         budget: 1000,
// //         tax: 0,
// //         expenses: [50, 100, 10]
// //     },
// //     {
// //         id: 3,
// //         name: 'artyomida',
// //         budget: 400000,
// //         tax: 23,
// //         expenses: [5000,14000,3000]
// //     },
// //     {
// //         id: 4,
// //         name: 'azizas',
// //         budget: 150000,
// //         tax: 0,
// //         expenses: [5000,6000,4000]
// //     },
// //     {
// //         id: 5,
// //         name: 'openBobur',
// //         budget: 500,
// //         tax: 12,
// //         expenses: [10,30,5]
// //     },
// //     {
// //         id: 6,
// //         name: 'IS_buildings',
// //         budget: 1000000,
// //         tax: 21,
// //         expenses: [500000, 25000, 10000]
// //     },
// //     {
// //         id: 7,
// //         name: 'XOJIK_RADAR',
// //         budget: 40000,
// //         tax: 12,
// //         expenses: [500, 2500, 1000]
// //     },
// // ]


// // // 1. Посчитать общие расходы каждой компании 
// // // 2. Показать чистую прибыль каждой компании вычитав расходы и налоги
// // let total = [];

// // for(let i = 0; i < companies.length; i++) {
// //         let company = companies[i];
// //         let sum = 0;
// // for(let k = 0; k < company.expenses.length; k++) {
// //     sum += company.expenses[k];
// // }
// //     total.push(sum);

// //         let prosent = company.budget * company.tax / 100;
// //         let chistiy_pribl = company.budget - prosent - sum;

// //     console.log(`прибыль от компании! ${company.name} ${chistiy_pribl}`);
// // }

// // console.table(total);

// // let car__total = 10000
// // let car__broken = 5052


// // function hello(total, broken) {
// //     let broken__prosent = broken * 100 / total;
// //     return `broken  ${broken__prosent}%;`
// //     }
    
// //     let result = hello(car__total, car__broken);
// //     console.table(result);
// //     console.table(car__total);

// let n = +prompt("число пж")

// let  fibonachi = [0, 1];
// for (let i = 2; i < n; i++) {
//     fibonachi[i] = fibonachi[i - 1] + fibonachi[i - 2]
// }

// for (let j = 0; j < n; j++) {
//   console.log(fibonachi[j]);
// }


// * // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = +prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25

    },

    {

        name: 'Coffee',

        price: 1.5

    },

    {

        name: 'Ice Cream',

        price: 7.85

    },

    {

        name: 'Tomatos',

        price: 4.14

    },

    {

        name: 'Onion',

        price: 2.25

    }

]

let arr_sale = []

// * // 1. Сохранить самый дорогой товар в переменную`max`*

// * // 2. Сохранить самый дешевый товар в переменную`min`*

// * // 3. Сохранить общую цену без скидок в переменную`total`*

// * // 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// * // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// * // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * // * Писать весь код в функции `setup()`*

// * // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    for(let item of arr) {
        max = arr.reduce((a,b) => {
            if (a.price > b.price) {
                return a
            }else {
                return b
            }
    })
        min = arr.reduce((a,b) => {
            if (a.price < b.price) {
                return a
            }else {
                return b
            }
    })
    total = arr.reduce((a,b) => a + b.price, 0)

    totalSale = total - ((total * discount) / 100)

let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].price;
}

let average = sum / arr.length;

console.log(max, min);
console.log(total);
console.log(totalSale);
console.log(average);
}
}

setup()