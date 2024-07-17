import React, { useEffect, useState } from "react";
import DeckInromation from "./DeckInformation";

function DeckList({ decks }) {

  return <>
    <div>DeckList length: {decks.length}</div>
    {decks.map(deck => <DeckInromation deck={deck} />)}

  </>
}

export default DeckList;