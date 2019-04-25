import React from 'react';
import Gamebox from '../components/Gamebox';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInProgress: false
    };
  }
  render() {
    return (
      <div>
        <Gamebox />
      </div>
    )
  }
}