import React from 'react';
import { Link } from 'react-router-dom';

function CreateDeck() {
    return (
        <div>
            <h1>Create Deck</h1>

            <label for="deck-name">Name</label>
            <br/>
            <input class="form-control" name="deck-name" type="text" placeholder="Deck Name" />

            <br/>

            <label for="deck-description">Description</label>
            <br/>
            <textarea class="form-control" rows="5" name="deck-description" type="text" placeholder="Brief description of the deck" />
        </div>
    )
}

export default CreateDeck;