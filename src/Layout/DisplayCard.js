import React from 'react';
import { Link } from "react-router-dom";

function Displaycard({ card }) {
    return (
        <>
            <div className="card">
                <div className="card-body" >
                    <div class="row">
                        <div class="col">
                            <p class="card-title">{card.front} </p>
                        </div>
                        <div class="col">
                            <p className="card-text">{card.back}</p>
                            <div style={{ textAlign: "right" }}>
                                <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                                    <button className="btn btn-secondary"><i class="oi oi-pencil"></i> Edit</button>
                                </Link>
                                {" "}
                                <button className="btn btn-danger"> <i className="oi oi-trash"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Displaycard;