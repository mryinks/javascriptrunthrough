/*
Write an if statement that checks the ages of
cinema goers, and display the ticket prices:
- Child (below age of 18): £8
- Adult (18+): £10.95
- Senior (60+): £7.50
*/

let myAge = 25;

if(myAge < 18) {
    console.log("That'll be £8 please")
}
else if (myAge > 59) {
    console.log("That'll be £7.50 please")
}
else   {
    console.log("That'll be £10.95 please")
}

