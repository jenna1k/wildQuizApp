import React from 'react';
import GameBox from '../components/game/GameBox';
import GameSettings from '../components/game/GameSettings';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'quiz', // 'customization', 'quiz', 'result'
      quiz: {},
      score: 0,
      answered: false,
      progress: 0
    };

    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e, key) {
    console.log('This button is :', e.target, 'and key is :', key);
    e.preventDefault();
    if (key == 0 && !this.state.answered) {
      e.target.style.backgroundColor = 'green';
      this.setState(state => ({ score: state.score+10, answered: true }))
    } else if (!this.state.answered) {
      e.target.style.backgroundColor = 'red';
      this.setState(state => ({ answered: true }))
    }
  };

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then(res => res.json())
      .then(data => {
        this.setState({
          quiz: data.results[0]
        })
      })
  }

  render() {

    const mode = this.state.mode

    if (mode == 'customization') {
      return (
        <div>
          <GameSettings />
        </div>
      )
    } else if (mode == 'quiz') {
      return (
        <div>
          <GameSettings />
          <GameBox quiz={this.state.quiz} score={this.state.score} clickButton={this.clickButton} answered={this.state.answered}/>
        </div>
      )
    }
  }
}