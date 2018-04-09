import React from 'react';
import { withRouter } from 'react-router';

export default function isAuth (Component) {

  class AuthenticatedComponent extends React.Component {

    render() {
      return !!localStorage.getItem('token')
        ? <Component { ...this.props } />
        : null;
    }

  }

  return withRouter(AuthenticatedComponent);
}