//challenge one
let favFilms = [
    "Portrait of a Lady on Fire",
    "Sunset Boulevard",
    "Mulholland Drive",
    "Vertigo",
    "The Truman Show"
]

favFilms.push("Ex Machina", "Airplane")

for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}

//challenge two
for(let i = 0; i < 6; i++){
    console.log(Math.round(Math.random() * 49 + 1));
}

//challenge three
for(let i = 9; i > -1; i--){
    console.log(i);
}

//challenge four
let filmArr = [
    "Scooby Doo 2",
    "My Cousin Vinny",
    "Bill & Ted's Excellent Adventure",
    "Ghostbusters"
]

for(let i = 0; i < filmArr.length; i++) {
    console.log(filmArr[i])
}

const filmCheck = (filmArr) => {
    if (filmArr[2] === "Ghostbusters") {
        console.log("Yay! Ghostbusters");
    }
    else {
        console.log("Booo, we want Ghostbusters!")
    }
}

filmCheck(filmArr)

//challenge five
for(let i = 0; i < 6; i++){
    let ourNum = (Math.round(Math.random() * 29 + 1));
    if(ourNum % 7 === 0) {
        console.log(`${ourNum} is divisible by 7`)
    }
    else {
        console.log(`${ourNum} is not divisible by 7`)
    }
}

//challenge six

/*for loop
pros
- good for iterating through potentially large sets of data in a short time
- less code for doing the same thing (iterating through data)
- can combine with an if statement to check the code matches your condition and do something
- very nice

*/
for (let i = 0; i < str.length; i++) {
    console.log("you're iterating through this loop till you reach your condition. cool!")
}

/* while loops
pros
- great for execution of code for a specified amount of time
- simple to use for meeting

cons
- can be easy to get stuck in an infinite loop
*/

while (i < num) {
    console.log("i'm going to run until the condition is no longer true")
}

/* do while 
pros 
- executes the code whilst the condition is true 
- always executes code at least once 

cons
-  easy to get stuck in a loop
- if you forget to increase the variable, the loop will never end
- would you not just need a while loop? 
*/

do {
    console.log("execute this code please")
}

while (i < num) {

}

//challenge 7
const number = parseInt(prompt("Enter a positive number please"));

if (number === 1) {
    console.log("1 is not a prime number")
}
else if (number > 1){
    for (let i = 0; i < number; i++) {
        if (number % 2 == 0) {
            console.log(`${number} is not a prime number`);
        }
        else {
            console.log(`${number} is a prime number`)
        }
    }
}
else {
    console.log("Enter a valid, positive number")
}