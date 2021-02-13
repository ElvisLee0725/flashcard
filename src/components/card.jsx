import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../appContext';
import DeleteModal from './delete-modal';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, question, answer, marked } = this.props;
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
              <DeleteModal
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
                  onClick={() => {
                    const index = cards.findIndex((card) => {
                      return card.id === id;
                    });

                    if (index !== -1) {
                      setActiveCard(index);
                    }
                  }}
                ></i>
              </div>
            </Link>

            <div>
              {marked ? (
                <i
                  className='fas fa-star fa-lg fa-fw icon-starBtn'
                  onClick={() => markCard(id)}
                ></i>
              ) : (
                <i
                  className='far fa-star fa-lg fa-fw icon-btn'
                  onClick={() => markCard(id)}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.contextType = AppContext;

export default Card;
