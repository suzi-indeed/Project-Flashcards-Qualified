// import React, { useEffect, useState } from "react";
// import DeckInromation from "./DeckInformation";

// function DeckList() {
//   const [decks, setDecks] = useState([]); 
//     // load data from http://localhost:8080/decks?_embed=cards with useeffect
//     useEffect( () => {

//     async function loadDecks() {
//       const response = await fetch("http://localhost:8080/decks?_embed=cards");
//       const data = await response.json();
//       console.log(data);
//       setDecks(data);
//     }
//     loadDecks();    
//     }, []);
  
  
//     return <>
//     <div>DeckList length: {decks.length}</div>
//     {decks.map(deck => <DeckInromation deck={deck} />)}

//     </>
//   }

//   export default DeckList;