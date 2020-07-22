import React, { Fragment } from 'react';
import { AppContext } from '../appContext';

const MarkedCards = () => {
  return (
    <AppContext.Consumer>
      {(values) => (
        <div className='container text-center mt-5'>
          {values.markedCards.length > 0 ? (
            <div className='container'>Marked Cards</div>
          ) : (
            <Fragment>
              <h3>Oops...you don't have any marked card yet.</h3>
              <h5>Check the star on cards you want to mark at "All cards".</h5>
            </Fragment>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default MarkedCards;
