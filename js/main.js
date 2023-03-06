/*----- constants -----*/
let SLOT_VALS = [0, 1, 5]
//above needs to beupdated like in RPS.P3/14min mark to make 



/*----- app's state (variables) -----*/
let money; //object with winnings = balance+amounts won, betAm
let results; //object; payoutAmt,  
let slots;

/*----- cached element references -----*/
//refers back to your html elements for things you may be updating often
const s0resultEl = document.getElementById("slot0");
const s1resultEl = document.getElementById("slot1");
const s2resultEl = document.getElementById("slot2");

/*----- event listeners -----*/
//RPS.Part4.3:12minutes 
//rollSLots = FUNCTION 

/*----- functions -----*/
init();



function rollSlots(evt) {


}
function init() {
    money = {
        winnings: 0,
        betAmount: 0,
        playerBank: 0
    }

    slots = [0,0,0];
    
    console.log(money);
    console.log(slots);



    //render()
}

function render() {
    renderResults(); //rendering the slot machine graphics after the player places a bet. 
}

function renderResults() {
//slot0.src = IMAGE LOCATION will need to b
//will need to be repeated for slot1 and slot2

}