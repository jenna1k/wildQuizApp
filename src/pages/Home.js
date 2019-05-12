import React from 'react';
import GameBox from '../components/game/GameBox';
import GameSettings from '../components/game/GameSettings';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      mode: 'quiz', // 'customization', 'quiz', 'result'
      quiz: {},
      score: 0,
      answered: false,
      progress: 0
    };

    this.clickButton = this.clickButton.bind(this);
    this.getAPI = this.getAPI.bind(this);
  }

  clickButton(e, key) {
    const ans = document.querySelectorAll('#ans')
    console.log('button clicked :', e.target, ans.length, ans[0].dataset.answer);
    
    if (key == 0 && !this.state.answered) {
      e.target.style.backgroundColor = 'green';
      this.setState(state => ({ score: state.score+10, answered: true }))
      // get new question
      // setTimeout( () => {
        // this.getAPI()
        // this.setState(state => ({ answered: false }))
      //   console.log('setTimeout when button clicked')
      // }, 1000);
    } else if (!this.state.answered) {
      e.target.style.backgroundColor = 'red';
      this.setState(state => ({ answered: true }))
      // show right answer
      setTimeout( ()=>{
        for (let i = 0; i < ans.length; i++){
          if(ans[i].dataset.answer == 'correct'){
            return ans[i].style.backgroundColor = "green";
          }
        }
      }, 300)
      // get new question
      // setTimeout( () => {
      //   this.getAPI()
      //   this.setState(state => ({ answered: false }))
      //   console.log('setTimeout when button clicked')
      // }, 1000);
    }
  };

  nextButton(){
    // this.getAPI()
    console.log('nextButton clicked')
    // this.setState(state => ({ answered: false }))
  }

  getAPI(){
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    .then(res => res.json())
    .then(data => {
      this.setState({
        quiz: data.results[0]
      })
    })
  }
  

  componentDidMount() {
    console.log('componentDidMount : getAPI')
   this.getAPI();
  }

  render() {
    console.log('Home.js rendered')
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
          <GameBox quiz={this.state.quiz} score={this.state.score} clickButton={this.clickButton} nextButton={this.nextButton} answered={this.state.answered}/>
        </div>
      )
    }
  }
}