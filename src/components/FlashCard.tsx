import classnames from "classnames";
import React from "react";
import { IFlashCard } from "./FlashCardsContainer";
import "./FlashCard.css";

export interface IFlashCardComponent extends IFlashCard {
  onFlip: (id: number) => void;
}

const FlashCard = (props: IFlashCardComponent) => (
  <div
    className={classnames("FlashCard", { flipped: props.flipped })}
    onClick={() => props.onFlip(props.id)}
  >
    <h2>{props.flipped ? props.back : props.front}</h2>
  </div>
);

export default FlashCard;
