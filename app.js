// Enable Dark Mode 
function changeMode(){
    var Color = document.body.style.backgroundColor !== "black"

    if(Color){
        document.body.style.backgroundColor = "black"
        document.querySelector(".enable_mode").style.borderBottom = "1px solid #fff"
        document.querySelector(".reset").style.border = "1px solid #fff";
        var boxes = document.querySelectorAll(".box")
        boxes.forEach((element) => {
            element.style.borderColor = "#fff"
            element.style.color = "#fff"
        })
    }else{
        document.body.style.backgroundColor = "white"
    }
}

var turn = "X";
function change_turn() {
   return turn === "X" ? "0" : "X"
}


// Select All boxes
function gameLogic() {
    var audio = new Audio("./ting.mp3")
    var boxes = document.querySelectorAll(".box")
   boxes.forEach((element) => {
    element.addEventListener("click" , () => {
        element.innerHTML = turn
        audio.play()
        turn = change_turn()
        winningGame()
    })
   })
}
gameLogic()


function winningGame() {
    var boxes = document.querySelectorAll(".box")
   let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ];
   win.forEach((e) => {
    if(boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[2]].innerText === boxes[e[1]].innerText && boxes[e[0]].innerText !== ""){
        alert(boxes[e[0]].innerText + " Won ")
       }
    });
    }

    function resetGame(){
    var boxes = document.querySelectorAll(".box");
    boxes.forEach((element) => {
        element.innerHTML = ""
    })
    }