import './App.css';
import SoccerPlayersTable from './soccer-players-table';
import PlayerProfile from './player-profile';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/player-profile" component={PlayerProfile}></Route>
          <Route exact path="/" component={SoccerPlayersTable}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;