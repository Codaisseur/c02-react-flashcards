import React from 'react';
import FlashCard from './FlashCard';
import './FlashCardContainer.css';

export interface IFlashCard {
  id: number;
  front: string;
  back: string;
  flipped: boolean;
}

interface IFlashCardsContainerState {
  cards: IFlashCard[];
}

class FlashCardsContainer extends React.Component<
  {},
  IFlashCardsContainerState
> {
  public state: IFlashCardsContainerState = {
    cards: [
      {
        front: "Hoe voeg je meerdere properties in 1x toe aan een component?",
        back: "Gebruik de spread operator! { ...props }",
      },
      {
        front: "Wanneer zou je PropTypes gebruiken voor type safety als die al door TypeScript interfaces wordt gewaarborgd?",
        back: "Als je components ook in JS projecten worden gebruikt.",
      },
      {
        front: "Met welk commando creëer je een nieuwe React app met TypeScript support?",
        back: "npx create-react-app --typescript",
      },
      {
        front: "Wanneer zou je PropTypes gebruiken voor type safety als die al door TypeScript interfaces wordt gewaarborgd?",
        back: "Als je components ook in JS projecten worden gebruikt.",
      },
      {
        front: "Met welk commando creëer je een nieuwe React app met TypeScript support?",
        back: "npx create-react-app --typescript",
      }
    ].map((c, index) => ({ id: index + 1, ...c, flipped: false }))
  };

  public render() {
    return (
      <div className="FlashCardContainer">
        <header>
          <h1>Flashcards</h1>
        </header>
        <div className="cards">
          {this.state.cards.map(card => (
            <FlashCard key={card.id} onFlip={this.flipCard} {...card} />
          ))}
        </div>
      </div>
    );
  }

  public flipCard = (id: number) => {
    this.setState({
      cards: this.state.cards.map(card => {
        if (card.id === id) { return { ...card, flipped: !card.flipped }; }
        return card;
      })
    })
  }
}

export default FlashCardsContainer;
