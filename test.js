const assert = chai.assert;

// Test for Card class
describe('Card', function() {
    it('should return the correct value for a card', function() {
      const card = new Card('hearts', 'A');
      assert.strictEqual(card.getValue(), 1);
    });
  
  });
  
  // Test for Deck class
  describe('Deck', function() {
    let deck;
    beforeEach(function() {
      deck = new Deck();
      deck.initialize();
    });
  
    it('should initialize a deck with 52 cards', function() {
      assert.strictEqual(deck.cards.length, 52);
    });
  
    it('should shuffle the cards in the deck', function() {
      const originalOrder = [...deck.cards];
      deck.shuffle();
      const shuffledOrder = deck.cards;
  
      // Test that the shuffled order is not the same as the original order
      assert.notDeepEqual(shuffledOrder, originalOrder);
    });
  
    it('should deal cards to players', function() {
      const player1 = new Player('Player 1');
      const player2 = new Player('Player 2');
  
      deck.deal(26, player1, player2);
  
      // Test that each player has received 26 cards
      assert.strictEqual(player1.hand.length, 26);
      assert.strictEqual(player2.hand.length, 26);
    });
  
  });
  
  // Test for Player class
  describe('Player', function() {
    it('should play a card from the hand', function() {
      const player = new Player('Player 1');
      player.hand = [new Card('hearts', 'A'), new Card('spades', '7')];
  
      const playedCard = player.playCard();
  
      // Test that the played card is removed from the hand
      assert.strictEqual(player.hand.length, 1);
      // Test that the played card is returned
      assert.deepEqual(playedCard, new Card('spades', '7'));
    });
  
    it('should update the score correctly based on card comparison', function() {
      const player = new Player('Player 1');
  
      const card1 = new Card('hearts', 'A');
      const card2 = new Card('spades', '7');
  
      player.compareCards(card1, card2);
  console.log(player.score)

      // Test that the player's score has increased by 1
      assert.strictEqual(player.score, 0);
  
      player.compareCards(card1, card2);
  
      // Test that the player's score remains the same since it's a tie
      assert.strictEqual(player.score, 1);
  
      player.compareCards(card2, card1);
  
      // Test that the player's score has decreased by 1
      assert.strictEqual(player.score, 0);
    });
  
  });
  