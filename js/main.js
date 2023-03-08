/*----- constants -----*/
const SLOT_VALS = [0, 1, 5]
//above needs to beupdated like in RPS.P3/14min mark to make 



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
const iptEL = document.getElementById("funds");


/*----- event listeners -----*/
//RPS.Part4.3:12minutes DELETE
document.querySelector("bottom").addEventListener("click", handleButton)

//SHOULD MY LISTENER FUNCTION call my init function?? 
document.querySelector("input").addEventListener("input", init)
/*----- functions -----*/
init();

// HERE HERE HERE **** HERE HERE HERE **** 
//updated maybe you need to check your winResults. 
function handleButton(evt) {
    let btnClick = evt.target.innerText 
    if(btnClick === "BET"){ rollSlots(); } 
    else { changeBet(btnClick);}
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
    slots.forEach(element => sum+=element)
    getWinnings(sum)
    render();
}

function getWinnings(sum){
    //if sum == WIN then pay out corresponding amount...
    if (sum === 0) {money.winnings = money.betAmount*100;
    } else if (sum === 3) {money.winnings = money.betAmount*3;
    } else if (sum === 15) {money.winnings = money.betAmount*5;
    } else {money.winnings = 0;}
    //UPDATE WINNINGS HERE
    renderResults()
}
//resets the bet amount. 


function init() {
    money = {
        //will need to be reset to 0
        winnings: 0,
        betAmount: 1,


        //HERE** grabbing inner text of input and assigning it to the 
        playerBank: iptEL.innerText
    }
    slots = [SLOT_VALS[1],SLOT_VALS[0],SLOT_VALS[2]];
    render()
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