let topping = "peppers";

switch(topping) {
    case "bacon":
    case "chicken":
    case "extra cheese":
        console.log("These are important ingredients for my pizza");
        break;
    case "sausage":
    case "peppers":
    case "sweetcorn":
        console.log(`I don't mind having ${topping} on my pizza`);
        break;
    case "mushrooms":
    case "pineapple":
        console.log(`${topping} should not be on a pizza`);
        break;
} 