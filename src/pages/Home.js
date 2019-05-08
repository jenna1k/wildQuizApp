import React from 'react';
import GameBox from '../components/game/Gamebox';
import GameSettings from '../components/game/GameSettings';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'select', // 'select'for customization, 'start' for quiz, 'end' for result
      quiz: {},
      score: 0
    };

    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e) {
    console.log('test: ');
    // e.target
    e.preventDefault();
  };

  componentDidMount(){
      fetch("https://opentdb.com/api.php?amount=1&type=multiple")
          .then(res => res.json())
          .then(data => { this.setState({ 
            quiz: data.results[0]
           })
          })

  }

  render() {
    return (
      <div>
        <GameSettings />
        <GameBox quiz={this.state.quiz} score={this.state.score} clickButton={this.clickButton}/>
      </div>
    )
  }
}