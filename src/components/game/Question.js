import React from 'react';
import { Alert } from 'reactstrap';
import './GameBox.css';

const Question = ({ question }) => {
  return (
    <Alert color="info" className="_Question">
      <h2 className="alert-heading d-flex justify-content-center">
        {question}
      </h2>
    </Alert>
  )
}

export default Question;
