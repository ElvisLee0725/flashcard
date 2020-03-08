import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import UpdateCard from './update-card';
import Nav from './nav';
import { AppContext } from '../appContext';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'view-cards',
            cards: [],
            activeCard: undefined,
            addCard: (newCard) => this.addCard(newCard),
            setView: (view) => this.setView(view),
            setActiveCard: (index) => this.setActiveCard(index),
            removeCard: () => this.removeCard()
        };
        this.setView = this.setView.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    componentDidMount() {
        try {
            const cards = JSON.parse(localStorage.getItem('flash-cards'));
            if(cards) {
                this.setState({
                    cards
                });
            }
        }
        catch(error) {
            console.log(error.message);
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

            case 'update-card':
                return <UpdateCard />;

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

    setActiveCard(index) {
        this.setState((prevState) => ({
            activeCard: prevState.cards[index]
        }));
    }

    removeCard() {
        this.setState({
            cards: this.state.cards.filter((card) => {
                return card.id !== this.state.activeCard.id;
            })
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

