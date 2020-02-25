import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'view-cards'
        };
        this.setView = this.setView.bind(this);
    }

    setView(e) {
        const curView = e.target.id;
        this.setState({
            view: curView
        });
    }

    getView() {
        switch(this.state.view) {
            case 'create-card':
                return <CreateCard />;
            
            case 'review-cards':
                return <ReviewCards />;
            
            case 'view-cards':
                return <ViewCards />;

            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <Nav setView={this.setView} curView={this.state.view}/>
                { this.getView() }
            </div>
        );
    }
}

export default App;

