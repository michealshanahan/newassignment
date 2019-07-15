function caps(string1){
   return string1.toUpperCase()
}
console.log(caps("tryit"))

function lowerCase(string1){
    return string1.toLowerCase() +
    string1.toUpperCase()
}
console.log(lowerCase("THIS IS MY TEXT"))

function halfString(string){
    return Math.floor(string.length / 2)
}
console.log(halfString("hello world"))

function sliceHalf(string){
    return (string.slice(0, ((Math.floor (string.length / 2)))))
}
console.log(sliceHalf("Hello"))

function halfCaps(string){
    return string.slice(0, ((Math.floor (string.length / 2)))).toUpperCase() +
    string.slice(Math.floor(string.length / 2 )).toLowerCase()
}
console.log(halfCaps("test this thing ouR"))


function capFirstLetter(string){
   let splitString = string.split(" ") 
   for(i = 0; i < splitString.length; i++){
       splitString[i] = (splitString[i][0].toUpperCase()) + splitString[i].substring(1) 
       splitString.join(" ");
       console.log (splitString)
   }
}
capFirstLetter("j t o hn hjhlj jh jl")
   
console.log(capFirstLetter("this is a test for caps a a a"))

console.log(capFirstLetter("what is the difference we W"))