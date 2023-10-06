let products = [
    {   
        name: "milk",
        type: "milk",
        price: 16000
    },
    {   
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {   
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {   
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {   
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {   
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {   
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {   
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {   
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {   
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]

// 1. посчитать общую сумму всех товаров
let total__price = products.reduce((a,b) => a + b.price, 0)

console.log(total__price);

// 2. посчитать общую сумму всех товаров конкретной категории
let total = (item) => {
    let filtered = products.filter((product) => product.type === item);
    let summa = filtered.reduce((a, b) => a + b.price, 0);
    return summa;
    }
    
console.log(total("milk"));
console.log(total("meat")); 
console.log(total("alcohol")); 

// 3. посчитать сколько товаров конкретной категории
let milk_2 = 0 
let meat_2 = 0 
let alcohol_2 = 0 

products.map((sort) => {
    if (sort.type === 'milk') {
        milk_2++
    }else if (sort.type === 'meat') {
        meat_2++
    }else if (sort.type === 'alcohol') {
        alcohol_2++
    }
})
console.log(`молочные продукты ${milk_2}`);
console.log(`мясные продукты ${meat_2}`);
console.log(`спирные ${alcohol_2}`);

// 4. найти средний прайс всех товаров
let average_value__price = products.reduce((a,b) => {
    return a + b.price
}, 0)

console.log(average_value__price / products.length);