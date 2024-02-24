let player={
  name:"Ayushkant",
  chips:145
}
let firstCard=getRandomCard()
let secondCard=getRandomCard()
let sum=firstCard+secondCard
let cards=[firstCard,secondCard]// ARRAYS-ordered list of items 
let message=""
let hasBlackjack=false
let isAlive=true
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function getRandomCard(){
  return Math.floor(Math.random()*12)+1
}
function startGame(){
  cardsEl.textContent="CARDS: "
  for(i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
  }
  sumEl.textContent="SUM: "+sum
  if (sum<21){
    message="DO YOU WANNA DRAW ANOTHER CARD?😃"
  }else if(sum===21){
    message="Congratulations!You have blackjack🤑"
    hasBlackjack=true
  }else{
    message="YOU ARE OUT OF THE GAME NIGGA👎"
    isAlive=false
  }
  messageEl.textContent=message
}
function newCard(){
  if(hasBlackjack===false && isAlive===true){
  let card=getRandomCard()
  sum=sum+card
  cards.push(card)
  startGame()
}
}