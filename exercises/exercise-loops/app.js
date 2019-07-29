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
        }
    } return "Character not Found"

}
console.log(charMatch("this Is my test strIng", "i"))

function findNum(arrayNum, num42){
    for(i = 0; i < arrayNum.length; i++){
        if (arrayNum[i] === num42){
            return `${num42} found`
        }
    }return `${num42} not found`
}

console.log(findNum([3, 4, 2, 42], 42))

function lowestnum(arrayUnsorted){
    let sorted = arrayUnsorted.sort(function(a, b){
        return a - b
    })
    return sorted[0]
}
console.log(lowestnum([10, 9, 8, 4, 3, 2, 2, 3, 4, -4]))

