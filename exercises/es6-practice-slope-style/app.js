function collectAnimals(...animals) {  
    const animalArray = [];
    animalArray.push(...animals)
    return animalArray
}


console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 



function combineFruit(fruit, sweets, vegetables){
    combined = {fruit, sweets, vegetables};
    return combined;
}

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];
console.log(combineFruit(fruit, sweets, vegetables))


const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  const {location, duration} = vacation;
  
  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  console.log(parseSentence())

  function returnFirst(items){
    return items[0]; /*change this line to be es6*/
}

animalArray =["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(returnFirst(animalArray))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav = arr[0];
    let secondFav = arr[1];
    let thirdFav = arr[2];
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}

console.log(returnFavorites(favoriteActivities));



function combineAnimals(...array) {
    const newArr = []
    for(i = 0; i < array.length; i++){
        //spread current array into new
        newArr.push(...array[i])
    }
    return newArr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

 
const product =(a, ...b) => {
    numbers = [a, ...b];
    return numbers.reduce((acc, number) => {
        return acc * number;
    }
    )
}
console.log(product(2,3,5,6,7))

function unshift(array, ...a) {  
    return [...a, ...array];
  }

  console.log(unshift(["test"], 3,4,5,4,"five"))



function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        console.log(name)
        return {
            firstName: name[0],
            lastName: name[1]
        }
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]