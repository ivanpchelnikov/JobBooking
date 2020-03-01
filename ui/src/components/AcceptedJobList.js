import React, { Component } from 'react';

class AcceptedJobList extends Component {

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
    return months[date.getMonth()]+' '+date.getDate()+' '+date.getFullYear()+' @ '+time;
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
             <div className="floatleft">
                <div>${this.props.card.price} Lead invitation</div>
             </div>
          </div>
          <div className="line"></div>
          <div className="contact-info card-section">
            <div className="floatleft">
              <div className="contact-detail"><a href="#">{this.props.card.contact_phone}</a></div>
            </div>
            <div className="floatleft">
              <div className="contact-detail"><a href="#">{this.props.card.contact_email}</a></div>
            </div>
          </div>
          <div className="description card-section white">{this.props.card.description}</div>
      </div>
    )
  }
}
export default AcceptedJobList