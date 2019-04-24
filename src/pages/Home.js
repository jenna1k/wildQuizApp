import React from 'react';

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
        Home
      </div>
    )
  }
}