import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import './styles/App.css';
import TopNav from './components/TopNav';
import Main from './pages/Main/Main';
import BottomNav from './components/BottomNav';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="circle"></div>
                <div className="blur"></div>
                <TopNav />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return <Redirect to="/home" />;
                        }}
                    />
                    <Route exact strict path="/home" component={Main} />
                    <Route exact strict path="/blog" component={Main} />
                </Switch>

                <BottomNav name="Greetings" />
            </div>
        </Router>
    );
}

export default App;
