import React from 'react';
import './App.css';
import Images from './components/Images'
import About from './components/About'
import NotFound from './components/NotFound'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Images} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
