// challenge one
let password = "password";

if (password.length >= 8) {
    console.log(`${password} is a strong password`);
}
else {
    console.log("The password you've entered is too short. Please try again.");
}

// challenge two
let num = 5;

if (num % 3 === 0 || num % 5 === 0) {
    console.log("This number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible by 3 or 5");
}

// challenge three
let num = 10;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizz buzz");
} 
else if (num % 5 === 0) {
    console.log("buzz");
}
else if (num % 3 === 0) {
    console.log("fizz");
}
else {
    console.log(num);
}

let num = 10;

switch(num) {
    case num % 3 && num % 5 :
        console.log("fizz buzz")
        break;
    case num % 5 === 0:
        console.log("buzz")
        break;
    case num % 3 === 0: 
        console.log("fizz")
}


// challenge four
let num = prompt("Enter your first number");
let check = 0;
let lengthOfNum = num.length;

for (i = 0; i < num.length/2; i++) {
    lengthOfNum--;

if (num.charAt(i) != num.charAt(lengthOfNum)){
    check = 1;
}
console.log(check);
}

if (check == 0) {
    console.log("Yep! That sure is a Palindrome")
}
else{
    console.log("That's not a Palindrome")
}

// challenge five
let time = prompt("Please enter the hour");
let placeOfWork = prompt("Please enter your place of work");
let townOfHome = prompt("Please enter your home town");

switch(time) {
    case 8:
    case 17:
       console.log("I'm commuting!");
       break;
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log(`I'm at ${placeOfWork}`);
        break;
    default:
        console.log(`I'm at home in ${townofHome}. Let me relax!`)
}

let time = prompt("Please enter the hour");
let placeOfWork = prompt("Please enter your place of work");
let townOfHome = prompt("Please enter your home town");

if (time <= 7) {
    console.log(`I'm at home in ${townOfHome}. Let me relax!`);
}
else if (time >= 8 && time < 9) {
    console.log("I'm commuting");
}
else if (time >= 9 && time <= 16) {
    console.log(`I'm at work in ${placeOfWork}. Contact me later`)
}
else {
    console.log(`I'm at home in ${townOfHome}. Let me relax!`); 
}

// challenge six
let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let count = 0;

for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
        count++
    }
    else {
        count;
    }
}

let finalIndex = count
console.log(finalIndex)


// challenge seven
let word = "wooooow"

for (let i = 0; i < word.length; i++) {
    if (word.charAt(0) === word.charAt(str.length -1)) {
        return true;
    }
    else {
        return false;
    }
}

// challenge eight
let num1 = 222;
let num2 = 333;
let sumOf = num1 + num2;

if (sumOf % 2 === 0) {
    console.log(sumOf);
}
else {
    console.log(num1 * num2);
}