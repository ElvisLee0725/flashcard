import React from 'react';
import { AppContext } from '../appContext';
import { v4 as uuidv4 } from 'uuid';

class CardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange({ target: {name, value }}) {
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { view, activeCard, addCard, editCard } = this.context;
        const { question, answer } = this.state;
        
        if(view === 'create-card'){
            const newCard = {
                id: uuidv4(),
                question,
                answer
            };
            addCard(newCard);
        }
        else {
            const card = {
                id: activeCard.id,
                question,
                answer
            };
            editCard(card);
        }

        this.reset();
    }

    reset() {
        this.setState({
            question: '',
            answer: ''
        });
        this.context.setView('view-cards');
    }

    componentDidMount() {
        const { view, activeCard } = this.context;

        if(view === 'update-card' && activeCard) {
            this.setState({
                question: activeCard.question,
                answer: activeCard.answer
            });
        }
    }

    render() {
        const { question, answer } = this.state;
        const title = this.context.view === 'create-card' ? 'Create New Card' : 'Update Card';

        return (
            <div className="container">
                <h1 className="text-center">{title}</h1>
                <form className="mt-5" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="question">Question:</label>
                        <textarea type="text" className="form-control" value={question} name="question" onChange={this.handleChange} autoFocus></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="answer">Answer:</label>
                        <textarea type="text" className="form-control" value={answer} name="answer" onChange={this.handleChange}></textarea>
                    </div>
                    
                    <div className="form-group text-right">
                        <button type="button" className="btn btn-danger mr-2" onClick={this.reset}>Cancel</button>
                        <button type="submit" className="btn btn-success">Save Card</button>
                    </div>
                </form>
            </div>
        );
    }
}

CardForm.contextType = AppContext;

export default CardForm;