import React, { Component } from 'react';
import './soccer-players-table.css';
import playersList from './json/players-list.json';
import Table from 'react-bootstrap/Table';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class SoccerPlayersTable extends Component {
    state = {
        soccerPlayersArray: playersList
    }
    rows = playersList;
    renderPlayer(player, index) {
        return (
          <tr key={index}>
            <td><Link to="/player-profile">{player.name}</Link></td>
            <td><img width="80" src={player.picture} alt={player.name}/></td>
            <td><img width="150" src={player.country} alt={player.name} /></td>
            <td><span>{player.Club}</span></td>
          </tr>
        )
      }

    render() {
       return  <div className="card d-flex justify-content-center">
       <div className="card-body">
         <h5 className="card-title">Soccer players list</h5>
         <Table striped bordered className="table">
               <thead>
                <tr>
                <th>Name</th>
                <th>Picture</th>
                <th>Country</th>
                <th>Club</th>
                </tr>
               </thead>
               <tbody>
                    {playersList.map(this.renderPlayer)}
               </tbody>
            </Table>
       </div>
     </div>
       
      }
}
