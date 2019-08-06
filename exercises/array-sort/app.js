const arr = [1, 3, 5, 2, 90, 20];
const stringsArray = ["dog", "wolf", "by", "family", "eaten"]
const newArray = arr.sort((a,b) => {
    return a - b;
})
  console.log(newArray)
  

const xArray = arr.sort((a, b) => {
    return b - a;
})

console.log(xArray)

const arrayShort = stringsArray.sort((a,b) => {
    return a.length - b.length;
}) 

console.log(arrayShort)

const alph = stringsArray.sort()
console.log(alph)
 
const byAge = (array) => {
    const x = array.sort((a, b) => {
        return (a.age - b.age);
    })
    return x;
}
console.log(byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]));