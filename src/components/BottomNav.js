import '../styles/BottomNav.css';

import { NavHashLink } from 'react-router-hash-link';

export default function BottomNav({ names }) {
    return (
        <div className="bottom-nav">
            <NavHashLink
                className="bottom-nav-link"
                to="/home#greetings"
                activeClassName="active"
                activeStyle={{ color: 'red' }}
            >
                <button>{names[0]}</button>
            </NavHashLink>
            <NavHashLink
                className="bottom-nav-link"
                to="/home#experiences"
                activeClassName="active"
                activeStyle={{ color: 'red' }}
            >
                <button>{names[1]}</button>
            </NavHashLink>
            <NavHashLink
                className="bottom-nav-link"
                to="/home#educations"
                activeClassName="active"
                activeStyle={{ color: 'red' }}
            >
                <button>{names[2]}</button>
            </NavHashLink>
        </div>
    );
}
