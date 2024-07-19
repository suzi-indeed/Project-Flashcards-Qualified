import React, { useEffect, useState } from "react";
import DeckInromation from "./DeckInformation";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

function DeckList({ decks }) {

  return <>
    <Link className="btn btn-secondary" to="/decks/new">
      <i className="oi oi-plus"></i>
      {' '}
      Create Deck
    </Link>
    <div>DeckList length: {decks.length}</div>

    {/*check if there are decks*/}
    {
      decks.length > 0 ?
        decks.map(deck => <DeckInromation key={deck.id} deck={deck} enableEditing={false} decks={decks} />) :
        <NotFound />
    }
  </>
}

export default DeckList;