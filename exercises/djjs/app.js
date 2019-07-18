let boxId = document.getElementById("color");

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