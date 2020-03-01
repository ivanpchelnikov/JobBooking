import React, { Component } from 'react';

class InvitedJobList extends Component {

  formatDateTime(createDate) {
    let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let date = new Date(createDate);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    let time = hours + ':' + minutes + ' ' + ampm;
    return months[date.getMonth()]+' '+date.getDate()+' @ '+time;
  }
  render() {
    return (
        <div className="card white">
          <div className="card-section">
              <span className="card-image">{this.props.card.contact_name.charAt(0)}</span>
              <span className= "nametime">
                <div className="card-name" >{this.props.card.contact_name.split(" ")[0]}</div>
                <div className="card-time" >{this.formatDateTime(this.props.card.created_at)}</div>
              </span>
          </div>        
          <div className="line"></div>
          <div className="location-info card-section white">
             <div className="floatleft">
                 <div>{this.props.card.location + ' ' + this.props.card.postcode}</div>
             </div>
             <div className="floatleft">
                 <div >{this.props.card.category}</div>
             </div>
             <div className="floatleft">
                 <div>Job ID: {this.props.card.id}</div>
             </div>
          </div>
          <div className="line"></div>
          <div className="description card-section white">{this.props.card.description}</div>
          <div className="line"></div>
          <div className="white card-section ">
              <span className="action-buttons">
                <button className="button button-accept" onClick={ () => this.props.updateStatus(this.props.card.id, 'accepted')}>Accept</button>
                <button className="button" onClick={ () => this.props.updateStatus(this.props.card.id, 'declined')}>Decline</button>
              </span>
              <span className="price">${this.props.card.price} Lead invitation</span>
          </div>
      </div>
    )
  }
}
export default InvitedJobList