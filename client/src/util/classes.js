class Person {
  constructor(type) {
    this.type = type;
    this.hand = [];
  }

  addNewHand() {
    let newHand = new Hand();
    this.hand.push(newHand);
  }
}

class Hand {
  constructor() {
    this.hand = [];
    this.points = 0;
  }

  addCard = card => {
    this.hand.push(card);
    this.setTotal(this.hand);
  };

  setTotal = hand => {
    let hasAce = false;
    let sum = hand.reduce((acc, curr) => {
      if (curr.value === "ACE") {
        hasAce = true;
      }

      return acc + this.getValue(curr);
    }, 0);

    if (hasAce && sum < 12) {
      sum += 10;
    }

    this.points = sum;
  };

  getValue = card => {
    switch (card.value) {
      case "ACE":
        return 1;
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        return +card.value;
      case "JACK":
      case "QUEEN":
      case "KING":
        return 10;
      default:
        return;
    }
  };
}
