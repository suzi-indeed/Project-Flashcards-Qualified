import { React, useEffect, useState } from "react";
import Header from "./Header";
import DeckList from "./DeckList";
import { Route, Routes } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import DisplayDeck from "./DisplayDeck";

function Layout() {
  const [decks, setDecks] = useState([]);
  // load data from http://localhost:8080/decks?_embed=cards with useeffect
  useEffect(() => {

    async function loadDecks() {
      const response = await fetch("http://localhost:8080/decks?_embed=cards");
      const data = await response.json();
      console.log(data);
      setDecks(data);
    }
    loadDecks();
  }, []);


  return (
    <>
      <Header />
      <div className="container">

        <Routes>
          <Route path="decks/new" element={<CreateDeck />} />
          <Route path="decks/:deckId" element={<DisplayDeck decks={decks} />} />
          <Route path="*" element={ <DeckList decks={decks} />}/>
        </Routes>


      </div>
    </>
  );
}



export default Layout;
