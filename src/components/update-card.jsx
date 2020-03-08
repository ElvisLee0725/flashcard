import React from 'react';
import { AppContext } from '../appContext';

class UpdateCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { activeCard } = this.context;
        return (
            <div className="container">
                <h1 className="text-center">Update Card</h1>
                <p>{activeCard.question}</p>
                <p>{activeCard.answer}</p>
            </div>
        );
    }
}

UpdateCard.contextType = AppContext;

export default UpdateCard;