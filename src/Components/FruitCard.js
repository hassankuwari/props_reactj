import React from 'react'
import { Card } from 'react-bootstrap'

const FruitCard = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.FruitName}</Card.Title>
        <Card.Text>
          <h6>{props.FruitCity}</h6>
          <h6>{props.FruitRate}</h6>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default FruitCard
