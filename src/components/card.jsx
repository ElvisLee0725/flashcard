import React from 'react';
import { AppContext } from '../appContext';
import Modal from './modal';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    // Set the activeCard as the card selected to delete
    handleDelete() {
        this.setSelectedCardActive();
    }

    // Set the activeCard as the card selected to edit
    handleEdit() {
        const { setView } = this.context;
        this.setSelectedCardActive();
        setView('update-card');
    }

    setSelectedCardActive() {
        const { cards, setActiveCard } = this.context; 
        const index = cards.findIndex((card) => {
            return card.id === this.props.id;
        });

        if(index !== -1) {
            setActiveCard(index);
        }
    }

    render() {
        return (
            <div className="col mb-4">
                <div className="card h-100">
                    <div className="card-body card-question-bg">
                        <h5 className="card-title text-muted">Question:</h5>
                        <p className="card-text">{this.props.question}</p>
                    </div>
                    <div className="card-body card-answer-bg">
                        <h5 className="card-title text-muted">Answer:</h5>
                        <p className="card-text">{this.props.answer}</p>
                    </div>
                    <div className="card-footer card-footer-bg text-center">
                        <i className="fa fa-edit icon-btn mr-1" onClick={this.handleEdit}></i>
                        <Modal handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
}

Card.contextType = AppContext;

export default Card;