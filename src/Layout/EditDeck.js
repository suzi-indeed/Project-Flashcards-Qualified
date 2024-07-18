import React from 'react';
import { Link } from 'react-router-dom';
import {updateDeck} from '../utils/api';

function EditDeck({ deck }) {
const [name, setName] = React.useState(deck.name);
const [description, setDescription] = React.useState(deck.description);

    function onSubmit(){
        deck.name = name;
        deck.description = description;
        updateDeck(deck); //export async function updateDeck(updatedDeck, signal) {
    }

    return (
        <div>
            <h1>Edit Deck</h1>
            <label for="deck-name">Name</label>
            <br />
            <textarea onChange={ev=>setName(ev.target.value)} class="form-control" name="deck-name" type="text" placeholder="Deck Name">
                {name}
            </textarea>
            <label for="deck-description">Description</label>
            <br />

            <textarea onChange={ev=>setDescription(ev.target.value)} class="form-control" rows="5" name="deck-description" type="text" placeholder="Brief description of the deck" >
                {description}
            </textarea>
            <br />

            <Link to="/" button type="cancel" class="btn btn-secondary">Cancel</Link>
            {" "}
            <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default EditDeck;

