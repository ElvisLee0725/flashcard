import React from 'react';
import Card from './card';
import { AppContext } from '../appContext';

function ViewCards() {
    return (
        <div>
            <h1 className="text-center">My Cards</h1>
            <AppContext.Consumer>
                {(values) => {
                    const allCards = values.cards.map((card) => {
                        return <Card key={card.id} {...card} />
                    });

                    return (
                        <div className="container mt-5">
                            <div className="row row-cols-1 row-cols-md-3">
                                { allCards }
                            </div>
                        </div>
                    );
                }}
            </AppContext.Consumer>
        </div>
    );
}

export default ViewCards;