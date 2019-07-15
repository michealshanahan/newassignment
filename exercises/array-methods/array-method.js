var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

fruit.shift()
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log(fruit.indexOf("orange"))

fruit.push(1)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log(vegetables.length)
vegetables.push(3)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
const food = fruit.concat(vegetables) 
console.log("food ", food)
food.splice(4, 2)
console.log(food)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
food.reverse()
console.log(food)
function foodFunction(){
    return food.join()
}
console.log(foodFunction())