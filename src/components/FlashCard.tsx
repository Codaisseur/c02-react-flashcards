import classnames from "classnames";
import React from "react";
import { IFlashCard } from "./FlashCardsContainer";
import "./FlashCard.css";

export interface IFlashCardComponent extends IFlashCard {
  onFlip: (id: number) => void;
}

const FlashCard = (props: IFlashCardComponent) => (
  <div className={classnames("flip-container", { hover: props.flipped })}>
    <div className="flipper">
      <div className="front">
        <h3>{props.front}</h3>
      </div>
      <div className="back">
        <h3>{props.back}</h3>
      </div>
    </div>
  </div>
);

export default FlashCard;
