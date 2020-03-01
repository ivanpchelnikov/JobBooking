import React, { Component } from 'react';
import InvitedJobList from './InvitedJobList';
import AcceptedJobList from './AcceptedJobList';

class Tabs extends Component {
  render() {
    return (
      <div>
        <div className="tabsheader textcenter white">
          <div className={"tab floatleft " + ((this.props.activeTab === 'invited') ? "actived" : "") } onClick={() => this.props.selectTab('invited')}>
            Invited
          </div>
          <div className={"tab " + ((this.props.activeTab === 'accepted') ? "actived" : "") } onClick={() => this.props.selectTab('accepted')}>
            Accepted
          </div>
        </div>
        <div>
            { (this.props.activeTab === 'invited') ? 
               this.props.invited.map( card =>  <InvitedJobList key={card.id} card={card} updateStatus={this.props.updateStatus}/> )
              :
               this.props.accepted.map( card => {return <AcceptedJobList key={card.id} card={card} /> })
            }
        </div>
      </div>
    )
  }
} 
export default Tabs