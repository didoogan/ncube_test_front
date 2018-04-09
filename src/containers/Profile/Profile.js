import React, { Component } from 'react';
import axios from 'axios';
import PageHeader from 'react-bootstrap/es/PageHeader';
import Aux from '../../hoc/Aux'

class Profile extends Component {
  state = {
    profile: null,
    profileIsLoaded: false
  }
  componentDidMount () {
    let profileId = this.props.match.params.id
    if (!this.state.profileIsLoaded) {
      axios.get(`/profiles/${profileId}/`)
        .then(response => {
          this.setState({profile: response.data, profileIsLoaded: true})
        })
    }
  }
  render () {
    let data = <div>Load...</div>
    if (this.state.profileIsLoaded) {
      let gender = this.state.profile.gender ? 'Male' : 'Female';
      if (this.state.profile.gender === null) { gender = 'Not determined'}
      data = (
        <div className="container">
          <PageHeader>
            <div align='center'>{this.state.profile.name}</div>
          </PageHeader>

          <p><strong>Birth day</strong>: {this.state.profile.birth_day}</p>
          <p><strong>Email</strong>: {this.state.profile.email}</p>
          <p><strong>Gender</strong>: {gender}</p>
          <p><strong>Cell phone</strong>: {this.state.profile.cell_phone}</p>
          <p><strong>Medical information</strong>: {this.state.profile.medical_information}</p>
          <p><strong>Medical condition</strong>: {this.state.profile.medical_condition}</p>
        </div>
      )
    }
    return (
      <Aux>{data}</Aux>
    )
  }
}

export default Profile