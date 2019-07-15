if(5 > 3){
    console.log("is greater than")
}
var cat = "cat"
if(cat.length === 3){
    console.log("is the length")
}
var dog = "dog"
if(dog === cat){
    console.log("crazy")
}else{
    console.log("not the same")
}
var person = {
    name: "Bobby",
    age: 12,
}
if(person.age >= 18){
    console.log("is allowed to go to the movie")
}else if(person.name.charAt(0) == "B"){
    console.log("Bees are allowed to go to the movie")
}
else{
    console.log("is not allowed to go to the movie")
}
// bronze medal, for 18 and name starts with b
if(((person.age >= 18) === true) && (person.name.charAt(0) === "B") === true) {
    console.log("is allowed to go to the movie")
}
else{
    console.log("is not allowed to go to the movie")
}
// Siler Medal
if(1 === "1"){
    console.log("strict")
}else if(1 == "1"){
    console.log("loose")
}else{
    console.log("not equal at all")
}
if(1 <= 2 && 2 === 4){
    console.log("yes")
// }else{
    // console.log("proof")
}
// gold medal
if(typeof dog === "string"){
    console.log("dog is string")
}
var trueVar = "true"
if(typeof trueVar === "boolean"){
    console.log ("test")
}else{
    console.log("failed")
}
if (typeof varName !== "undefined"){
    console.log("var exists")
}else{
    console.log("var does not exist")
}
// var s can be changed. "13" returns greater than, as well as 13
var s= "s"
if (s > 12){
    console.log("s is greater than 12")
}else {
    console.log("how does that make sense")
}
// test tnis by changing variable myNumber
var myNumber= 2
if (myNumber % 2 === 0){
    console.log("even")
}else if(myNumber % 2 === 1){
    console.log(myNumber + " is odd")
}else{
    console.log("not a number sucka")
}