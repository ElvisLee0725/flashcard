import React from 'react';

export const AppContext = React.createContext({
  addCard: () => {},
  editCard: () => {},
  markCard: () => {},
  setActiveCard: () => {},
  removeCard: () => {},
  cards: [],
  markedCards: [],
  activeCard: undefined,
});
