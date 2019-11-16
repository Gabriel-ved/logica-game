import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './pages/Main';
import Jogo from './pages/Jogo';
import './style.css';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/1' component={Jogo}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
