import React from 'react';
import { AppContext } from '../appContext';

class ReviewCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        }
        this.nextCard = this.nextCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
        this.handleToggleCard = this.handleToggleCard.bind(this);
    }

    nextCard() {
        const { cards, activeCard, setActiveCard } = this.context;
        const index = cards.findIndex((card) => {
            return card.id === activeCard.id
        });

        // Move next index to 0 when it reaches the end of cards array:
        const nextIndex = index === cards.length - 1 ? 0 : index + 1;
        setActiveCard(nextIndex);
    }

    previousCard() {
        const { cards, activeCard, setActiveCard } = this.context;
        const index = cards.findIndex((card) => {
            return card.id === activeCard.id
        });

        // Move prev index to the last index when it reaches 0
        const nextIndex = index === 0 ? cards.length - 1 : index - 1;
        setActiveCard(nextIndex);
    }

    handleToggleCard() {
        this.setState({
            showAnswer: !this.state.showAnswer
        });
    }

    render() {
        const { activeCard } = this.context;
        const displayContent = this.state.showAnswer ? activeCard.answer : activeCard.question;

        return (
            <div>
                <h1 className="text-center">Review Cards</h1>
                <div onClick={this.handleToggleCard}>
                    <h2>{ displayContent }</h2>
                </div>
                <button type="button" onClick={this.nextCard}>Next</button>
                <button type="button" onClick={this.previousCard}>Prev</button>
            </div>
            
        );
    }
}

ReviewCards.contextType = AppContext;

export default ReviewCards;