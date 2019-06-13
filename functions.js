/*
let coffeeOption = ["coffee"]

const drinkOrder = (size, typeOfDrink) => {
    console.log(`order ${size} ${typeOfDrink}`);
}

drinkOrder("small","Americano");
*/

/*
let coffeeOption = ["coffee", "latte", "mocha"]; //global variable
let coffeeSize = ["small", "medium", "large"];
const makeCoffee = (size,type) => {
    console.log(` size coffee is ${size} and type of drink is ${type}`);
}
makeCoffee(coffeeSize[0],coffeeOption[1]); //using arrays declared outside function
makeCoffee(coffeeSize[2],coffeeOption[0]);
*/

/*
const factorial = (n) => {
    if ((n===0) || (n===1)) {
        return 1;
    } else{
        return (n * factorial (n-1));
    }
}
console.log(factorial(33));
*/

/*
let orderCount = 0;
const takeOrder = (topping, orderNum) => {
 console.log(`${orderNum} Pizza with ${topping}`);
 orderCount++;
}
takeOrder("pineapple", orderCount);
takeOrder("mushroom", orderCount);
*/


const pinNumber = 1234;
let availableBalance = 100;

const checkBalance = (requestedAmount)=>{
    availableBalance -= requestedAmount;
    return availableBalance;
}

const takeCashOut = (requestedAmount) => {
    if (availableBalance >= requestedAmount){
        console.log (`You have requested £${requestedAmount}. 
        Here are your funds, £${checkBalance(requestedAmount)} remaining.`);
    }
    else {
        console.log ("You do not have sufficient funds.")
    }
}
const cashMachine = (pinNumberEntered, requestedAmount) => {
    if (pinNumberEntered == pinNumber) {
        takeCashOut(requestedAmount);
    }
    else{
        console.log("Incorrect pin!");
    }
}

cashMachine(1234, 5);
cashMachine(1235, 3);