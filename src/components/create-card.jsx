import React from 'react';
import { AppContext } from '../appContext';
import { v4 as uuidv4 } from 'uuid';

class CreateCard extends React.Component {
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
        const { question, answer } = this.state;
        const newCard = {
            id: uuidv4(),
            question,
            answer
        }

        this.context.addCard(newCard);
        this.reset();
    }

    reset() {
        this.setState({
            question: '',
            answer: ''
        });
        this.context.setView('view-cards');
    }

    render() {
        const { question, answer } = this.state;
        return (
            <div className="container">
                <h1 className="text-center">Create New Card</h1>
                <form onSubmit={this.handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">Save Card</button>
                    </div>
                </form>
            </div>
        );
    }
}

CreateCard.contextType = AppContext;

export default CreateCard;