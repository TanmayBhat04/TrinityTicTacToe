let boxes = document.querySelectorAll(".box");
let box1 = document.querySelectorAll(".box1");
let box2 = document.querySelectorAll(".box2");
let box3 = document.querySelectorAll(".box3");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
        box1.disabled=false;
        box2.disabled=false;
        box3.disabled=false;
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    let val=e.target.classList[1];
    let boxn;
    if(val==="box1"){
        boxn=box1;
    }
    else if(val==="box2"){
        boxn=box2;
    }
    else boxn=box3;
    box.innerText = "X";
    box.disabled = true;
    check(boxn);
  });
});

const showWinner = () => {
    let cnt=0;
    let winner;
    boxes.forEach((box) => {
        if(box.innerHTML!="") cnt++;
    })
    if(cnt%2==0) winner=1;
    else winner=2;
  msg.innerText = `Congratulations, Winner is PLAYER ${winner}!`;
  msgContainer.classList.remove("hide");
};

const check = (boxn) => {
  for (let pattern of winPatterns) {
    let pos1Val = boxn[pattern[0]].innerText;
    let pos2Val = boxn[pattern[1]].innerText;
    let pos3Val = boxn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        boxn.forEach((box) => {
            box.disabled = true;
        });

        boxn.disabled=true;
        if(box1.disabled && box2.disabled && box3.disabled) showWinner();
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);