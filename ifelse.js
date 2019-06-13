/*
if (1 != "1") {
    console.log(true);
} 
else {
    console.log(false);
}
*/

/*
let myAge = 18;

if(myAge > 17) {
    console.log("Yes,I can serve you.")
}
else if (myAge < 18) {
    console.log("Get out of my pub")
}
*/

/*
let myAge = 18;
let country = "UK"
if(myAge > 17 && country == "UK") {
    console.log("Yes,I can serve you.")
}
else if (myAge < 18) {
    console.log("Get out of my pub")
}
*/

/*
let password = ("abcdefgh");
if(password.length <=7) {
    console.log("Password is too short")
}
else {
    console.log("Password accepted - Log On");
}
*/

/*
let num = 11;
if(num % 3 == 0 || num % 5 == 0 ) {
    console.log("This number is dividible by 3 or 5")
}
else {
    console.log("This number is not divisible by 3 or 5")
}
*/

/*
let num = 11;
if(num % 3 == 0 && num % 5 == 0) {
   console.log("fizzbuzz"); 
}
   else if (num % 3 == 0) {
       console.log("fizz");
   }
   else if (num % 5 == 0) {
       console.log("buzz");
   }
   else{
       console.log(num);
   }
*/









let space1 = "X"
let space2 = "X"
let space3 = "X"
let space4 = "O"
let space5 = "O"
let space6 = "O"
let space7 = ""
let space8 = ""
let space9 = ""

console.log("   |     |");
console.log(`${space1}  |  ${space4}  |  ${space7}`);
console.log("   |     |");
console.log("-------------");
console.log("   |     |");
console.log(`${space2}  |  ${space3}  |  ${space8}`);
console.log("   |     |");
console.log("-------------");
console.log("   |     |");
console.log(`${space5}  |  ${space9}   |  ${space9}`);
console.log("   |     |");

if(space1 ==  space4  |  space7){
    console.log ("You Win");
}