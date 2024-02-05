import React from 'react'
import { Card } from 'react-bootstrap'

const ReportCard = (props) => {
  console.log("report card props",props);
  return (
    <div>

      
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.studentName}</Card.Title>
          {/* <Card.Text> */}
            <div>{props.studentStd}</div>
            <div>{props.studentPercentage}</div>
            {/* <h5>{props.studentStd}</h5>
            <h5>{props.studentPercentage}</h5> */}
          {/* </Card.Text> */}
        </Card.Body>
      </Card>


    </div>

  )
}

export default ReportCard
