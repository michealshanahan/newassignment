let chuckFace = [
    "                                    MMMMMMMMMMM                                         ",
    "                                 MMMMMMMMMMMMMMMMM                                      ",
    "                             NMMMMMMMMMMMMMMMMMMMMMMMM                                  ",
    "                           MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                              ",
    "                          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN                          ",
    "                          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                         ",
    "                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                        ",
    "                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMD                       ",
    "                        DMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                       ",
    "                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                       ",
    "                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                       ",
    "                       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      ",
    "                       MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      ",
    "                      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN                     ",
    "                      MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN         ",
    "                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN     ",
    "                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN   ",
    "NM                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  ",
    "MMMMM              MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM ",
    " MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
    "  MMMMMMMMMMMMMMMMMMMMMMMMMM8MMMMMMMMMIMMMMM8,. ...........OMMMMMMMMMMMMMMMMMMMMMMMMMMMM",
    "     MMMMMMMMMMMMMMMMMMMMMMM ..N. .....~MMMM...............:MMMMNMMMMMMMMMMMMMMMMMMMMMMM",
    "       NMMMMMMMMMMMMMMMMMMMMM.....:..DMMMMMNZ Z.... .......M$MMMMMMMMMMMMMMMMMMMMMMMMMMM",
    "           MMMMMMMMMMNMMMMMMM....... 7=MMMMMMO....Z .......MM7MMMMMMMMMMMMMMMMMMMMMMMMM ",
    "              MMMMMMMMMMMMMMMMM  Z...MMMZ .. .,M..,........MMMMMMMMMMMMMMMMMMMMMMMMMMMM ",
    "                  MMMMMM.......DOM ....N7..................MMMMMMMMMMMMMMMMMMMMMMMMMMM  ",
    "                     MMM....... M. ... .  ... ..............M...$MMMMMMMMMMMMMMMMMMMM   ",
    "                       ........... ........~. ..............M..=....+MMMMMMMMMMMMMM     ",
    "                       ......+.NMI~........ . ..............M.,.I...MMMMMMMMMMMMMMN     ",
    "                       ......$... ...... O..................,.....$MMMMMMMMMMMMN        ",
    "                       .....M.......... M M.. .............. 8  .OMMMMMMMMMMMN          ",
    "                        ..=7I,,.,,IMI...M.................. ..MMMMMMMMMMM               ",
    "                        ....DMMMMMMMMMMMMMMMO..............D...MMMMMMMMM                ",
    "                         .MMMMMMMMMMMMMMDDMM:,N..............DMMMMMMMMMMM               ",
    "                         NMMMMMNMM8 . .... ...,~............  MMMMMMMMM                 ",
    "                         MMMMM,:......::~..M8M8MM...............MMMMMM                  ",
    "                         MMMM ... . .........,MM..............MMMMMO$                   ",
    "                         MMMMM... =.=. .. . . MM ....... . ...MMMMMMM                   ",
    "                          NMMMMMMMMMM?  ..O.?NM7 ....... ......MMMMMM                   ",
    "                           NMMMMMMMMMMMMMMMMM........  $ . ...MMMNMMM                   ",
    "                            MMMMMMMMMMMMMMM.........,, ......MMMMMMMM                   ",
    "                             OMMMMMMMM8 , .. .. .,N.... ...:MMMMMMMMMMN                 ",
    "                              MMMMMMMM?N. ...~MD.:MNI8MMMMMMMMMMMMMMMMMN                ",
    "                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN              ",
    "                      NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN             ",
    "                     MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN        ",
    "                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM     ",
    "               MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM    ",
    "              NMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  ",
    "             MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM ",
    "Texas Ranger",]


  console.log(chuckFace)

function Enemy (name, hp, attack, inventory, firstAttack, deathMessage, enemyAlive){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.inventory = inventory;
    this.firstAttack = firstAttack;
    this.deathMessage = deathMessage;
    this.enemyAlive = enemyAlive;
}
const landBaron = new Enemy("Land Baron", 43, 2, [], true, "You easily deafeated the land baron!", true);
const drugSmuggler = new Enemy("Drug Smuggler", 46, 8, ["Bullet"], true, "You defeated the drug smuggler, put and end to his crimes, and took his inventory!", true);
const slime = new Enemy("Slime", 1, 1, [], true, "No way!", true);
const norris = new Enemy("Chuck Norris", 800, 20, ["Life Alert Button", "Senior Citizen Discout Card", "Heart Medication", "A longing for the good-ol days..."], false, `Congratulations, you shot a 79 year old man. You took his stuff and won the game!`, true); 

const enemies = [landBaron, drugSmuggler, slime, norris];

let chuckAlive = true;
const readlineSync = require('readline-sync');
const warriorClass = [{
    type:       "Kung Fu Master",
    hp:         100,
    attack:     30,
    inventory:  []
},{
    type:       "Ranger",
    hp:         55,
    attack:     10,
    inventory : ["Gun"]
}]
const warrior = []
for(i = 0; i < warriorClass.length; i++){
    warrior.push(warriorClass[i].type)
}

