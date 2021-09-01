import './styles/App.css';
import TopNav from './components/TopNav';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
                </Switch>
            </div>
        </Router>
    );
}

export default App;
