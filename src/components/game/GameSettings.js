import React from 'react';
import SelectCategory from './SelectCategory';
import './GameSettings.css';

export default class GameSettings extends React.Component {
  constructor(props) {
    super(props);

    this.setCategoryHandler = this.setCategoryHandler.bind(this);
    this.state = {
      difficulty: "",
      category: "any", // API call: <url> + (this.state.category == "any" ? "" : ("&category=" + this.state.category))
      amount: 10
    };
  }

  setCategoryHandler(category) {
    this.setState({
      category: category
    })
  }

  render() {
    return (
      <div id="game-settings">
        <h1>Game Settings</h1>
        <SelectCategory setCategoryHandler={this.setCategoryHandler} />
      </div>
    )
  }
}