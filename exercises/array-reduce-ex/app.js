const total = (arr) => {
   const x = arr.reduce((a, b) => {
        return a + b;
    }) 
    return x
 }
 
 console.log(total([1,2,3]));

 function stringConcat(arr) {
    return arr.reduce((a, b) => {
        console.log(a, b)
    })
 }
 
 console.log(stringConcat([1,2,3])); // "123"