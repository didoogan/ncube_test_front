import React from 'react'
import Button from 'react-bootstrap/es/Button'

const reactItem = (props) => (
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.address}</td>
          <td><Button bsStyle="success" onClick={props.clicked} disabled={props.invited}>Send invite</Button></td>
        </tr>
      </tbody>
)

export default reactItem