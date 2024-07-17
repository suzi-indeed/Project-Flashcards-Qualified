import React from "react";
import { useParams, Link } from "react-router-dom";


function EditCard({ deck }) {
    const { cardId } = useParams();
    let card = deck.cards.find(card => card.id == cardId);
    if (!card) {
        return <p>Card not found</p>;
    }
    {/* TODO: edit the breadcrumb navigation bar to include the card's name 
        it's currently the one from DisplayDeck */}

    return <>
        <h3>Edit Card</h3>
        <label for="card-front">Front</label>
        <br />
        <textarea class="form-control" rows="3" name="card-front" type="text" >{card.front}</textarea>

        <br />

        <label for="card-back">Back</label>
        <br />
        <textarea className="form-control" rows="3" name="card-back" type="text" >{card.back}</textarea>
        <br />

        <Link to={`/decks/${deck.id}`} button type="cancel" class="btn btn-secondary">Cancel</Link>
        {" "}
        
        {/* TODO: submit must save the data before going back to the deck page*/}
        <Link to={`/decks/${deck.id}`} button type="submit" class="btn btn-primary">Submit</Link>
    </>
}

export default EditCard;