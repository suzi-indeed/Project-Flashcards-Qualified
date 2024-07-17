import React from 'react';
import { Link } from 'react-router-dom';

function CreateDeck() {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">
                    <i class="oi oi-home"></i> Home
                    </a></li>
                    <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>

            <h1>Create Deck</h1>
            <label for="deck-name">Name</label>
            <br />
            <input class="form-control" name="deck-name" type="text" placeholder="Deck Name" />

            <br />

            <label for="deck-description">Description</label>
            <br />
            <textarea class="form-control" rows="5" name="deck-description" type="text" placeholder="Brief description of the deck" />
            <br />

            <button type="cancel" class="btn btn-secondary">Cancel</button>
            {" "}
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}

export default CreateDeck;