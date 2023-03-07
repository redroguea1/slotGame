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
const betEl = document.getElementById("bet");


/*----- event listeners -----*/
//RPS.Part4.3:12minutes DELETE
document.querySelector("bottom").addEventListener("click", handleButton)
/*----- functions -----*/
init();


function handleButton(evt) {
    //not getting the property inside the button... 
    console.log(evt.innerHTML)
    //2 guards from missing the buttons and from Betting/Starting the game
    if(evt.Target !== "BUTTON") return;
    if(evt.Target.innerText == "BET") {
        console.log("check")
        rollSlots();
    } else changeBet(evt); 
}

function changeBet(evt) {
    let betChange = evt.innerText;
    console.log("we made it" + betChange);
    //should use the innerText of the button to adjust the betAmount CHECK
    money.betAmount += betChange;
    if (money.betAmount <0) {money.betAmount = 0;}
    render();
}

function rollSlots() {
    //should there be a guard right here for the 
    money.playerBank = money.playerBank-money.betAmount
    //quick guard for player account
    if (money.playerBank <0) {money.playerBank = 0}
    //assign 3 random values to my slot array
    slots.forEach(element => {
        const rndIdx = Math.floor(Math.random() * SLOT_VALS.length);
        element = SLOT_VALS[rndIdx];
        //DELETE 
        slotResults();
        console.log(slots);
    });
    //render those values MAYBE we set a delay
    console.log("slots will roll...");
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
if (sum === 0) {money.winnings = money.betAmount*1;}
else if (sum === 3) {money.winnings = money.betAmount*3;}
else if (sum === 15) {money.winnings = money.betAmount*5}
else {money.winnings = 0}
}
renderResults()

function init() {
    money = {
        //will need to be reset to 0
        winnings: 0,
        betAmount: 1,
        playerBank: 50
    }
    slots = [
        //try using the innerText property to assign the elemments
        SLOT_VALS[0],SLOT_VALS[0],SLOT_VALS[0]
    ];
    render()
}



function render() {
    //CONSOLE LOGS TO BE REMOVED
    console.log(money);
    console.log(slots);
    s0resultEl.innerText = slots[0];
    s1resultEl.innerText = slots[1];
    s2resultEl.innerText = slots[2];

    //renders the last round metrics
    bankEl.innerText = money.playerBank;
    lastRndEl.innerText = money.winnings;
    //need to write out the coding for changing
    renderResults(); //rendering the slot machine graphics after the player places a bet. 
}

function renderResults() {
//slot0.src = IMAGE LOCATION will need to b
//will need to be repeated for slot1 and slot2
    bankEl.innerText = money.playerBank;
    lastRndEl.innerText = money.winnings;
    betEl 

}