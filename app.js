const boxes = Array.from(document.getElementsByClassName("boxes"));
const btn = Array.from(document.getElementsByClassName("btn"));
const gameOverDiv = document.getElementsByClassName("gameOverDiv")[0];
const restartBtn = document.getElementById("restart");
let resultArea = document.getElementById("result")
let iconX = '<i class="fa-sharp fa-solid fa-xmark" style="opacity: 1;"></i>';
let iconO = '<i class="fa-sharp fa-solid fa-o" style="opacity: 1;"></i>';
let box1 = boxes[0];
let box2 = boxes[1];
let box3 = boxes[2];
let box4 = boxes[3];
let box5 = boxes[4];
let box6 = boxes[5];
let box7 = boxes[6];
let box8 = boxes[7];
let box9 = boxes[8];

let boxStatus = {
    box1: 'empty',
    box2: 'empty',
    box3: 'empty',
    box4: 'empty',
    box5: 'empty',
    box6: 'empty',
    box7: 'empty',
    box8: 'empty',
    box9: 'empty',

}

let player = {
    player1: false,
    player2: false
};
let Player1Choice;
let Player2Choice;
let player1Status;
let player2Status;

btn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.style.display = 'none';
        boxes[0].parentElement.style.display = "flex";
        if (btn.innerHTML == `<i class="fa-sharp fa-solid fa-xmark"></i>`) {
            Player1Choice = "x";
            Player2Choice = "o";

        }
        else {
            Player1Choice = "o";
            Player2Choice = "x";

        }
        player.player1 = true;
        console.log(Player1Choice, Player2Choice);
    });
});
boxes.forEach((box, index) => {
    let hover = () => {
        if (player.player1) {
            if (Player1Choice == "x") box.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
            else box.innerHTML = `<i class="fa-sharp fa-solid fa-o"></i>`;
        }
        else {
            if (Player2Choice == "x") box.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
            else box.innerHTML = `<i class="fa-sharp fa-solid fa-o"></i>`;

        }
    };
    let unhover = () => {
        box.innerHTML = ``
    };
    box.addEventListener("mouseenter", hover);
    box.addEventListener("mouseleave", unhover);
    box.addEventListener('click', () => {
        let boxLocation = `box${index + 1}`
        if (boxStatus[boxLocation] == 'empty') {

            box.removeEventListener("mouseenter", hover);
            box.removeEventListener("mouseleave", unhover);
            box.firstChild.style.opacity = "1";
            if (player.player1) player.player1 = false
            else if (!player.player1) player.player1 = true;
            if (player.player2) player.player2 = false
            else if (!player.player2) player.player2 = true;

            boxStatus[boxLocation] = 'filled';
            // console.log(boxStatus);

            // check for result 
            if (boxStatus.box1 == 'filled' && boxStatus.box2 == 'filled' && boxStatus.box3 == 'filled') {
                if (box1.innerHTML == iconX && box2.innerHTML == iconX && box3.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box1.innerHTML == iconO && box2.innerHTML == iconO && box3.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
                // console.log(box1.innerHTML,box2.innerHTML,box3.innerHTML)
            }
            if (boxStatus.box1 == 'filled' && boxStatus.box5 == 'filled' && boxStatus.box9 == 'filled') {
                if (box1.innerHTML == iconX && box5.innerHTML == iconX && box9.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box1.innerHTML == iconO && box5.innerHTML == iconO && box9.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            }

            if (boxStatus.box3 == 'filled' && boxStatus.box5 == 'filled' && boxStatus.box7 == 'filled') {
                if (box3.innerHTML == iconX && box5.innerHTML == iconX && box7.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box3.innerHTML == iconO && box5.innerHTML == iconO && box7.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            }
            if (boxStatus.box4 == 'filled' && boxStatus.box5 == 'filled' && boxStatus.box6 == 'filled') {
                if (box4.innerHTML == iconX && box5.innerHTML == iconX && box6.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box4.innerHTML == iconO && box5.innerHTML == iconO && box6.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            }
            if (boxStatus.box7 == 'filled' && boxStatus.box8 == 'filled' && boxStatus.box9 == 'filled') {
                if (box7.innerHTML == iconX && box8.innerHTML == iconX && box9.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box7.innerHTML == iconO && box8.innerHTML == iconO && box9.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            }

            //  vertical checking 
            if (boxStatus.box1 == 'filled' && boxStatus.box4 == 'filled' && boxStatus.box7 == 'filled') {
                if (box1.innerHTML == iconX && box4.innerHTML == iconX && box7.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box1.innerHTML == iconO && box4.innerHTML == iconO && box7.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            } if (boxStatus.box2 == 'filled' && boxStatus.box5 == 'filled' && boxStatus.box8 == 'filled') {
                if (box2.innerHTML == iconX && box5.innerHTML == iconX && box8.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box2.innerHTML == iconO && box5.innerHTML == iconO && box8.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            } if (boxStatus.box3 == 'filled' && boxStatus.box6 == 'filled' && boxStatus.box9 == 'filled') {
                if (box3.innerHTML == iconX && box6.innerHTML == iconX && box9.innerHTML == iconX) {
                    console.log("x won");
                    if(Player1Choice == "x") player1Status = 'won'
                    else player2Status = "won";
                }
                else if (box3.innerHTML == iconO && box6.innerHTML == iconO && box9.innerHTML == iconO) {
                    console.log("o won")
                    if(Player1Choice == "o") player1Status = 'won'
                    else player2Status = "won";
                }
            }

            if(player1Status == "won"){
                // alert('player1won')
                
                gameOverDiv.style.display = 'flex';
                resultArea.textContent = "Player 1 Won"
            }else if(player2Status == "won"){
                // alert("player2won");
                gameOverDiv.style.display = 'flex'
                resultArea.textContent ="Player 2 Won"
            }
            else if(player1Status != 'won' && player2Status != 'won' && boxStatus.box1 =='filled'&& boxStatus.box2 =='filled'&& boxStatus.box3 =='filled'&& boxStatus.box4 =='filled'&& boxStatus.box5 =='filled'&& boxStatus.box6 =='filled'&& boxStatus.box7=='filled'&& boxStatus.box8 =='filled'&& boxStatus.box9 =='filled') {
                gameOverDiv.style.display = 'flex';
                resultArea.textContent = "Draw!!"

            }
        }
    })
});

restartBtn.addEventListener("click",()=>{
    location.reload()
})