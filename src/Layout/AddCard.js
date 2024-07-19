import React from 'react';
import { Link } from 'react-router-dom';
import { createCard } from '../utils/api';
import DisplayBreadcrumbs from './Breadcrumbs';

function AddCard({ deck }) {
    //const cardId = deck.cards.length + 1;
    const [front, setFront] = React.useState("");
    const [back, setBack] = React.useState("")
    const deckId = deck.id;

    async function handleSave() {
        const card = {
            //id: cardId,
            front: front,
            back: back,
            deckIid: deckId
        }
        const serverCreatedcard = await createCard(deckId, card);
        deck.cards.push(serverCreatedcard);
        //export async function createCard(deckId, card, signal) {

        setFront('');
        setBack('');
    }

    return (
        <div>
            <DisplayBreadcrumbs>
                <Link to={`/decks/${deck.id}`}>{deck.name}</Link>&nbsp;/ Add Card
            </DisplayBreadcrumbs>

            <h1>Add Card</h1>
            <label htmlFor="card-front">Front</label>
            <br />
            <textarea className="form-control" rows="3" name="card-front" type="text"
                placeholder="Front side of card" onChange={(ev) => setFront(ev.target.value)} value={front}>
            </textarea>

            <br />
            <label htmlFor="card-back">Back</label>
            <br />
            <textarea className="form-control" rows="3" name="card-back" type="text"
                placeholder="Back side of card" onChange={(ev) => setBack(ev.target.value)} value={back}>
            </textarea>

            <br />
            <Link to="/" className="btn btn-secondary">Cancel</Link>
            {" "}
            <button type="submit" className="btn btn-primary" onClick={handleSave}>Save</button>

        </div>
    )
}

export default AddCard;