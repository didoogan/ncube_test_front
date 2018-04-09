import React, { Component } from 'react';
import axios from 'axios';
import ProfileItem from '../../components/ProfileItem/ProfileItem';
import Table from 'react-bootstrap/lib/Table';
import Aux from '../../hoc/Aux';

class Profiles extends Component {
  state = {
    profiles: null,
    profilesLoaded: false
  }
  componentDidMount() {
    this.loadProfies()
  }

  componentDidUpdate () {
    if (!this.state.profiles) { this.loadProfies() }
  }

  loadProfies = () => {
    (async () => {
      let response = await axios.get('/profiles/');
      console.log(response);
      this.setState({profiles: response.data, profilesLoaded: true});
    })()
  }

  sendInviteHandler (profileId) {
    (async () => {
      let response = await axios.post('/send-invite/', {profile: profileId});
      if (response.status === 200) { alert('Invitation has been successfully sent.')}
    })()
  }

  render() {
    let profiles = 'Load data...';
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
            clicked={() => this.sendInviteHandler(profile.id)}
          ></ProfileItem>
        ))
    }
    return (
      <Aux>
        <Table striped bordered condensed hover style={{margin: 'auto', width: '80%'}}>
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
      </Aux>
    );
  }
}

export default Profiles;
