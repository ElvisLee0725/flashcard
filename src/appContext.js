import React from 'react';

export const AppContext = React.createContext({
    addCard: () => {},
    setView: () => {},
    setActiveCard: () => {},
    view: '',
    cards: [],
    activeCard: undefined
});
