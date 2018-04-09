import React from 'react'
import Button from 'react-bootstrap/es/Button'
import NavLink from 'react-router-dom/NavLink';
import Aux from '../../hoc/Aux';

const profileListItem = (props) => (
    <Aux>
      <tbody>
        <tr>
          <td>
            <NavLink to={{pathname: `/profile/${props.id}`}}>{props.name}</NavLink>
          </td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.address}</td>
          <td><Button bsStyle='success' onClick={props.clicked} disabled={props.invited}>Send invite</Button></td>
        </tr>
      </tbody>
    </Aux>
)

export default profileListItem
