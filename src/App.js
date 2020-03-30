import React from 'react';
import LeftSide from './components/left'
import RightSide from './components/right';
import './app.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Women from './components/Screen/Women/women'
import Men from './components/Screen/Men/men'
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
            <Route path="/" component={RightSide} exact/>
            <Route path="/women" component={Women} />
            <Route path="/men" component={Men} />
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

//Inspirations from
//https://dribbble.com/shots/9404340-Shop-Clothing-Web-Page/attachments/1429040?mode=media

//https://dribbble.com/shots/9447445-Confirmation-and-Checkout/attachments/1472816?mode=media