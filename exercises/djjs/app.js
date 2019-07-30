let boxId = document.getElementById("color");
document.addEventListener("keydown", (e) => {
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
boxId.addEventListener("mouseleave", () => { boxId.className = "window";
})
window.addEventListener("scroll", () => { boxId.className = "window";
})
clickHold = boxId.addEventListener("mousedown", () => { boxId.className = "redClick";
})
upClick = boxId.addEventListener("mouseup", () => { boxId.className = "upYellow";
})
doubleClick = boxId.addEventListener("dblclick", () => { boxId.className = "greenDouble";
})
mouseOver = boxId.addEventListener("mouseover", () => { boxId.className = "blueHover";
})