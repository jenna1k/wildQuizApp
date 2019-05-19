import React from 'react';
import { Alert } from 'reactstrap';
import './GameBox.css';

const Question = ({ question }) => {
  return (
    <Alert color="info" className="lert-heading d-flex justify-content-center question-container">
      <h2 className="_question alert-heading d-flex justify-content-center">
        {question}
      </h2>
    </Alert>
  )
}

export default Question;
