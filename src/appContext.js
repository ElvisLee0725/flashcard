import React from 'react';

export const AppContext = React.createContext({
    addCard: () => {},
    setView: () => {},
    view: ''
});
