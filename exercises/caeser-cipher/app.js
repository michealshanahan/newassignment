var readlineSync = require('readline-sync');
const alph = ["a", "b", "c", "d", "e", "f", "g", 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// console.log(alph.length)
const input = readlineSync.question("What phrase would you like to encrypt? ");
const shift = parseInt(readlineSync.question('How many letters would you like to shift? '));
// console.log( input, shift);
function inputToLowercase(){
    lowerCase = input.toLocaleLowerCase()
    return lowerCase
}
inputToLowercase()
const split = lowerCase.split(''); 

const splitAdd = [];
const alphValue = [];
for(i = 0; i < input.length; i++){
    for (j = 0; j < alph.length; j ++){
        if(split[i] === alph[0]){
            splitAdd.push(0)
        }
        else if(split[i] === alph[j]){
            splitAdd.push(shift + j);

        }

    }
}    
// console.log(splitAdd)
const sliced = [];
for(i = 0; i < splitAdd.length; i++){
    if (splitAdd[i] === 0){

    }
    else{
        const convert = alph[(splitAdd[i])];
    sliced.push(convert)
    }
}
console.log(sliced.join(''));
