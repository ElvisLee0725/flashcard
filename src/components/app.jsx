import React, { Fragment } from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import MarkedCards from './marked-cards';
import CreateCard from './create-card';
import UpdateCard from './update-card';
import NotFound from './not-found';
import Nav from './nav';
import { AppContext } from '../appContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: [],
      markedCards: [],
      activeCard: undefined,
      addCard: (newCard) => this.addCard(newCard),
      editCard: (card) => this.editCard(card),
      markCard: (id) => this.markCard(id),
      setView: (view) => this.setView(view),
      setActiveCard: (index) => this.setActiveCard(index),
      removeCard: () => this.removeCard(),
    };
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  componentDidMount() {
    try {
      const cards = JSON.parse(localStorage.getItem('flash-cards'));
      if (cards) {
        this.setState({
          cards,
          markedCards: cards.filter((card) => card.marked),
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  setView(view) {
    this.setState({
      view,
    });
  }

  getView() {
    switch (this.state.view) {
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
    this.setState(
      {
        cards: [...this.state.cards, card],
      },
      this.saveCards
    );
  }

  editCard(updatedCard) {
    this.setState(
      (prevState) => ({
        cards: prevState.cards.map((card) => {
          if (card.id === updatedCard.id) {
            return {
              ...card,
              ...updatedCard,
            };
          } else {
            return card;
          }
        }),
      }),
      this.saveCards
    );
  }

  markCard(id) {
    this.setState(
      (prevState) => ({
        cards: prevState.cards.map((card) => {
          if (card.id === id) {
            card.marked = !card.marked;
          }
          return card;
        }),
      }),
      this.setMarkedCards
    );
  }

  // Re-generate markedCards array since cards array is updated, and update the cards stored in localStorage
  setMarkedCards() {
    this.setState(
      {
        markedCards: this.state.cards.filter((card) => card.marked),
      },
      this.saveCards
    );
  }

  setActiveCard(index) {
    this.setState((prevState) => ({
      activeCard: prevState.cards[index],
    }));
  }

  removeCard() {
    this.setState(
      {
        cards: this.state.cards.filter((card) => {
          return card.id !== this.state.activeCard.id;
        }),
      },
      this.saveCards
    );
  }

  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <Nav />
          <Switch>
            <Route exact path='/' component={ViewCards} />
            <Route exact path='/practice' component={ReviewCards} />
            <Route exact path='/marked' component={MarkedCards} />
            <Route exact path='/add' component={CreateCard} />
            <Route exact path='/update' component={UpdateCard} />
            <Route component={NotFound} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
