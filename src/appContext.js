import React from 'react';

export const AppContext = React.createContext({
  addCard: () => {},
  editCard: () => {},
  markCard: () => {},
  setActiveCard: () => {},
  removeCard: () => {},
  insertDummyData: () => {},
  cards: [],
  markedCards: [],
  activeCard: undefined,
});
