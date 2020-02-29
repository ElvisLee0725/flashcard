import React from 'react';
import { AppContext } from '../appContext';

class ReviewCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        };
        this.nextCard = this.nextCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
        this.handleToggleCard = this.handleToggleCard.bind(this);
    }

    nextCard(e) {
        e.stopPropagation();

        const { cards, activeCard, setActiveCard } = this.context;
        const index = cards.findIndex((card) => {
            return card.id === activeCard.id
        });

        // Move next index to 0 when it reaches the end of cards array:
        const nextIndex = index === cards.length - 1 ? 0 : index + 1;
        this.setState({
            showAnswer: false
        });
        setActiveCard(nextIndex);
    }

    previousCard(e) {
        e.stopPropagation();

        const { cards, activeCard, setActiveCard } = this.context;
        const index = cards.findIndex((card) => {
            return card.id === activeCard.id
        });

        // Move prev index to the last index when it reaches 0
        const nextIndex = index === 0 ? cards.length - 1 : index - 1;
        this.setState({
            showAnswer: false
        });
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
        const cssColor = this.state.showAnswer ? 'card-answer-bg' : 'card-question-bg';

        return (
            <div>
                <h1 className="text-center">Review Cards</h1>
                <div className="container">
                    <div className={`review-area mt-3 ${cssColor}`} onClick={this.handleToggleCard}>
                        <h2 className="card-content">{ displayContent }</h2>

                        <a className="prev-btn ml-3" onClick={this.previousCard}><i className="fa fa-chevron-left fa-3x"></i></a>
                        <a className="next-btn mr-3" onClick={this.nextCard}><i className="fa fa-chevron-right fa-3x"></i></a>    
                    </div>
                </div>
            </div>
        );
    }
}

ReviewCards.contextType = AppContext;

export default ReviewCards;