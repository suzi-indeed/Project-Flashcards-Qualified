import { React, useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList";
import DeckInromation from "./DeckInformation";
import { Link, Route, Routes } from "react-router-dom";
import CreateDeck from "./CreateDeck";

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
          <Route path="" element={
            <>
              {/*show the Create Deck button*/}
              <Link className="btn btn-secondary" to="/decks/new">
                <i class="oi oi-plus"></i>
                {' '}
                Create Deck
              </Link>

              {/*if there's at least one deck, show the decks*/}
              {
                decks.length > 0 ?
                  <DeckList decks={decks} /> :
                  <NotFound />
              }

            </>
          }
          />
        </Routes>


      </div>
    </>
  );
}



export default Layout;
