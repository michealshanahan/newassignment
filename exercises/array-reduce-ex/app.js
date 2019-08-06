const total = (arr) => {
   return arr.reduce((a,b) => {
      return a + b;
   })
}
console.log(total([1,2,3])); // 6 

const stringConcat = (arr) => {
   return arr.reduce((a,b) => {
      return a + b.toString()
   })
}

console.log(stringConcat([1,2,3]))

const totalVotes = (arr) => {
   return arr.reduce((a, b) => {
      return a + b.voted
   }, 0) 
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
   return arr.reduce((a, b) => {
      return a + b.price;
   }, 0) 
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005


function flatten(arr) {
   return arr.reduce((a, b) => {
      return a.concat(b)
   })
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];




var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce((a, b) =>{
         if(b.age < 26){
            a.youth ++;
            if(b.voted){
               a.youngVotes ++;
            }
         } else if(b.age < 36){
            a.mids ++;
            if(b.voted){
               a.midVotes ++;
            }
         } else{
            if(b.age){
               a.olds ++;
               if(b.voted){
                  a.oldVotes ++;
               }
         }}
         return a
      },
      {
         youngVotes: 0,
         youth: 0,
         midVotes: 0,
         mids: 0,
         oldVotes: 0,
         olds: 0  
      })
   
      // your code here
   }
   
   console.log(voterResults(voters)); // Returned value shown below:



