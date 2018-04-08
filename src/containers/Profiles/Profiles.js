import React, { Component } from 'react';
import axios from 'axios';
import ProfileItem from '../../components/ProfileItem/ProfileItem';
import Table from 'react-bootstrap/lib/Table';

class Profiles extends Component {
  state = {
    profiles: null,
    profilesLoaded: false
  }
  componentDidMount() {
    axios.get('/profiles/')
      .then(response => {
        console.log(response)
        this.setState({profiles: response.data, profilesLoaded: true})
      })
  }

  sendInvite (name) {
    alert('send invite hendler  ' + name);
  }

  render() {
    let profiles = <tbody>Load data...</tbody>;
    if(this.state.profilesLoaded) {
      profiles = this.state.profiles.map(profile =>
        (
          <ProfileItem
            id={profile.id}
            key={profile.id}
            name={profile.name}
            email={profile.email}
            phone={profile.phone}
            address={profile.address}
            invited={profile.invited}
            clicked={() => this.sendInvite(profile.name)}
          ></ProfileItem>
        ))
    }
    return (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Patient name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Invite</th>
          </tr>
          </thead>
          {profiles}
        </Table>
    );
  }
}

export default Profiles;
