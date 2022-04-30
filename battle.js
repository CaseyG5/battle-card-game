
// Cards are represented by a RANK and a SUIT, e.g. Jack of Diamonds
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


