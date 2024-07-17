import { React, useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
//import DeckList from "./DeckList";
import DeckInromation from "./DeckInformation";


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

        {/*show the Create Deck button*/}
        <button className="btn btn-secondary"> 
        <i class="oi oi-plus"></i> Create Deck</button>

        <div>DeckList length: {decks.length}</div>

        {/*if there's at least one deck, show the decks*/}
        {
          decks.length > 0 ?
            decks.map(deck => <DeckInromation deck={deck} />) :
            <NotFound />
        }


      </div>
    </>
  );
}



export default Layout;
