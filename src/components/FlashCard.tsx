import classnames from "classnames";
import React from "react";
import { IFlashCard, ICardInput } from "./FlashCardsContainer";
import "./FlashCard.css";
import FlashCardForm from "./FlashCardForm";

export interface IFlashCardComponent extends IFlashCard {
  onFlip: (id: number) => void;
  saveCard: (input: ICardInput) => void;
}

interface IFlashCardState {
  editing: boolean;
}

class FlashCard extends React.Component<IFlashCardComponent, IFlashCardState> {
  public state: IFlashCardState = { editing: false };

  public render() {
    const { flipped, front, back } = this.props;
    const { editing } = this.state;

    return (
      <div className={classnames("flip-container", { hover: flipped })}>
        <div className="flipper">
          <div className="front">
            <h3>{front}</h3>
          </div>
          <div className="back">
            {!editing && <button onClick={this.toggleEditMode}>Edit</button>}
            {!editing && <h3>{back}</h3>}
            {editing && (
              <FlashCardForm
                saveCard={this.handleSave}
                card={{ ...this.props }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  public toggleEditMode = () => {
    this.setState({ editing: !this.state.editing });
  }

  public handleSave = (input: ICardInput) => {
    this.setState({ editing: false });
    this.props.saveCard(input)
  }
}

export default FlashCard;
