import React from 'react';
import { Route, Switch } from 'react-router-dom'; //A <Switch> renders the first child <Route> that matches
import HomePage from './components/HomePage';
import EpisodeDetailPage from './components/EpisodeDetailPage';
import ShowDetailPage from './components/ShowDetailPage';
import Component404 from './components/Component404';
import './styles/App.css';

// Routing for three pages
function App() {
  return (
      <div className='App-header'> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/show/:id' component={ShowDetailPage}/>
        <Route exact path='/episode/:id' component={EpisodeDetailPage} />
        <Route component={Component404} />
       </Switch>
      </div>
  );
}

export default App;
