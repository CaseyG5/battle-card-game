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

                // if the slot is NOT empty (already taken)
                while(this.cards[position] != undefined) {     
                    // try another one     
                    position = Math.floor(Math.random() * 52) + 1;  
                }
                
                console.log(`Adding card "${r} of ${suit}" to deck at position ${position}`);
                this.cards[position] = new Card(r, suit);
            }
        }
    }
    
    // deal entire deck to 2 players  (26 cards per player)
    dealDeck(player1, player2) {
        // check arguments
        if( !(player1 instanceof Player) || !(player2 instanceof Player) ) 
            throw new Error("Both arguments must be of type \"Player\"");
        
        for( let c = 0; c < 26; c++ ) {
            player1.cardsFaceDown.push(this.cards.pop());
            player2.cardsFaceDown.push(this.cards.pop());
        }
        return true;  
    }

    startGame(player1, player2) {
        
        // Deal entire deck to the two Players (face down piles)
        this.dealDeck(player1, player2);

        alert("Deck has been shuffled and dealt to 2 players:\n" +
                player1.getName() + "  and  " + player2.getName() +
                "\n\nClick OK to watch them \"Battle\".");

        // variables to compare ranks of cards played
        let rankOfCardPlayedByP1, rankOfCardPlayedByP2;

        for(let i = 0; i < 26; i++) {       // loop for 26 turns
            player1.playCard();
            player2.playCard();

            rankOfCardPlayedByP1 = player1.getLastCardPlayed().getRank();   // e.g. 12 (Queen)
            rankOfCardPlayedByP2 = player2.getLastCardPlayed().getRank();   // e.g. 9

            // If 1st Player's card beats 2nd Player's card then they get a point
            if( rankOfCardPlayedByP1 > rankOfCardPlayedByP2 )   
                player1.addPoint();   

            // Vice versa                  
            else if( rankOfCardPlayedByP2 > rankOfCardPlayedByP1 )
                player2.addPoint();

            // If it's a tie, no points are added

            // Show cards just played and current score
            alert(`${player1.getName()} plays a ${player1.getLastCardPlayed().getRankAndSuit()}
${player2.getName()} plays a ${player2.getLastCardPlayed().getRankAndSuit()}
            
The score is ${player1.getPoints()} to ${player2.getPoints()}`);
        }

        // Show final score
        alert(`The final score is:
        ${player1.getName()} - ${player1.getPoints()} points
        ${player2.getName()} - ${player2.getPoints()} points`);
    }

    // for testing //
    list() {
        for( let i = 1; i < 53; i++ ) {
            console.log( this.cards[i].getRankAndSuit() );
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cardsFaceDown = [];

        this.lastCardPlayed = null;
        this.points = 0;

        // this.cardsFaceUp = [];           useful for other games
        // this.cardsInHand = [];            "                  "

        // this.wonLastGame;                useful for "loser plays first" rule
    }

    getName() {
        return this.name;
    }

    // Play a card from their pile
    playCard() {
        this.lastCardPlayed = this.cardsFaceDown.pop();  
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


// Create a Deck object
let deck1 = new Deck();

// Create 2 Player objects (prompt for names)

let player1 = new Player( "Chuck Norris" );
let player2 = new Player( "JC Van Damme" );

// Let the game begin
deck1.startGame(player1, player2);