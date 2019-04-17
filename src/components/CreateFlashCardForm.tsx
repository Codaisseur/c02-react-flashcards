import React from 'react';
import { ICardInput } from './FlashCardsContainer';

export interface ICreateFlashCardForm {
  addCard: (input: ICardInput) => void;
}

interface ICreateFlashCardFormState extends ICardInput {
  [attribute: string]: string;
}

class CreateFlashCardForm extends React.Component<
  ICreateFlashCardForm,
  ICreateFlashCardFormState
> {
  public state: ICreateFlashCardFormState = { front: "", back: "" };

  public handleChange = (attribute: "front" | "back") => (event: any) => {
    this.setState({ [attribute]: event.target.value });
  };

  public handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.addCard(this.state);
    this.setState({ front: '', back: '' });
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
          <input type="submit" value="Add Card" />
        </div>
      </form>
    );
  }
}

export default CreateFlashCardForm;
