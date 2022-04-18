// Code your solutions in this file
function writeCards(cards, eventName){
    let thankCard = []
    for (let i = 0; i < cards.length; i++) {
        thankCard.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankCard;
}

function countDown(number){
let i = 0
while (i > 0) {
    console.log(number);
    i--
}
return number
}
