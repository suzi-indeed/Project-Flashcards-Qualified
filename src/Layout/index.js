import { React, useEffect, useState } from "react";
import Header from "./Header";
import DeckList from "./DeckList";
import { Route, Routes } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import DisplayDeck from "./DisplayDeck";
import { listDecks } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {

    async function loadDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDecks();
  }, []);


  return (
    <>
      <Header />
      <div className="container">

        <Routes>
          <Route path="decks/new" element={<CreateDeck decks={decks} />} />
          <Route path="decks/:deckId/*" element={<DisplayDeck decks={decks} />} />
          <Route path="*" element={<DeckList decks={decks} />} />
        </Routes>


      </div>
    </>
  );
}



export default Layout;
