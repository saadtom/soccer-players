import React, { Component } from 'react';
import playerInfo from './json/profile-info.json';
import {Link} from 'react-router-dom';
import './player-profile.css';

class PlayerProfile extends Component {

  renderPlayerInfo () {
    return (
      <div>
        {Object.keys(playerInfo[this.props.match.params.id]).map((val, index) => {
          if (val !== 'id' && val !== 'picture') {
              return <div className="d-flex" key={index}><div className="col-4"><strong>{val.toLocaleUpperCase()}:</strong></div><div className="col"><span>{playerInfo[this.props.match.params.id][val]}</span></div></div>
          } else {
            return ''
          }
        })}
      </div>
    )
  }

  render() {
    return  <div className="card d-flex justify-content-center">
    <div className="card-body">
      <div className="col-12 d-flex p-4" id="card-title">
      <h6 className="card-title">Player profile</h6>
      </div>
      <div className="col-12 d-flex">
        <div className="col-4"><img width="250" src={playerInfo[this.props.match.params.id].picture} alt="player" /></div>
        <div className="col-8" id="info-section">
            {this.renderPlayerInfo()}
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