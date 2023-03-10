/*----- constants -----*/
const SLOT_VALS = [0, 1, 5]

/*----- app's state (variables) -----*/
let money; //object with winnings = balance+amounts won, betAm  
let slots; // an array I am using to track the slots and total their values
let btnClick;

/*----- cached element references -----*/
const s0resultEl = document.getElementById("slot0");
const s1resultEl = document.getElementById("slot1");
const s2resultEl = document.getElementById("slot2");
const bankEl = document.getElementById("bank");
const lastRndEl = document.getElementById("lastRnd");
const betEl = document.getElementById("betDisplay");
const resetEL = document.querySelector("span"); 

/*----- event listeners -----*/
document.querySelector("bottom").addEventListener("click", handleButton)
document.querySelector("span").addEventListener("click", handleButton)

/*----- functions -----*/
init();

function handleButton(evt) {
    btnClick = evt.target.innerText 
    if(btnClick === "BET"){ betPress();
    } else if (btnClick === "RESET" && resetEL.style.visibility === "visible") {
        cashReset();
    } else {changeBet(btnClick);}
    renderBet();
}

function betPress() {
    if(btnClick === "BET" && money.betAmount > 0){ 
        rollSlots(); 
    } else if (btnCLick === "BET" && money.betAmount <= 0){
        btnClick = null;
        money.betAmount=0;
    }
}

function changeBet(btnClick) {
    btnClick = parseInt(btnClick)
    //should use the innerText of the button to adjust the betAmount CHECK
    money.betAmount = money.betAmount+btnClick;
    if (money.playerBank <=0) {
        cashReset();
    } else if (money.betAmount <0 && btnClick <0) {
        btnClick = 0;
        money.betAmount = 0;
    } else if (money.playerBank < money.betAmount) {money.betAmount = money.playerBank;}
}

function rollSlots() {
    money.playerBank -= money.betAmount;
    // quick guard for player account
    if (money.playerBank <0) {money.playerBank = 0}
    // assign 3 random values to my slot array
    for (let i =0; i< slots.length; i++) {
        const rndIdx = Math.floor(Math.random() * SLOT_VALS.length);
        slots[i] = SLOT_VALS[rndIdx];
    }
    slotResults();
    //call render()
}

function slotResults() {
    let sum = null;
    slots.forEach(element => sum+=element);
    getWinnings(sum);
    render();
}

function getWinnings(sum){
    //if sum == WIN then pay out corresponding amount...
    if (sum === 0) {money.winnings = money.betAmount*100;
    } else if (sum === 3) {money.winnings = money.betAmount*3;
    } else if (sum === 15) {money.winnings = money.betAmount*5;
    } else {money.winnings = 0;}
    money.playerBank += money.winnings;
    renderResults();
    if (resetEL.style.visibility !== "visible") {renderResetBtn()};
}


function init() {
    money = {
        winnings: 0,
        betAmount: 0,
        //you can modify the code here to change the game to be preloaded or not. 
        playerBank: 1000,
        //window.prompt("Welcome, insert funds to start....")
    }
    slots = [SLOT_VALS[1],SLOT_VALS[0],SLOT_VALS[2]];
    resetEL.style.visibility = "hidden";
    btnClick = 0;
    render();
}

function cashReset() {
    slots = ["C", "Y", "A"];
    money.winnings = money.playerBank;
    money.playerBank = 0;
    render();
    setTimeout(() => {
        init();
    }, 8000);

}


function renderResetBtn() {
    //toggles reset
    if (resetEL.style.visibility === "visible") {
        resetEL.style.visibility = "hidden";
    } else resetEL.style.visibility = "visible";
}

function render() {
    s0resultEl.innerText = slots[0];
    s1resultEl.innerText = slots[1];
    s2resultEl.innerText = slots[2];
    renderBet();
    renderResults(); //rendering the slot machine graphics after the player places a bet. 
}

function renderBet() {
    betEl.innerText = money.betAmount;
}

function renderResults() {
    bankEl.innerText = money.playerBank;
    lastRndEl.innerText = money.winnings;
}