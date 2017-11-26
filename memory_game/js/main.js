console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cards.push(cardOne);
cards.push(cardTwo);
cards.pop();
cards.pop();

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");


if (cardsInPlay.length === 2) {
	console.log("There are 2 cards");
}
else {
	console.log("There aren't 2 cards");
}

if (cardsInPlay[0] === cardsInPlay[3]) {
	alert("You found a match!");
}
else {
	alert("Try again");
}