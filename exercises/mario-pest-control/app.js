let goomba = document.getElementById("goomba");
let bomb = document.getElementById("bobomb");
let cheep = document.getElementById("cheepCheep");
let fTotal = document.getElementById("fTotal");
let gTotal = document.getElementById("goombaOut");
let bTotal = document.getElementById("bombOut");
let cTotal = document.getElementById("cheepOut");

const goomTotal = () => {
    gTotal.textContent = (goomba.value * 5);
    fTotal.textContent = ((goomba.value * 5) + (bomb.value * 7) + (cheep.value * 11));
}
const bombTotal = () => {
    bTotal.textContent = (bomb.value * 7);
    fTotal.textContent = ((goomba.value * 5) + (bomb.value * 7) + (cheep.value * 11));
}
const cheepTotal = () => {
    cTotal.textContent = (cheep.value * 11);
    fTotal.textContent = ((goomba.value * 5) + (bomb.value * 7) + (cheep.value * 11));
}

    
goomba.addEventListener("input", goomTotal);
bomb.addEventListener("input", bombTotal);
cheep.addEventListener("input", cheepTotal);