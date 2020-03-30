import React from 'react';
import LeftSide from './components/left'
import RightSide from './components/right';
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Women from './components/Screen/women'
import Navbar from './components/right/navbar/navbar'
import './components/right/right.scss'

function App() {
  return (
    <div className="app">
      <Router>

        <div className='left-holder'>
          <LeftSide />
        </div>
        <div className='right-holder'>
          <Navbar/>
          <Switch>
            <Route path="/home" component={RightSide} />
            <Route path="/women" component={Women} />
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
