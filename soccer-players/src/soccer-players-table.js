import React, { Component } from 'react';
import './soccer-players-table.css';
import playersList from './json/players-list.json';
import Table from 'react-bootstrap/Table'

export default class SoccerPlayersTable extends Component {
    state = {
        soccerPlayersArray: playersList
    }
    rows = playersList;
    renderPlayer(player, index) {
        return (
          <tr key={index}>
            <td><strong>{player.name}</strong></td>
            <td><img width="100" src={player.picture}/></td>
            <td><img width="100" src={player.country}/></td>
            <td><span>{player.Club}</span></td>
          </tr>
        )
      }

    render() {
       return <section className="card">
           <Table striped bordered className="table">
               <thead>
                <tr>
                <th>Name</th>
                <th>picture</th>
                <th>country</th>
                <th>club</th>
                </tr>
               </thead>
               <tbody>
                    {playersList.map(this.renderPlayer)}
               </tbody>
            </Table>
           </section>
      }
}