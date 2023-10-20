// let companies = [
//     {
//         id: 1,
//         name: 'baxtMen',
//         budget: 200000,
//         tax: 19,
//         expenses: [10000, 2000, 60000]
//     },
//     {
//         id: 2,
//         name: 'nosfrush',
//         budget: 1000,
//         tax: 0,
//         expenses: [50, 100, 10]
//     },
//     {
//         id: 3,
//         name: 'artyomida',
//         budget: 400000,
//         tax: 23,
//         expenses: [5000,14000,3000]
//     },
//     {
//         id: 4,
//         name: 'azizas',
//         budget: 150000,
//         tax: 0,
//         expenses: [5000,6000,4000]
//     },
//     {
//         id: 5,
//         name: 'openBobur',
//         budget: 500,
//         tax: 12,
//         expenses: [10,30,5]
//     },
//     {
//         id: 6,
//         name: 'IS_buildings',
//         budget: 1000000,
//         tax: 21,
//         expenses: [500000, 25000, 10000]
//     },
//     {
//         id: 7,
//         name: 'XOJIK_RADAR',
//         budget: 40000,
//         tax: 12,
//         expenses: [500, 2500, 1000]
//     },
// ]


// // 1. Посчитать общие расходы каждой компании 
// // 2. Показать чистую прибыль каждой компании вычитав расходы и налоги
// let total = [];

// for(let i = 0; i < companies.length; i++) {
//         let company = companies[i];
//         let sum = 0;
// for(let k = 0; k < company.expenses.length; k++) {
//     sum += company.expenses[k];
// }
//     total.push(sum);

//         let prosent = company.budget * company.tax / 100;
//         let chistiy_pribl = company.budget - prosent - sum;

//     console.log(`прибыль от компании! ${company.name} ${chistiy_pribl}`);
// }

// console.table(total);

// let car__total = 10000
// let car__broken = 5052


// function hello(total, broken) {
//     let broken__prosent = broken * 100 / total;
//     return `broken  ${broken__prosent}%;`
//     }
    
//     let result = hello(car__total, car__broken);
//     console.table(result);
//     console.table(car__total);

let n = +prompt("число пж")

let  fibonachi = [0, 1];
for (let i = 2; i < n; i++) {
    fibonachi[i] = fibonachi[i - 1] + fibonachi[i - 2]
}

for (let j = 0; j < n; j++) {
  console.log(fibonachi[j]);
}

//Извините Далер ака я не смог 2 задание и не понял как зделать его