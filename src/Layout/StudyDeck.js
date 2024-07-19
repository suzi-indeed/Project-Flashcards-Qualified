import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DisplayBreadcrumbs from './Breadcrumbs';

function StudyDeck({ decks }) {
    const [cardIndex, setCardIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [clicked, setClicked] = useState(false);
    //TODO improvement: clicked is not needed, it can be calculated by checking cardIndex is 0 and flipped is true

    const navigate = useNavigate();
    const { deckId } = useParams();
    const deck = decks.find(deck => deck.id == deckId);

    {/*instead of: 
        onClick={()=>setFlipped(!flipped)}
        a function that also makes the next button visible
        */}
    const handleClick = () => {
        setFlipped(!flipped);
        if (!clicked) {
            setClicked(true); //this will only happen on the first click, and will make the next button show
        }
    };

    // const isLastCard = cardIndex === deck.cards.length;

    // useEffect(() => {
    //     if(!isLastCard) {
    //         return;
    //     }

    //     const shouldRestart = window.confirm("Restart cards?");
    //     if (shouldRestart) {
    //         setCardIndex(0);
    //         setFlipped(false);
    //         setClicked(false);
    //     } else {
    //         navigate('/'); //go to home screen
    //     }
    // }, [isLastCard]);

    function askUserIfRestart() {
        const shouldRestart = window.confirm("Restart cards?");
        if (shouldRestart) {
            setCardIndex(0);
            setFlipped(false);
            setClicked(false);
        } else {
            navigate('/'); //go to home screen
        }
    }

    function handleNextClick() {
        if (cardIndex === deck.cards.length - 1) {
            askUserIfRestart();
        } else {
            setCardIndex(cardIndex + 1);
        }
    }

    if (!deck) {
        return <p>Deck not found</p>;
    }
    if (deck.cards.length < 3) {
        return <div>
            <h3>Study: {deck.name}</h3>
            <h4>Not Enough cards.</h4>
            <p>You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
            <Link className="btn btn-primary" style={{ margin: "4px" }} to={`/decks/${deck.id}/cards/new`} >
                <i class="oi oi-plus"></i>
                {' '}
                Add Cards
            </Link>
        </div>
    }

    return (
        <div>
            <DisplayBreadcrumbs>
                <Link to={`/decks/${deck.id}`}>{deck.name}</Link>&nbsp;/ Study
            </DisplayBreadcrumbs>

            <h3>Study: {deck.name}</h3>
            <div className="card">
                <div className="card-body" >
                    <h4>Card {cardIndex + 1} of {deck.cards.length}</h4>
                    <p>{flipped ? deck.cards[cardIndex]?.back : deck.cards[cardIndex]?.front}</p>
                    <button type="button" class="btn btn-secondary" onClick={handleClick}>Flip</button>
                    {' '}
                    {clicked && <button type="button" class="btn btn-primary" onClick={handleNextClick}>Next</button>}
                </div>
            </div>
        </div>
    )



}

export default StudyDeck;