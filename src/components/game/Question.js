import React from 'react';
import { Alert } from 'reactstrap';

const Question = ({question})=> {
    return(
    <Alert color="info">
        <h2 className="alert-heading d-flex justify-content-center">
            {question}
        </h2>
    </Alert>
    )
}

export default Question;