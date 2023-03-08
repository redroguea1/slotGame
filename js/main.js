/*----- constants -----*/
const SLOT_VALS = [0, 1, 5]

/*----- app's state (variables) -----*/
let money; //object with winnings = balance+amounts won, betAm  
let slots; // an array I am using to track the slots and total their values

/*----- cached element references -----*/
//refers back to yourrTeinnerText elements for things you may be updating often
const s0resultEl = document.getElementById("slot0");
const s1resultEl = document.getElementById("slot1");
const s2resultEl = document.getElementById("slot2");
const bankEl = document.getElementById("bank");
const lastRndEl = document.getElementById("lastRnd");
const betEl = document.getElementById("betDisplay");

//input element can be removed at this time. 
const resetEL = document.querySelector("span"); 


/*----- event listeners -----*/
document.querySelector("bottom").addEventListener("click", handleButton)

//SHOULD/can MY LISTENER FUNCTION call my init function?? 
//document.querySelector("input").addEventListener("input", render)
/*----- functions -----*/
init();


function handleButton(evt) {
    let btnClick = evt.target.innerText 
    if(btnClick === "BET"){ rollSlots(); 
    } else if (btnClick === "RESET" && resetEL.style.visibility === "visible") {
        cashReset();
    } else {changeBet(btnClick);}
}

function changeBet(btnClick) {
    btnClick = parseInt(btnClick)
    //should use the innerText of the button to adjust the betAmount CHECK
    money.betAmount = money.betAmount+btnClick;
    renderResults();
    if (money.betAmount <0) {money.betAmount = 0;}
    if (money.playerBank < money.betAmount) {money.betAmount = money.playerBank;}
    
}

function rollSlots() {
    //should there be a guard right here for the 
    console.log("slots will roll..."); //DELETE 
    money.playerBank -= money.betAmount;
    // quick guard for player account
    // if (money.playerBank <0) {money.playerBank = 0}
    // assign 3 random values to my slot array
    for (let i =0; i< slots.length; i++) {
        console.log("we in the for loop!")
        const rndIdx = Math.floor(Math.random() * SLOT_VALS.length);
        console.log(rndIdx); //DELETE 
        slots[i] = SLOT_VALS[rndIdx];
    }
    
    slotResults();
    //render those values MAYBE we set a delay
    console.log("slots will roll..."); //DELETE 
    //call render()
}

function slotResults() {
    // DELETE... will sum always equal 0?? 
    let sum = null;
    slots.forEach(element => sum+=element);
    // debugger
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
    renderResetBtn();
}


function init() {
    money = {
        //will need to be reset to 0
        winnings: 0,
        betAmount: 0,
        //HERE** grabbing inner text of input and assigning it to the 
        playerBank: 500
        //actual code //window.prompt("please enter bet:")
    }
    slots = [SLOT_VALS[1],SLOT_VALS[0],SLOT_VALS[2]];
    resetEL.style.visibility = "hidden";
    render();
}

function cashReset() {
    alert("we are in the cashReset");
    window.prompt("Here are your winnings!: " + money.playerBank)
    //call init() to reinitialize
    //call render()
}

function renderResetBtn() {
    //toggles reset
    if (resetEL.style.visibility === "visible") {
        resetEL.style.visibility = "hidden";
    } else resetEL.style.visibility = "visible";
}

function render() {
    //CONSOLE LOGS TO BE REMOVED
    // console.log(money);
    // console.log(slots);
    s0resultEl.innerText = slots[0];
    s1resultEl.innerText = slots[1];
    s2resultEl.innerText = slots[2];
    renderResults(); //rendering the slot machine graphics after the player places a bet. 
}

function renderResults() {
    bankEl.innerText = money.playerBank;
    lastRndEl.innerText = money.winnings;
    betEl.innerText = money.betAmount;
}