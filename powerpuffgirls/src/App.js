import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EpisodeDetailPage from './components/EpisodeDetailPage'
import ShowDetailPage from './components/ShowDetailPage';
import './App.css'

function App() {
  return (
      <div className='App-header'> 
       <Route path="/" exact component={HomePage} />
       <Route path="/show/:id" component={ShowDetailPage}/>
       <Route path="/episode/:id" component={EpisodeDetailPage} />
      </div>
  );
}

export default App;
