var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray =alphabet.split('');
const parSpace = ': '
for(i = 0; i < people.length; i++){
    const newArray = [];
    for(j = 0; j < alphabetArray.length; j++){
        newArray.push(alphabetArray[j])
    }
    console.log(people[i].concat(parSpace, newArray))
}