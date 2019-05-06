import React from 'react';
import SelectCategory from './SelectCategory';
import './GameSettings.css';

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
      <div id="game-settings">
        <h1>Game Settings</h1>
        <SelectCategory />
      </div>
    )
  }
}