import React from 'react';
import { ICardInput, IFlashCard } from './FlashCardsContainer';

export interface IFlashCardForm {
  card?: IFlashCard;
  saveCard: (input: ICardInput) => void;
}

interface IFlashCardFormState extends ICardInput {
  [key: string]: any;
}

class FlashCardForm extends React.Component<
  IFlashCardForm,
  IFlashCardFormState
> {
  public constructor(props: IFlashCardForm) {
    super(props);
    const { card } = props;

    this.state = card
      ? { front: card.front, back: card.back }
      : { front: '', back: '' };
  }

  public handleChange = (attribute: "front" | "back") => (event: any) => {
    this.setState({ [attribute]: event.target.value });
  };

  public handleSubmit = (event: any) => {
    event.preventDefault();
    const { card } = this.props;
    this.props.saveCard({ ...(card || {}), ...this.state });

    if (!card) {
      this.setState({ front: "", back: "" });
    }
  }

  public render() {
    const { front, back } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="front">Question:</label>
          <textarea
            name="front"
            id="front"
            onChange={this.handleChange("front")}
            value={front}
          />
        </div>

        <div>
          <label htmlFor="back">Answer:</label>
          <textarea
            name="back"
            id="back"
            onChange={this.handleChange("back")}
            value={back}
          />
        </div>

        <div>
          <input type="submit" value="Save Card" />
        </div>
      </form>
    );
  }
}

export default FlashCardForm;
