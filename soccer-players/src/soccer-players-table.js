import React, { Component } from 'react';
import axios from 'axios';
import './soccer-players-table.css';

export default class SoccerPlayersTable extends Component {
    state = {
        soccerPlayersArray: []
    }

    componentDidMount() {
        axios.get(`https://v3.football.api-sports.io/players?id=276&season=2019`, {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "be8b591623mshdbaa2d92a2c0ea8p133325jsn0b45d3589f7c"
          }
        }).then(res => {
            const soccerPlayers = res.data;
            console.log(soccerPlayers);
            this.setState({ soccerPlayers });
          })
    }

    render() {
        return(
         <section>
              <div className="card">
                Tommy
               </div>
         </section>
        )
      }
}
