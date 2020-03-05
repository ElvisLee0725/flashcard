import React from 'react';

export const AppContext = React.createContext({
    addCard: () => {},
    setView: () => {},
    setActiveCard: () => {},
    removeCard: () => {},
    view: '',
    cards: [],
    activeCard: undefined
});
