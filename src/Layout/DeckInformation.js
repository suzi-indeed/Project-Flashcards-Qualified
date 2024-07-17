import { useState } from "react";
import { Link } from "react-router-dom";

function DeckInromation({ deck }) {
    return (
        <div className="card">
            <div className="card-body" >
                <div style={{ display: "flex", justifyContent: "space-between",alignItems: "center" }}>
                        {/*Header and counter*/}
                        <h5 class="card-title">{deck.name} </h5>
                        <p>{deck.cards.length} cards</p>
                </div>

                <p className="card-text">{deck.description}</p>

                {/*View button*/}
                <Link to={`/decks/${deck.id}`}>
                        <button className="btn btn-secondary" style={{ margin: "4px" }}> <i className="oi oi-eye"></i> View</button>
                </Link>

                {/*Study button*/}
                <Link to={`/decks/${deck.id}/edit`}>
                <button className="btn btn-primary" style={{ margin: "4px" }}><i class="oi oi-book"></i> Study</button>
                </Link>

                {/*Delete button*/}
                <button className="btn btn-danger" style={{ float: "right" }}> <i className="oi oi-trash"></i> </button>
            </div>
            <i className="bi bi-arrow-clockwise"></i>
        </div>
    );
}


export default DeckInromation;