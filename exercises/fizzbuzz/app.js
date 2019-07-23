const fb ={
    fizz : 0, 
    buzz : 0, 
    fizzbuzz : 0,
}
const array =[]
for(i = 1; i < 101; i++){
    if(((i % 3) === 0) && ((i % 5) === 0)){
        array.push("fizzbuzz");
        fb.fizzbuzz++;
    }else if((i % 3) === 0){
        array.push("fizz");
        fb.fizz++;
    }else if((i % 5) === 0){
        array.push("buzz");
        fb.buzz++;
    }else {array.push(i)}
}
console.log(fb, array)