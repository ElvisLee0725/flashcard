import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import { AppContext } from '../appContext';

function ViewCards() {
  return (
    <div>
      <AppContext.Consumer>
        {(values) => {
          return (
            <div className='container text-center mt-5'>
              {values.cards.length === 0 ? (
                <Fragment>
                  <h3>Oops...looks like you have no flashcards.</h3>
                  <h5>Start creating by clicking the "Add card" button.</h5>
                </Fragment>
              ) : (
                <Fragment>
                  <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                    {values.cards.map((card) => {
                      return <Card key={card.id} {...card} />;
                    })}
                  </div>
                </Fragment>
              )}

              <Link className='btn btn-navy btn-lg my-4' to='/add'>
                <i className='fa fa-plus mr-3'></i>Add card
              </Link>
            </div>
          );
        }}
      </AppContext.Consumer>
    </div>
  );
}

export default ViewCards;
