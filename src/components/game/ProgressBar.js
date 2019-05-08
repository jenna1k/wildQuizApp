import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = ({question})=> {
  return(
    <Progress multi>
      <Progress bar color="pink" value="17" />
      <Progress bar color="success" value="17" />
      <Progress bar color="info" value="17" />
      <Progress bar color="warning" value="17" />
      <Progress bar color="secondary" value="17" />
      <Progress bar color="danger" value="17" />
    </Progress>
  )
}

export default ProgressBar;