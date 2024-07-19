import React from "react";
import { useParams, Link } from "react-router-dom";
import { updateCard } from "../utils/api";
import { useNavigate } from "react-router-dom";
import DisplayBreadcrumbs from "./Breadcrumbs";


function EditCard({ deck }) {
    const { cardId } = useParams();
    let card = deck.cards.find(card => card.id == cardId);

    const [front, setFront] = React.useState(card.front);
    const [back, setBack] = React.useState(card.back);

    const navigate = useNavigate();

    async function handleSubmit() {
        card.front = front;
        card.back = back;
        await updateCard(card);
        navigate(`/decks/${deck.id}`);
    }

    if (!card) {
        return <p>Card not found</p>;
    }

    return <>
        <DisplayBreadcrumbs>
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>&nbsp;/ Edit Card {card.id}
        </DisplayBreadcrumbs>

        <h3>Edit Card</h3>
        <label for="card-front">Front</label>
        <br />
        <textarea class="form-control" rows="3" name="card-front" type="text" onChange={ev => setFront(ev.target.value)}>{front}</textarea>

        <br />

        <label for="card-back">Back</label>
        <br />
        <textarea className="form-control" rows="3" name="card-back" type="text" onChange={ev => setBack(ev.target.value)} >{back}</textarea>
        <br />

        <Link to={`/decks/${deck.id}`} class="btn btn-secondary">Cancel</Link>
        {" "}

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </>
}

export default EditCard;