import React from 'react';
import { AppContext } from '../appContext';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(e) {
        this.context.setView(e.target.id);
    }

    render() {
        const curView = this.context.view;

        const viewActive = curView === 'view-cards' ? 'active' : ''; 
        const reviewActive = curView === 'review-cards' ? 'active' : ''; 
        const createActive = curView === 'create-card' ? 'active' : ''; 

        return (
            <div className="nav-container">
                <nav className="nav nav-pills nav-justified">
                    <a className={`nav-item nav-link ${viewActive}`} onClick={this.showComponent} id="view-cards">View Cards</a>
                    <a className={`nav-item nav-link ${reviewActive}`} onClick={this.showComponent} id="review-cards">Review</a>
                    <a className={`nav-item nav-link ${createActive}`} onClick={this.showComponent} id="create-card">Create Card</a>
                </nav>
            </div>
        );
    }
}

Nav.contextType = AppContext;

export default Nav;