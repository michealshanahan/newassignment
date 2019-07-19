const readlineSync = require("readline-sync");
const options = ["Put hand in hole", "Find the key", "Open the door"];
function handHole(){
    console.log("A rattlesnake was in the hole and bit you. You died a slow painful death. Would you like to play again?");
    const yn = ["Yes", "No"]
    const ya = readlineSync.keyInSelect(yn, "Play again?")
    if(ya === 0){
        const choice = readlineSync.keyInSelect(options, "What are you going to do?");
        if(choice === 0){
            handHole()
        }else if(choice === 1){
            searchKey()
        }else{
            tryDoor();
        }
    }
}
function searchKey(){
    console.log("You found the key in a rattlesnake nest.");
    const withKey = ["Put Hand in Hole", "Search for Key", "Open the Door"]
    const choice = readlineSync.keyInSelect(withKey, "What are you going to do?");
    if(choice === 0){
        handHole();
    }else if(choice === 1){
        console.log("You have enough keys")
        searchKey();
    }else console.log("You used the key to open the door and escape")
       
}
function tryDoor(){
    console.log("The Door is Locked");
    const choice = readlineSync.keyInSelect(options, "What are you going to do?");
    if (choice === 0){
    handHole();
    } else if(choice ===1 ){
    searchKey();
    } else{tryDoor();
    }
}

const choice = readlineSync.keyInSelect(options, "What are you going to do?");
if (choice === 0){
    handHole();
}else if(choice ===1 ){
    searchKey();
} else{
    tryDoor()
}
