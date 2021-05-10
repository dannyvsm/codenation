const sumOfNums = (min, max) => {
    let sums = 0;
    for(let i = min; i < max + 1; i++) {
        sums += i;
}
return sums; 
}

console.log(`Sum of all numbers from 1 to 10 is ${sumOfNums(2, 20)}.`)

let favDrinks = [
    "apple juice",
    "tropical juice",
    "fanta",
    "tango apple"
]

for(let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}