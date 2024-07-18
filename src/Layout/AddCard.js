import React from 'react';
import { Link } from'react-router-dom';

function handleSave(deck, front, back) {
    //TODO: save the deck to the server
    
    //clear textarea fields
    document.getElementById("card-front").value = "";
    document.getElementById("card-back").value = "";

    return deck;

}

function AddCard({ deck }) {
    return (
        <div>
            <h1>Add Card</h1>
            <label for="card-front">Front</label>
            <br />
            <textarea class="form-control" rows="3" name="card-front" type="text" placeholder="Front side of card">
            </textarea>
            <br />
            <label for="card-back">Back</label>
            <br />
            <textarea className="form-control" rows="3" name="card-back" type="text" placeholder="Back side of card">
            </textarea>
            <br />
            <Link to="/" button type="cancel" class="btn btn-secondary">Cancel</Link>
            {" "}
            {/*TODO: save the card data on save, see function*/}
            <button type="submit" class="btn btn-primary" onClick={handleSave}>Save</button>

        </div>
    )
}

export default AddCard;