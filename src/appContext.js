import React from 'react';

export const AppContext = React.createContext({
    addCard: () => {},
    editCard: () => {},
    setView: () => {},
    setActiveCard: () => {},
    removeCard: () => {},
    view: '',
    cards: [],
    activeCard: undefined
});
