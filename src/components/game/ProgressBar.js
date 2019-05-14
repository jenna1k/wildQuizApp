import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = ({ amount, progress }) => {
  var progressBarElements = [];

  var progressValue = 100 / amount;

  for (var answer = 0; answer < progress.length; answer++) {
    progressBarElements.push(
      <Progress key={answer} bar color={progress[answer] ? "success" : "danger"} value={progressValue} />
    );
  }
  return (
    <Progress multi>{progressBarElements}</Progress>
  )
}

export default ProgressBar;