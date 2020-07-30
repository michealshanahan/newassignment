let arrayOf = [1, 2, 11, 44, 111, 0, -12]

console.log("array")

const arrayFunction = (array)=>{
    let greatestValue = Math.max(...array)
    let newArray = []
    array.forEach(element => {
        let newValue = element + greatestValue
        newArray.push(newValue)
    })
    return newArray
}

console.log(arrayFunction(arrayOf))
