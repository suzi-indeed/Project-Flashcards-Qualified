import React from 'react';
import DeckInromation from './DeckInformation';
import { Link, Route, Routes, useParams } from "react-router-dom";
import DisplayCard from './DisplayCard';

function DisplayDeck({ decks }) {
  const { deckId } = useParams();
  const deck = decks.find(deck => deck.id == deckId);

  if (!deck) {
    return <p>Deck not found</p>;
  }

  return (
    <>
      <Routes>
        <Route path="" element={
          <>
            <DeckInromation deck={deck} />
            <br />
            <h3>Cards</h3>
            <div style={{ display: "flex" }} />
            {deck.cards.map(card => (
              <DisplayCard card={card} />
            ))}
          </>
        }
        />
      </Routes>
    </>
  );
}

export default DisplayDeck;

/*

[
{
  "id": 1,
  "name": "Rendering in React",
  "description": "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
  "cards": [
    {
    "id": 1,
    "front": "Differentiate between Real DOM and Virtual DOM.",
    "back": "Virtual DOM updates are faster but do not directly update the HTML",
    "deckId": 1
    },

    {
    "id": 2,
    "front": "How do you modify the state of a different React component?",
    "back": "Not at all! State is visible to the component only.",
    "deckId": 1
},
....

*/