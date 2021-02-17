import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import { AppContext } from '../appContext';

function ViewCards() {
  return (
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

            <div>
              <Link className='btn btn-purple btn-lg my-4' to='/add'>
                <i className='fa fa-plus mr-3'></i>Add card
              </Link>
            </div>
            <div>
              <button className='btn btn-navy btn-lg my-4' onClick={values.insertDummyData}>
                <i className='fas fa-file-import mr-3'></i>Import test cards
              </button>
            </div>
            <div>
              <button className='btn btn-navy btn-lg my-4' onClick={values.removeAllCards}>
                <i className='fas fa-dumpster mr-3'></i>Delete all cards
              </button>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default ViewCards;
