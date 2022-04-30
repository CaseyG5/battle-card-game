
// Cards are represented by a RANK and a SUIT, e.g. 11 (Jack) of Diamonds
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    // Returns RANK which is stored as a number
    getRank() {
        return this.rank;   
    }

    // Returns RANK as a string for J, Q, K, A
    getRankAsString() {
        switch( this.rank ) {
            case 11:
                return "Jack";
            case 12:
                return "Queen";
            case 13:
                return "King";
            case 14:
                return "Ace";
            default:    
                return String(this.rank);   // 2 - 10
        }
    }

    // Returns SUIT which is stored as a string
    getSuit() {
        return this.suit;
    }
    
    // Returns a string with both RANK and SUIT
    getRankAndSuit() {
        return this.getRankAsString() + " of " + this.getSuit();
    }
}


class Deck {
    constructor() {
        this.cards = [];

        // assemble deck (fill cards array, preferably pre-shuffled)
        let suit, position;

        // outer loop for the 4 suits
        for(let s = 1; s < 5; s++) {
            switch( s ) {
                case 1:
                    suit = "Clubs";
                    break;
                case 2:
                    suit = "Diamonds";
                    break;
                case 3:
                    suit = "Hearts";
                    break;
                case 4:
                    suit = "Spades";
            }
            
            // inner loop for the 13 ranks (2 to 14)
            for(let r = 2; r < 15; r++) {
                
                // CRUDE algorithm to pre-shuffle the deck
                position = Math.floor(Math.random() * 52) + 1;      // pick a random slot, 1-52
                // console.log(`position ${position}`);
                // console.log(this.cards[position]);

                // if the slot is not empty (already taken)
                while(this.cards[position] != undefined) {     
                    // try another one     
                    position = Math.floor(Math.random() * 52) + 1;  
                }

                //console.log(`Adding card "${rank} of ${suit}" to deck at position ${position}`);
                this.cards[position] = new Card(r, suit);
            }
        }
    }

    shuffle() {
        
    }

    
    // deal entire deck to 2 players  (26 cards per player)
    dealDeck(player1, player2) {
        for( let c = 0; c < 26; c++ ) {
            player1.cardsFaceDown.push(this.cards.pop());
            player2.cardsFaceDown.push(this.cards.pop());
        }
            
    }

    // deal a starting # of cards given an array of players 
    deal(arrayOfPlayers, cardsPerPlayer) {

    }

    list() {
        for( let i = 1; i< 53; i++ ) {
            console.log(this.cards[i]);
        }
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

        // this.wonLastGame;                useful for "loser plays first" rule
    }

    getName() {
        return this.name;
    }

    playCard() {
        this.lastCardPlayed = this.cardsFaceDown.pop();  // play a card from their pile
    }

    getLastCardPlayed() {
        return this.lastCardPlayed;
    }

    addPoint() {
        this.points++;
    }

    getPoints() {
        return this.points;
    }
}

let deck1 = new Deck();
//deck1.list();

let player1 = new Player("Yogi Bear");
let player2 = new Player("George Jetson");

deck1.dealDeck(player1, player2);

alert("Deck has been shuffled and dealt to 2 players:\n" +
        player1.getName() + "  and  " + player2.getName() +
        "\n\nClick OK to watch them \"Battle\".");

let rankOfCardPlayedByP1, rankOfCardPlayedByP2;
let p1Points, p2Points;

for(let i = 0; i < 26; i++) {
    player1.playCard();
    player2.playCard();

    rankOfCardPlayedByP1 = player1.getLastCardPlayed().getRank();
    rankOfCardPlayedByP2 = player2.getLastCardPlayed().getRank();

    if( rankOfCardPlayedByP1 > rankOfCardPlayedByP2 )
        player1.addPoint();
    else if( rankOfCardPlayedByP2 > rankOfCardPlayedByP1 )
        player2.addPoint();
    // else no points added

    alert(`${player1.getName()} plays a ${player1.getLastCardPlayed().getRankAndSuit()}
${player2.getName()} plays a ${player2.getLastCardPlayed().getRankAndSuit()}
    
The score is ${player1.getPoints()} to ${player2.getPoints()}`);
}

alert(`The final score is:
${player1.getName()} - ${player1.getPoints()} points
${player2.getName()} - ${player2.getPoints()} points`)
