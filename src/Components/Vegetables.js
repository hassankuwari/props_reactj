import React from 'react'
import { Card } from 'react-bootstrap'

const Vegetables = (props) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.VegetableName}</Card.Title>
        <Card.Text>
          <h6>{props.VegetableRate}</h6>
          <h6>{props.VegetableWeight}</h6>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Vegetables
