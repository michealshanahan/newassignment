let add1 = document.getElementById("firstAdd");
let add2 = document.getElementById("secondAdd");
let sum = document.getElementById("addOut");
let sub1 = document.getElementById("firstSubtract");
let sub2 = document.getElementById("secondSubtract");
let difference = document.getElementById("subtractOut");
let times1 = document.getElementById("firstMultiply");
let times2 = document.getElementById("secondMultiply");
let product = document.getElementById("multiplyOut");
let addCalc = document.getElementById("addCalc");
let redd = document.getElementById("redd");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");

function addition(number1, number2) {
    console.log('in addition')
    let x = (parseInt(number1.value)) + parseInt((number2.value));
    sum.innerHTML = `Sum: ${x}`; 
}
const subtraction = (sb1, sb2) => {
    let x = (sb1.value - sb2.value);
    difference.innerHTML = `Difference: ${x}`
}
const multi = (times1, times2) => {
    let x =(times1.value * times2.value);
    product.innerHTML = `Product: ${x}`
}

redd.addEventListener("click", function (){
    addition(add1, add2)
})
subtract.addEventListener("click", function (){
    subtraction(sub1, sub2)
})
multiply.addEventListener("click", function (){
    multi(times1, times2)
})
