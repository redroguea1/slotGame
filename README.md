Constants:
Let SLOT_VALS = [0,1,5]

Variables:
Money -> {winnings: 0, betAmount:0, playerBank: 0 }, 
Slots = [0, 0, 0]


Functions
**changeBet= changes bet based on the buttons hit by the
Looks at the event listeners for the buttons. Takes money.bet and +/- $1 OR $5. Guards bet Range will be from $1-$50. 
Call render().

**rollSlots = should be listening for the event click of “BET” 
renderDance() = light show for the magic, approximate 3 seconds
Generate random slot values for slot[0], slot[1], slot[2] using out SLOT_Values Array
math.floor(random)... look this up. 
Set slot[i].innerText of s#resultEl. Will need to combine
render() 
slotResults()



**slotResults = calculates the winning combination of the slots object
Should be called by the rollSlots method after they finish. 
Use if statements Use sum to calculate the slot values… 
Triple0 (sum = 0) => money.betAmount*1 = winnings; 
Triple1(sum =3) => money.betAmount*3 = winnings; 
sum  = 3
Triple5 = money.betAmount*5 = winnings; 
sum  = 15
renderWin() for any of these combinations
Else return renderResults

**cashIn: prompting the user for an input of money to start their betting
Via an alert?? - Create an input box that is captures user deposit and sets it to the variable 


**cashOut= Resetting the board…
Create button to use for cashout ID:cashOut
Alert: “here are your winnings!: “PlayerBank!” *emoji* 
Reset money[key/value]:pairs to 0. And slots to all 0
render()

**init(): 
set up our variables, and need to set the board 
Idea: make a restart() and use that for the timer. 
Timer that will call cashOut to reset game board after 45 seconds. (45000 setTimeout)

**render(): set up the initial state of the board
renderResults: shows the slot machine choices and payoutAmount =0 , reset money.betAmount to = 0

**renderWin = show slot machine choices updating money.winnings+payoutAmount, update results.playerbank, reset money.betAmount  
