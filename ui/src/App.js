import React, { Component } from 'react';
import Tabs from "./components/Tabs";
import axios from "axios";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      all: [],
      invited: [],
      accepted: [],
      selectedTab: 'invited'
    }
  }
  selectTab = (tab) => {
    this.setState({
      selectedTab: tab
    })
  }

  updateStatus = (id, status) => {
    axios.put('http://localhost:8080/api/v1/jobbooking', { id: id, status: status})
    .then( res => {
      let allJobs = this.state.all;
      let updatedJob = allJobs.map( card => {
                                      if( card.id === id ) {
                                        card.status = status
                                      }
                                      return card
                                    })
      this.setState({ all: updatedJob,
        invited: updatedJob.filter( card => { return card.status === 'new' }),
        accepted: updatedJob.filter( card => { return card.status === 'accepted' })
      })
    })
    .catch( error => {
      console.log(error)
    })
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/v1/jobbooking')
         .then( (res) => {
            this.setState({ all: res.data,
                            invited: res.data.filter( card => { return card.status === 'new' }),
                            accepted: res.data.filter( card => { return card.status === 'accepted' })
                          })
          })
         .catch( error => {
           console.log(error)
         })
  }

  render() {
    return (

      <div className="App">
        <Tabs activeTab={this.state.selectedTab} 
              invited={this.state.invited} 
              accepted={this.state.accepted} 
              updateStatus={this.updateStatus}
              selectTab={this.selectTab} />
      </div>
    );
  }
}

export default App;
 