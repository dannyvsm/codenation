function cashMachine(num, accNum){
  return `You are withdrawing £${num} from account number ${accNum}`;
}

console.log(cashMachine(40, 239037))

let myName = "Danny";
let age = 22;
let colour = "yellow";
let sentence = `Hey there! My name is ${myName}, I'm ${age} years old and my favourite colour is ${colour}!`;

console.log(sentence);

function dailyFood(breakfast, lunch, tea) {
  return `For breakfast I had an ${breakfast}, then later had ${lunch} for lunch. Finally, for tea I had ${tea}.`;
}

console.log(dailyFood("omelette", "ramen", "pizza")); 

let birthDate = new Date("06/11/1998");

let todaysDate = new Date ("05/04/2021");

let differenceInTime = todaysDate.getTime() - birthDate.getTime();

let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

let timeBetween = `The total number of days between ${birthDate} and ${todaysDate} is ${differenceInDays}!`

console.log(timeBetween)

let space1 = "   " + "|  " + " | \n";
let space2 = " x " + "| o " + "| \n";
let space3 = "   " + "|  " + " | \n";
let line1 = "-----------\n";
let space4 = "   " + "|  " + " | \n"; 
let space5 = " x " + "| x " + "| \n";
let space6 = "   " + "|  " + " | \n"; 
let line2 = "----------- \n";
let space7 = "   " + "|  " + " | \n"; 
let space8 = " o " + "|  " + " | \n"; 
let space9 = "   " + "|  " + " | \n"; 

let board = `${space1}${space2}${space3}${line1}${space4}${space5}${space6}${line2}${space7}${space8}${space9}`

console.log(board);

let num1 = parseInt(prompt(""))
let num2 = parseInt(prompt(""))

//add 
let add = num1 += num2;

//subtract
let subtract = num1 -= num2;

//times
let times = num1 *= num2;

//divide
let divide = num1 /= num2;

//remainder
let remainder = num1 / num2 % 10;

console.log(add)
console.log(subtract)
console.log(times)
console.log(divide)
console.log(remainder)