import '../styles/BottomNav.css';

import { NavHashLink } from 'react-router-hash-link';

export default function BottomNav({ name }) {
    return (
        <div className="bottom-nav">
            <NavHashLink
                className="bottom-nav-link"
                to="/home#greetings"
                activeClassName="active"
                activeStyle={{ color: 'red' }}
            >
                <button>{name}</button>
            </NavHashLink>
            <NavHashLink
                className="bottom-nav-link"
                to="/home#eperiences"
                activeClassName="active"
                activeStyle={{ color: 'red' }}
            >
                <button>{name}</button>
            </NavHashLink>
            <NavHashLink
                className="bottom-nav-link"
                to="/home#educations"
                activeClassName="active"
                activeStyle={{ color: 'red' }}
            >
                <button>{name}</button>
            </NavHashLink>
        </div>
    );
}
