import React from 'react';
import { Progress } from 'reactstrap';
import './GameBox.css';

const ProgressBar = ({ amount, progress }) => {
  var progressBarElements = [];

  var progressValue = 100 / amount;

  for (var answer = 0; answer < progress.length; answer++) {
    progressBarElements.push(
      <Progress key={answer} bar className={progress[answer] ? '_Progress_O' : '_Progress_X'} value={progressValue} />
    );
  }
  return (
    <Progress multi>{progressBarElements}</Progress>
  )
}

export default ProgressBar;