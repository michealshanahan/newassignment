let newArray = [];
let newString = "This is my string"
for(i = 0; i < newString.length; i++){
    newArray.push(newString[i])
}
console.log(newArray)


function charMatch(testString, char){
    for(i = 0; i <testString.length; i++){
    let upperCase = testString.toUpperCase();
    let charUpper = char.toUpperCase();
    if(upperCase[i] === charUpper){
        return upperCase.indexOf(charUpper)
    }}   
}
console.log(charMatch("this Is my test strIng", "i"))