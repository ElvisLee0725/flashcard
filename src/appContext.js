import React from 'react';

export const AppContext = React.createContext({
  addCard: () => {},
  editCard: () => {},
  markCard: () => {},
  setView: () => {},
  setActiveCard: () => {},
  removeCard: () => {},
  view: '',
  cards: [],
  markedCards: [],
  activeCard: undefined,
});
