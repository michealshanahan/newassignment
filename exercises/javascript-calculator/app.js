var readline = require("readline-sync")

let valueA = readline.question('Please enter your first number ');
let valueB = readline.question('Please enter your second number ');
let operation = ["Add", "Subtract", "Divide", "Multiply"],
index = readline.keyInSelect(operation, "Please enter the operation to perform:")


function calculator(){
    if(isNaN(valueA + valueB)){
        return "please enter only numbers"
    }else if(index === 0){
            return (parseInt(valueA) + parseInt(valueB))
        }else if(index === 1){
            return (valueA - valueB)
        }else if(index === 2){
            return (valueA / valueB)
        }else if (index === 3){
            return (valueA * valueB)
        }else return(`Please only enter numbers between 1 and ${operation.length}`)
}
console.log(calculator())