import React from 'react';
import GameBox from '../components/game/GameBox';
import GameSettings from '../components/game/GameSettings';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'customization', // 'customization', 'quiz', 'result'
      quiz: {},
      score: 0,
      answered: false,
      progress: 0,
      url: 'https://opentdb.com/api.php?amount=1&type=multiple'
    };

    this.clickButton = this.clickButton.bind(this);
    this.getData = this.getData.bind(this);
    this.getURL = this.getURL.bind(this);
  }

  clickButton(e, key) {
    console.log('This button is :', e.target, 'and key is :', key);

    if (key === 0 && !this.state.answered) {
      e.target.style.backgroundColor = 'green';
      this.setState(state => ({ score: state.score + 10, answered: true }))
      setTimeout(() => {
        this.getData()
        this.setState(state => ({ answered: false }))
      }, 1000);
    } else if (!this.state.answered) {
      e.target.style.backgroundColor = 'red';
      this.setState(state => ({ answered: true }))
      setTimeout(() => {
        this.getData()
        this.setState(state => ({ answered: false }))
      }, 1000);
    }
  };

  getData() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quiz: data.results[0]
        })
      })
  }

  getURL(url) {
    this.setState({
      url: url,
      mode: 'quiz'
    });
    this.getData();
  }

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    var gamePhase;
    switch (this.state.mode) {
      case 'customization':
        gamePhase = <GameSettings getURL={this.getURL} />;
        break;
      case 'quiz':
        gamePhase = <GameBox quiz={this.state.quiz} score={this.state.score} clickButton={this.clickButton} answered={this.state.answered} />;
        break;
      case 'result':
        gamePhase = <h1>result</h1>
        break;
      default:
        gamePhase = <GameSettings />;
        break;
    }

    return (
      <div>
        {gamePhase}
      </div>
    )
  }
}