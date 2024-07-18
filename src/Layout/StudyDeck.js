import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function StudyDeck({decks}) {
    const [cardIndex,setCardIndex] = useState(0);
    const [flipped,setFlipped] = useState(false);
    const [clicked, setClicked] = useState(false);

    const {deckId} = useParams();
    const deck = decks.find(deck => deck.id == deckId);
    if (!deck) {
        return <p>Deck not found</p>;
    }
    {/* TODO: update the breadcrumb navigation bar */}

    {/*instead of: 
        onClick={()=>setFlipped(!flipped)}
        a function that also makes the next button visible
        */}
    const handleClick = () => {
        setFlipped(!flipped);
        if (!clicked) {
          console.log('This will only happen on the first click');
          setClicked(true); //this will only happen on the first click, and will make the next button show
        }
      };

    return (
        <div>
            <h3>Study: {deck.name}</h3>
            <div className="card">
                <div className="card-body" >
                    <h4>Card {cardIndex+1} of {deck.cards.length}</h4>
                    <p>{flipped ? deck.cards[cardIndex].back : deck.cards[cardIndex].front}</p>
                    <button type="button" class="btn btn-secondary" onClick={handleClick}>Flip</button>
                    {' '}
                    {clicked && <button type="button" class="btn btn-primary" onClick={()=>setCardIndex(cardIndex+1)}>Next</button>}
                </div>
            </div>
        </div>
    )
}

export default StudyDeck;