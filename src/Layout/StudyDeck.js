import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function StudyDeck({decks}) {
    const [cardIndex,setCardIndex] = useState(0);

    const {deckId} = useParams();
    const deck = decks.find(deck => deck.id == deckId);
    if (!deck) {
        return <p>Deck not found</p>;
    }
    {/* TODO: update the breadcrumb navigation bar */}

    return (
        <div>
            <h3>Study: {deck.name}</h3>
            <div className="card">
                <div className="card-body" >
                    <h4>Card {cardIndex+1} of {deck.cards.length}</h4>
                    <p>{deck.cards[cardIndex].front}</p>
                    <button type="button" class="btn btn-secondary">Flip</button>
                </div>
            </div>
        </div>
    )
}

export default StudyDeck;