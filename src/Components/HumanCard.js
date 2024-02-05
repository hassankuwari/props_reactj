import React from 'react'
import Card from 'react-bootstrap/Card';

const HumanCard = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.humanName}</Card.Title>
        <Card.Text>
          <h6>{props.age}</h6>
          <h6>{props.gender}</h6>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default HumanCard

