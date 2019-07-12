
for(i = 0; i < 10; i++){
    console.log(i)
}
for(i = 9; i >= 0; i--){
    console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi"]
for(i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
const newArray=[]
for(i = 0; i < 10; i++){
    newArray.push(i)
}
console.log(newArray)
for(i = 0; i < 101; i+=2){
    console.log(i)
}
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(i = 0; i < fruit.length; i += 2){
    console.log(fruit[i])
}
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  for(i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
  }
  for(i = 0; i < peopleArray.length; i++){
  }
  const names=[], occupations=[]
  for(i = 0; i < peopleArray.length; i++){
      names.push(peopleArray[i].name)
      occupations.push(peopleArray[i].occupation)
  }
  console.log(names, occupations)
  const newNames = [], newOccupations = [];
  for(i = 0; i < peopleArray.length; i++){
      if(i % 2 === 0){
          newNames.push(peopleArray[i].name)
      }else( newOccupations.push(peopleArray[i].occupation))
  }
  console.log(newNames, newOccupations)
const gridArray = [], arrayArray =[];
  for(i = 0; i < 3; i ++){
      gridArray.push(i) 
      arrayArray.push(gridArray)  
    }
  
  console.log(arrayArray)