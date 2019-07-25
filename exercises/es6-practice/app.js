// let name = "John"
// let age = 101
// const pets = [
//     "cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for (let i = 0; i < pets.length; i++) {
//         const pet = Object.assign({}, pets)
    
//         if (pet[i] === "cat") {
//             pet[i].name: "fluffy" 
//             console.log(pet[i][name])
//         } else {
//             pet.name = "spot"
//         }
        
//     }
//     return petObjects
// }

// console.log(runForLoop())
// console.log(name)

// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables (arr) => {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

const animalArray = [];
function collectAnimals(...animals) {  
    animalArray.push(...animals)
}


collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
console.log(animalArray)