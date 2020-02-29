import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import { AppContext } from '../appContext';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'view-cards',
            cards: [],
            addCard: (newCard) => this.addCard(newCard),
            setView: (view) => this.setView(view)
        };
        this.setView = this.setView.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    componentDidMount() {
        const cards = JSON.parse(localStorage.getItem('flash-cards'));
        if(cards) {
            this.setState({
                cards: JSON.parse(localStorage.getItem('flash-cards'))
            });
        }
    }

    setView(view) {
        this.setState({
            view
        });
    }

    getView() {
        switch(this.state.view) {
            case 'create-card':
                return <CreateCard />;
            
            case 'review-cards':
                return <ReviewCards />;
            
            case 'view-cards':
                return <ViewCards />;

            default:
                return null;
        }
    }

    saveCards() {
        localStorage.setItem('flash-cards', JSON.stringify(this.state.cards));
    }

    addCard(card) {
        this.setState({
            cards: [
                ...this.state.cards,
                card
            ]
        }, this.saveCards);
    }

    render() {
        return (
            <div>
                <AppContext.Provider value={this.state} >
                    <Nav />
                    { this.getView() }
                </AppContext.Provider>
            </div>
        );
    }
}

export default App;

