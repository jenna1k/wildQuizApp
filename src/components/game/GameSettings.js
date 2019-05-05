import React from 'react';

export default class GameSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: "",
      category: "",
      amount: 10
    };
  }

  render() {
    return (
      <div>Game Settings</div>
    )
  }
}