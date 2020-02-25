import React from 'react';

function Nav(props) {
    const { curView } = props;
    console.log(curView);
    const viewActive = curView === 'view-cards' ? 'active' : ''; 
    const reviewActive = curView === 'review-cards' ? 'active' : ''; 
    const createActive = curView === 'create-card' ? 'active' : ''; 

    return (
        <div className="nav-container">
            <nav className="nav nav-pills nav-justified">
                <a className={`nav-item nav-link ${viewActive}`} onClick={props.setView} id="view-cards">View Cards</a>
                <a className={`nav-item nav-link ${reviewActive}`} onClick={props.setView} id="review-cards">Review</a>
                <a className={`nav-item nav-link ${createActive}`} onClick={props.setView} id="create-card">Create Card</a>
            </nav>
        </div>
    );
}

export default Nav;