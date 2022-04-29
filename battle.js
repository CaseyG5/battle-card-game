// Cards will be represented by a SUIT and a RANK, or RANK of SUIT, e.g. Jack of Diamonds

// Suits Clubs, Diamonds, Hearts, Spades can be represented by... 
// strings (the words above)
// letters 'C' 'D' 'H' and 'S'
// or by 0, 1, 2, 3

// Ranks Ace, 2, 3, 4...10, Jack, Queen, King could be represented by...
// 0, 1, 2, ... 11, 12
// but 1, 2, 3, ...10, 11, 12, 13 makes more sense.


class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        
    }

    getRank() {
        return this.rank;
    }
    
    getSuit() {
        return this.suit;
    }
}


class Deck {
    constructor() {
        this.cards = [];
        // assemble deck (fill cards array, preferably pre-shuffled)
    }

    shuffle() {

    }

    // deal entire deck to the given # of players
    deal(numPlayers) {

    }
    // deal a starting # of cards to the given # of players 
    deal(numPlayers, cardsPerPlayer) {

    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cardsFaceDown = [];

        // this.cardsFaceUp = [];           useful for other games
        // this.cardsInHand = [];

        this.lastCardPlayed = null;
        this.points = 0;

        // this.wonLastGame = false;        useful for "loser plays first" rule
    }

    playCard() {
        this.lastCardPlayed = this.cardsFaceDown.pop();
    }
}