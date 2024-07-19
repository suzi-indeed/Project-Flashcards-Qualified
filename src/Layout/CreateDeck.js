import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createDeck } from '../utils/api';
import DisplayBreadcrumbs from './Breadcrumbs';

function CreateDeck({ decks }) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        const deck = {
            name: name,
            description: description
        }
        const newDeck = await createDeck(deck);
        newDeck.cards = [];
        decks.push(newDeck);
        navigate(`/decks/${newDeck.id}`);
    }

    return (
        <div>
            <DisplayBreadcrumbs>Create Deck</DisplayBreadcrumbs>

            <h1>Create Deck</h1>
            <label for="deck-name">Name</label>
            <br />
            <input class="form-control" name="deck-name" type="text" placeholder="Deck Name"
                value={name} onChange={ev => setName(ev.target.value)} />

            <br />

            <label for="deck-description">Description</label>
            <br />
            <textarea class="form-control" rows="5" name="deck-description" type="text" placeholder="Brief description of the deck"
                value={description} onChange={ev => setDescription(ev.target.value)} />
            <br />

            <Link to="/" class="btn btn-secondary">Cancel</Link>
            {" "}
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CreateDeck;