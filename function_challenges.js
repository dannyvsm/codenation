//challenge one
let orderCount = 0;

const takeOrder = (base, topping) => {console.log(`One ${base} pizza with ${topping} coming right up!`)
orderCount++; console.log(orderCount)}

takeOrder("bbq", "bacon");

//challenge two
let accNum = "40293422"
let balance = "2000"
let accPin = "2839"
let withdrawAmount = "100"

const takeDetails = () => {
    prompt = "Please enter your four digital pin:  "
    checkPin(accPin)
}

console.log(takeDetails)

const checkPin = (accPin) => {
    if (accPin.toString().length === 4) {
        prompt = "Please enter your four digit pin: ";
        amountWithdraw()
    } 
    else {
        console.log("The pin you have entered is incorrect. Please try again");
        takeDetails(accPin)
    }
}

const amountWithdraw = () => {
    prompt = "How much would you like to withdraw?"
    withdraw()
}

const withdraw = (withdrawAmount) => {
    if (balance >= withdrawAmount) {
        console.log(`You are withdrawing ${amountWithdraw} from your account`)
        balance - amountWithdraw;
        console.log(`Your balance is now ${balance}`)
    }
    else {
        console.log("You do not have enough funds in this account to make a withdrawal. Please try again")
        amountWithdraw()
    }
}

takeDetails();

