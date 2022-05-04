var expect = chai.expect;

let testDeck = new Deck();

describe('Function to test:', function() {
    describe('#Deck.dealDeck()', function() {
        it( "should deal 26 cards to each of 2 players and return \"true\"", function() {

            let result = testDeck.dealDeck( new Player("Player 1"), new Player("Player 2") );
            expect(result).to.equal( true );
        });
        
        it('should fail if an argument was not of type \"Player\"', function() {
            expect( function() {
                testDeck.dealDeck( new Player("Winner"), "Next Player" );
            }).to.throw(Error);
        });

        it("should fail of both arguments were not of type \"Player\"", function() {
            expect( function() {
                testDeck.dealDeck( "Beavis", "Butthead" );
            }).to.throw(Error);
        });

    });
});