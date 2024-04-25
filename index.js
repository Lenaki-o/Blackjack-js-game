//creating the object player, with name and euro
let player = {
    name: "Len",
    euro:  50
};

//initialization, empty array for cards, and zero sum
let cards = [];
let sum = 0;
//starting game no hasBlackjack, no isAlive boolean
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.euro;

//pressing the button start game
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

// call for random cards
function getRandomCard() {
    let randomNum = Math.floor(Math.random()*13) +1;
    if (randomNum === 1) {
        return 11;
    } else if (randomNum > 10 ) {
        return 10;
    } else {
        return randomNum;
    }
}

//ctrl + d to select or same words
//call for rendering game and if selection
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum<21) {
        message = "Do you want to draw?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You lost";
        isAlive = false;
    }
    messageEl.textContent = message;
}

//call after pressing new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!");    
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        console.log(cards);
            renderGame();
    } 
}