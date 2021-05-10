//basic if statement
if (condition1) {
    //do this
}
else if (condition2) {
    //do this
}
else {
    //if nothing else matched do this
}

//strict equality if
if (1 === "1") {
    console.log(true);
}
else {
    console.log(false);
}

//using and
let myName = "Danny";
let age = 22;

if (myName == "Danny" && age == 22) {
    console.log("Hey whatssss up dude");
}
else {
    console.log("Whos that?");
}

//using swithces
const grade = 62;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}