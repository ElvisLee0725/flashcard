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
            activeCard: undefined,
            addCard: (newCard) => this.addCard(newCard),
            setView: (view) => this.setView(view),
            setActiveCard: (index) => this.setActiveCard(index)
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
                }, () => this.setActiveCard(0));    // Wrap the callback to an anonymous function so I can pass argument
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

    render() {
        if(this.state.activeCard && Object.entries(this.state.activeCard).length > 0) {
            console.log(this.state.activeCard);
        }
        
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

