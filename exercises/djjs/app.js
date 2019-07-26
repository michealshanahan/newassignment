let boxId = document.getElementById("color");
document.addEventListener("keydown", function(e){
    let x = event.keyCode
    if(x === 66){
        boxId.className = "blueHover";   
    }else if(x === 89){
        boxId.classList = "upYellow";
    }else if(x === 82){
        boxId.classList = "redClick";
    }else if(x === 71){
        boxId.classList = "greenDouble";
    }else if(x === 79){
        boxId.classList = "window"
    }
    else{console.log(x)}
})
boxId.addEventListener("mouseleave", function(){
    boxId.className = "window";
})
window.addEventListener("scroll", function(){
    boxId.className = "window";
})
clickHold = boxId.addEventListener("mousedown", function(){
    boxId.className = "redClick";
})
upClick = boxId.addEventListener("mouseup", function(){
    boxId.className = "upYellow";
})
doubleClick = boxId.addEventListener("dblclick", function(){
    boxId.className = "greenDouble";
})
mouseOver = boxId.addEventListener("mouseover", function(){
    boxId.className = "blueHover";
})