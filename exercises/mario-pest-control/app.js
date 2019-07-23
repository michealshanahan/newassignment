let goomba = document.getElementById("goomba");
let bomb = document.getElementById("bobomb");
let cheep = document.getElementById("cheepCheep");
let fTotal = document.getElementById("fTotal");
let gTotal = document.getElementById("goombaOut");
let bTotal = document.getElementById("bombOut");
let cTotal = document.getElementById("cheepOut");

function goomTotal(){
    gTotal.innerHTML = (goomba.value * 5);
    fTotal.innerHTML = ((goomba.value * 5) + (bomb.value * 7) + (cheep.value * 11));
}
function bombTotal(){
    bTotal.innerHTML = (bomb.value * 7);
    fTotal.innerHTML = ((goomba.value * 5) + (bomb.value * 7) + (cheep.value * 11));
}
function cheepTotal(){
    cTotal.innerHTML = (cheep.value * 11);
    fTotal.innerHTML = ((goomba.value * 5) + (bomb.value * 7) + (cheep.value * 11));
}

    
goomba.addEventListener("input", goomTotal);
bomb.addEventListener("input", bombTotal);
cheep.addEventListener("input", cheepTotal);