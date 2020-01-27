import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EpisodeDetailPage from './components/EpisodeDetailPage'

function App() {
  return (
    <div className="App">
       <Route path="/" exact component={HomePage} />
       <Route path="/episode/:id" component={EpisodeDetailPage} />
    </div>
  );
}

export default App;
