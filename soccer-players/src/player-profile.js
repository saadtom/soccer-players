import React, { Component } from 'react';
import playersList from './json/players-list.json';
import './player-profile.css';

class PlayerProfile extends Component {
  render() {
    return  <div className="card d-flex justify-content-center">
    <div className="card-body">
      <div className="col-12 d-flex p-4" id="card-title">
      <h6 className="card-title">Player profile</h6>
      </div>
      <div className="col-12 d-flex">
        <div className="col-4"><img width="250" src={playersList[0].picture}/></div>
        <div className="col-8" id="info-section">
            <div className="d-flex"><div className="col-3"><strong>Name:</strong></div><div className="col"><span>Tommy</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Number:</strong></div><div className="col"><span>7</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Birthday:</strong></div><div className="col"><span>7</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Weight:</strong></div><div className="col"><span>65 kg</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Playing position(s):</strong></div><div className="col"><span>Forward</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Height:</strong></div><div className="col"><span>1.70 m (5 ft 7 in)</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Age:</strong></div><div className="col"><span>20</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Country:</strong></div><div className="col"><span>France</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Goals:</strong></div><div className="col"><span>15</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Team:</strong></div><div className="col"><span>PSG</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Salary:</strong></div><div className="col"><span>26 million GBP (2020)</span></div></div>
            <div className="d-flex col mt-5">
            <button className="btn btn-primary">Back to Players List</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default PlayerProfile;