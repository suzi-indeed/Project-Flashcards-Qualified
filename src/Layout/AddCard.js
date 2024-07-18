import React from 'react';
import { Link } from 'react-router-dom';
import { createCard } from '../utils/api';

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
        const serverCreatedcard = await createCard(deckId,card);
        deck.cards.push(serverCreatedcard);
        //export async function createCard(deckId, card, signal) {

        //clear textarea fields
        setFront('');
        setBack('');
    }

    return (
        <div>
            <h1>Add Card</h1>
            <label for="card-front">Front</label>
            <br />
            <textarea class="form-control" rows="3" name="card-front" type="text" 
            placeholder="Front side of card" onChange={(ev)=>setFront(ev.target.value)} value={front}>
            </textarea>
            
            <br />
            <label for="card-back">Back</label>
            <br />
            <textarea className="form-control" rows="3" name="card-back" type="text" 
            placeholder="Back side of card" onChange={(ev)=>setBack(ev.target.value)} value={back}>
            </textarea>

            <br />
            <Link to="/" class="btn btn-secondary">Cancel</Link>
            {" "}
            {/*TODO: save the card data on save, see function*/}
            <button type="submit" class="btn btn-primary" onClick={handleSave}>Save</button>

        </div>
    )
}

export default AddCard;