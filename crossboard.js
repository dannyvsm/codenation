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

let newBoard = board.split()

console.log(board);

console.log(newBoard)
