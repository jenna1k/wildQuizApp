import React from 'react';
import GameBox from '../components/game/Gamebox';
import GameSettings from '../components/game/GameSettings';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'select', // 'select'for customization, 'start' for quiz, 'end' for result
      quiz: {},
      score: 0,
      answered: false
    };

    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e, key) {
    // console.log('test: ', e.target.style.backgroundColor = 'red', key, e.target);
    // e.target
    e.preventDefault();
    // this.setState({answered: true})  //
    if(key == 0){
      e.target.style.backgroundColor = 'green'
    } else {
      e.target.style.backgroundColor = 'red'
    }
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