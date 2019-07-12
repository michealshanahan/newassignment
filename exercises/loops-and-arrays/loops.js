var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var numberOfComputers = 0;
for(i=0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        numberOfComputers++;
    }
}
console.log(numberOfComputers);


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for(j=0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[j].age <= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough to go.")
    }else{
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough to go!")
    }
}
//  duplicate for second bonus
for(j=0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[j].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough to go. Don't let her in")
    }else if(peopleWhoWantToSeeMadMaxFuryRoad[j].age < 18)
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough to go! Don't let him in")
    else if(peopleWhoWantToSeeMadMaxFuryRoad[j].gender === "male"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough to go. Let him in!")
    }else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough to go. Let her in!!")
    }
}
// optional Bonus
const myArray = [2, 3,2]
reduce (myArray)
