// Card class
class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  
    getValue() {
      // Implement logic to assign values to cards if needed
      // For simplicity, let's assume all cards have the same value
      return 1;
    }
  }
  
  // Deck class
  class Deck {
    constructor() {
      this.cards = [];
    }
  
    initialize() {
      const suits = ["hearts", "diamonds", "clubs", "spades"];
      const ranks = [
        "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
      ];
  
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
    }
  
    shuffle() {
      let currentIndex = this.cards.length;
      let temporaryValue;
      let randomIndex;
  
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
    }
  
    deal(numCards, player1, player2) {
      for (let i = 0; i < numCards; i++) {
        player1.hand.push(this.cards.pop());
        player2.hand.push(this.cards.pop());
      }
    }
  }
  
  // Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    playCard() {
      return this.hand.pop();
    }
  
    compareCards(card1, card2) {
      const value1 = card1.getValue();
      const value2 = card2.getValue();
  
      if (value1 > value2) {
        this.score++;
      } else if (value1 < value2) {
        // Opponent's score is updated
      }
    }
  }
  
  // Game logic
  const deck = new Deck();
  deck.initialize();
  deck.shuffle();
  
  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");
  
  deck.deal(26, player1, player2);
  
  while (player1.hand.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
  
    player1.compareCards(card1, card2);
  }
  
  console.log("Final scores:");
  console.log(`${player1.name}: ${player1.score}`);
  console.log(`${player2.name}: ${player2.score}`);
  
  if (player1.score > player2.score) {
    console.log(`${player1.name} wins!`);
  } else if (player1.score < player2.score) {
    console.log(`${player2.name} wins!`);
  } else {
    console.log("It's a tie!");
  }
  ;
