import React from 'react';
import { Link } from'react-router-dom';

function EditDeck({ deck }) {
    return (
        <div>
            <h1>Edit Deck</h1>
            <label for="deck-name">Name</label>
            <br />
            <textarea class="form-control" name="deck-name" type="text" placeholder="Deck Name">
                {deck.name}
            </textarea>
            <label for="deck-description">Description</label>
            <br />
            <textarea class="form-control" rows="5" name="deck-description" type="text" placeholder="Brief description of the deck" >
                {deck.description}
            </textarea>
            <br />

            <Link to="/" button type="cancel" class="btn btn-secondary">Cancel</Link>
            {" "}
            <button type="submit" class="btn btn-primary">Submit</button>
            {/*TODO: save changes on submit*/}
        </div>
    );
}

export default EditDeck;