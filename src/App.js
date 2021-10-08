import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import './styles/App.css';
import TopNav from './components/TopNav';
import Main from './pages/Main/Main';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="circle"></div>
                <div className="blur"></div>
                <TopNav />
                <Switch>
                    <Route exact strict path="/" component={Main} />
                    <Route exact strict path="/blog" component={Main} />
                    <Route
                        render={() => {
                            return <Redirect to="/" />;
                        }}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
