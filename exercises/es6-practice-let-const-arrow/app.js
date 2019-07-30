let name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

const runForLoop = () => {
    for (let i = 0; i < pets.length; i++) {
        if(pets[i] === "cat"){
           petObjects.push({"type": "cat", "name": "fluffy"});

        }else{
            petObjects.push({"type": "dog", "name": "spot"});
        }
    }
}
runForLoop();
console.log(petObjects);

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter((person) => {
        return person.friendly
    })
}
console.log(filterForFriendly(people))


const doMathSum = (a, b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}

console.log(doMathSum(5, 8));
console.log(produceProduct(4, 9))

const printString = (firstName, lastName, age) => {
    console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
};
printString("Jane", "Doe", "40");

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = animals.filter(animal => animal.type === "dog") 

 console.log(filterForDogs)

 const welcomeMessage = (name, location) => {
     return `Hi ${name}! 
     Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything. `
 }

 console.log(welcomeMessage("Janice", "Hawaii"))
 