function Player(pName, hp, attack, inventory, chicken){
    this.pName = pName;
    this.hp = hp;
    this.attack = attack;
    this.inventory = inventory;
    this.chicken = chicken;
}
const fightChoice = ["Attack", "Shoot", "Run"];

let pName =readlineSync.question("What is your players name?");

console.log(`Welcome ${pName}! You are playing today as ${pName}, Texas Ranger! Get ready for a fight through the state of Texas, with drug smugglers and land barons around every corner.`)
let pClass = readlineSync.keyInSelect(warrior, ` Choose your class!`)
let hp = warriorClass[pClass].hp;
let attack = warriorClass[pClass].attack;
let inventory = warriorClass[pClass].inventory;
let pChoice = ["Walk", "Check Inventory", "Raid Drug Den"];
if (pName === "Walker"){
    attack += 10;
    hp += 10;
    console.log("Welcome Walker! Since you are the King of the roundhouse your kick has been UPGRADED!")
}else if (pName === "uuddlrlrbast"){
    attack += 100;
    hp += 100;
}
const player1 = new Player(pName, hp, attack, inventory, false);
function play(){
    while(player1.inventory.length < 3 && chuckAlive && (player1.hp > 0)){
        let chooseOne = readlineSync.keyInSelect(pChoice, 'What are you going to do?')
        if(chooseOne === 0){
            walk()
        }else if(chooseOne === 1){
            console.log(player1.inventory);
        }else walk();
    }console.log("Game Over")
}
play();

function walk(){
    let chance = Math.floor(Math.random() * 3)
    if (chance === 0){
        encounter()
    }else {
        console.log()
    }
}

function encounter(){
    if(enemies[0].enemyAlive === false && enemies[1].enemyAlive === false){
        let endGuy = (enemies.length - 1);
        console.log("You see Walker Texas Ranger in the woods ahead! He's been a bad guy the whole time!")
        fight(endGuy);
    }else{
        let enemy = Math.floor(Math.random() * (enemies.length - 1));
        if (enemies[enemy].enemyAlive === false){
            encounter()
        }else{
        console.log(`${enemies[enemy].name} approaches!`)
        fight(enemy);
        }
    }
}
function fight(enemy){
    if (enemies[enemy].firstAttack){
        enemyAttack(enemy)
    }else{
        battleMenu(enemy);
        enemies[enemy].firstAttack = true;
    }
}
function enemyAttack(enemy){
    while(enemies[enemy].enemyAlive && player1.hp > 0){
        let hit = attackGenerator(enemies[enemy].attack);
        console.log(`${player1.pName} was hit by ${enemies[enemy].name}. ${player1.pName} took ${hit} damage!`);
        player1.hp -= hit;
        console.log(`You now have ${player1.hp} hp left`);
        battleMenu(enemy);
    }
}
function battleMenu (enemy){
    if(player1.hp > 0){
        let choice = readlineSync.keyInSelect(fightChoice, 'What are you going to do now?')
        if(choice === 0){
            playerAttack(enemy);
        }else if(choice === 1){
            shoot(enemy);
        }else {
            run(enemy);
        console.log("Chicken");
        }
    }
}
function shoot(enemy){
    if(player1.inventory.length > 1){
        console.log(`You shot${enemies[enemy].name}.`)
        enemies[enemy].hp -= 1000;
        enemyDead(enemy);
    }else {
        console.log("You need a Gun and Bullets to shoot");
        skipTurn(enemy);
    }
}
function run(enemy){
    let chance = Math.floor(Math.random() * 2);
    if (chance === 0){
        console.log("You ran away");
        enemies[enemy].hp += 40;
        play();
    }else{
        console.log("You failed to run");
        skipTurn(enemy);
    }
}
function skipTurn(enemy){
    enemyAttack(enemy);
}

function playerAttack(enemy){
    while(enemies[enemy].enemyAlive === true && player1.hp > 0){
        let hit = attackGenerator(player1.attack);
        console.log(`${enemies[enemy].name} was hit by ${player1.pName}. ${enemies[enemy].name} took ${hit} damage!`);
        enemies[enemy].hp -= hit;
        if(enemies[enemy].hp < 50 && enemies[enemy].hp > 0){
            console.log(`${enemies[enemy].name} looks weak.`);
            enemyAttack(enemy)
        }else if(enemies[enemy].hp < 1){
            enemyDead(enemy);
        }else{
            enemyAttack(enemy);
        }
    } 
}

    

function enemyDead(enemy){
    console.log(enemies[enemy].deathMessage);
    player1.inventory = player1.inventory.concat(enemies[enemy].inventory)
    console.log(`Your inventory now includes:${player1.inventory}`) 
    enemies[enemy].enemyAlive = false;
}

function attackGenerator(attackValue) {
    let roll =Math.floor((Math.random() * attackValue));
    return roll;
}
player1.chicken = false;
play();
