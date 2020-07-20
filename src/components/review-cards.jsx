import React, { Fragment } from 'react';
import { AppContext } from '../appContext';
import ProgressBar from './progress-bar';

class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.handleToggleCard = this.handleToggleCard.bind(this);
  }

  componentDidMount() {
    const { setActiveCard, cards } = this.context;
    if (cards.length > 0) {
      setActiveCard(0);
    }
  }

  nextCard(e) {
    e.stopPropagation();

    const { cards, activeCard, setActiveCard } = this.context;
    const index = cards.findIndex((card) => {
      return card.id === activeCard.id;
    });

    // Move next index to 0 when it reaches the end of cards array:
    const nextIndex = index === cards.length - 1 ? 0 : index + 1;
    this.setState({
      showAnswer: false,
    });
    setActiveCard(nextIndex);
  }

  previousCard(e) {
    e.stopPropagation();

    const { cards, activeCard, setActiveCard } = this.context;
    const index = cards.findIndex((card) => {
      return card.id === activeCard.id;
    });

    // Move prev index to the last index when it reaches 0
    const nextIndex = index === 0 ? cards.length - 1 : index - 1;
    this.setState({
      showAnswer: false,
    });
    setActiveCard(nextIndex);
  }

  handleToggleCard() {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  }

  render() {
    const { activeCard, cards } = this.context;
    let content = '';
    let completePercentage = 0;

    if (activeCard) {
      // For ProgressBar
      const curIndex = cards.findIndex((card) => card.id === activeCard.id);
      completePercentage = Math.round((curIndex / cards.length) * 100);
      if (curIndex === cards.length - 1 && this.state.showAnswer) {
        completePercentage = 100;
      }

      // For Review Flash Cards
      const { showAnswer } = this.state;

      content = (
        <Fragment>
          <div className='review-area mt-1' onClick={this.handleToggleCard}>
            <h2 className='card-content'>
              {showAnswer ? activeCard.answer : activeCard.question}
            </h2>
          </div>
          <div className='text-center practice-progress mt-4'>
            <i
              className='fas fa-arrow-left fa-lg'
              onClick={this.previousCard}
            ></i>
            <span className='mx-5'>{`${curIndex + 1} / ${cards.length}`}</span>
            <i className='fas fa-arrow-right fa-lg' onClick={this.nextCard}></i>
          </div>
        </Fragment>
      );
    } else {
      content = (
        <h2 className='text-center mt-5'>There is no flashcards to display.</h2>
      );
    }

    return (
      <div>
        <div className='container mt-5'>
          <ProgressBar complete={completePercentage} />
          {content}
        </div>
      </div>
    );
  }
}

ReviewCards.contextType = AppContext;

export default ReviewCards;
