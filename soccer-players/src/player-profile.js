import React, { Component } from 'react';
import playerInfo from './json/profile-info.json';
import {Link} from 'react-router-dom';
import './player-profile.css';

class PlayerProfile extends Component {
  render() {
    return  <div className="card d-flex justify-content-center">
    <div className="card-body">
      <div className="col-12 d-flex p-4" id="card-title">
      <h6 className="card-title">Player profile</h6>
      </div>
      <div className="col-12 d-flex">
        <div className="col-4"><img width="250" src={playerInfo[this.props.match.params.id].picture}/></div>
        <div className="col-8" id="info-section">
            <div className="d-flex"><div className="col-3"><strong>Name:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].name}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Number:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].number}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Birthday:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].birthday}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Weight:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].weight}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Playing position(s):</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id]['Playing position(s)']}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Height:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].height}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Age:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].age}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Country:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].country}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Goals:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].goals}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Team:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].team}</span></div></div>
            <div className="d-flex"><div className="col-3"><strong>Salary:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id].salary}</span></div></div>
            <div className="d-flex col mt-5">
            <Link to="/"><button className="btn btn-primary">Back to Players List</button></Link>
            </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default PlayerProfile;