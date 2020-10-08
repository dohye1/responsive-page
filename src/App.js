import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/Nav';
import Flex from './component/Flex';
import Grid from './component/Grid';

import './App.scss';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Flex} />
                    <Route path="/grid" component={Grid} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
