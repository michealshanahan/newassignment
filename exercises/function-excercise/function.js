function addFunction (a, b){
    console.log(a + b)
}
addFunction(4, 56)

function largestNumber(a, b, c){
   console.log(Math.max(a, b, c))
}
largestNumber(66, 8, 9)
function oddEven(a){
    if ( a % 2 === 0){
        console.log("even")
    }else{console.log("odd")}
}
oddEven(4)

function stringHalf(string){
    if ( string.length > 20){
        return string.slice(0, (string.length / 2))
    }else{
        return string + string
    }
}
console.log(stringHalf("first lkjadsfjkldsfajkldafsjkadfs last"))

let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
let sumOfFibs = 0
function fibs(n){
        for(i = 0; i < n; i++){
        sumOfFibs += fibonacci[i]}
        return sumOfFibs
}

console.log(fibs(1))

// quadratic eqauation ax2+bx+c=0 bsq-4ac
// will show if lines do not intersect
function quadraticEquation(a, b, c){
   let plusMinus = Math.sqrt((b * b) - (4 * a * c));
   let intersectPoint = [((- b + plusMinus) / (2 * a)), (((-b - plusMinus) / (2 * a)))];
   if( isNaN(intersectPoint[0])){
       return "No Intersect Point";    
   } else return intersectPoint;
}
console.log(quadraticEquation( 8, 67, 15))


let charString = "this the", charCount = [];
let characterArray = {};
 for( i = 0; i < charString.length; i++){
     char = charString.charAt(i)
     count = characterArray[char]
     characterArray[char] = count ? count + 1: 1
 }
 for( i = 0; i < characterArray.length; i++){
    
 }       
 let highestCount = Math.ceil(characterArray[i])
 console.log(highestCount)
