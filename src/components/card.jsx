import React from 'react';
import { Link } from 'react-router-dom';
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
    this.setSelectedCardActive();
  }

  setSelectedCardActive() {
    const index = cards.findIndex((card) => {
      return card.id === this.props.id;
    });

    if (index !== -1) {
      setActiveCard(index);
    }
  }

  render() {
    const { id, question, answer } = this.props;
    const { cards, setActiveCard, markCard } = this.context;

    return (
      <div className='col mb-4'>
        <div className='card h-100'>
          <div className='card-body'>
            <p className='card-text font-weight-bold'>{question}</p>
          </div>
          <div className='card-body'>
            <p className='card-text'>{answer}</p>
          </div>
          <div className='card-footer card-footer-bg text-center'>
            <div>
              <Modal
                handleDelete={() => {
                  const index = cards.findIndex((card) => {
                    return card.id === id;
                  });

                  if (index !== -1) {
                    setActiveCard(index);
                  }
                }}
              />
            </div>

            <Link to='/update'>
              <div>
                <i
                  className='far fa-edit fa-lg fa-fw icon-btn'
                  onClick={this.handleEdit}
                ></i>
              </div>
            </Link>

            <div>
              <i
                className='far fa-star fa-lg fa-fw icon-btn'
                onClick={() => markCard(id)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.contextType = AppContext;

export default Card;
