import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/topic/" component={Topic} />
                </div>
            </Router>
        );
    }
}

export default App;