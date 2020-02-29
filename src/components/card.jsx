import React from 'react';

function Card(props) {
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <div className="card-body card-question-bg">
                    <h5 className="card-title text-muted">Question:</h5>
                    <p className="card-text">{props.question}</p>
                </div>
                <div className="card-body card-answer-bg">
                    <h5 className="card-title text-muted">Answer:</h5>
                    <p className="card-text">{props.answer}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;