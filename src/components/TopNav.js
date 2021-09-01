import '../styles/TopNav.css';
import { NavLink } from 'react-router-dom';

export default function TopNav() {
    return (
        <div className="top-nav">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
            </NavLink>
            <NavLink
                exact
                to="/blog"
                className="nav-link"
                activeClassName="active"
            >
                Blog
            </NavLink>
        </div>
    );
}
