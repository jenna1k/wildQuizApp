import React from 'react';
import { Container, Spinner } from 'reactstrap';
import GameBox from '../components/game/GameBox';
import GameSettings from '../components/game/GameSettings';
import './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')

    this.state = {
      mode: 'customization', // 'customization', 'quiz', 'result'
      quizList: [],
      currentQuiz: 0,
      score: 0,
      answered: false,
      progress: 0,
      url: 'https://opentdb.com/api.php?amount=10&type=multiple',
      loading: true
    };

    this.clickButton = this.clickButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.getData = this.getData.bind(this);
    this.getURL = this.getURL.bind(this);
  }

  clickButton(e, key) {
    const ans = document.querySelectorAll('#ans')
    console.log('button clicked :', e.target, ans.length, ans[0].dataset.answer);

    if (key == 0 && !this.state.answered) {
      e.currentTarget.style.backgroundColor = 'green';
      this.setState(state => ({ score: state.score + 10, answered: true }))
      // setTimeout(() => {
      //   this.setState(state => ({ answered: false }))
      // }, 500);
    } else if (!this.state.answered) {
      e.currentTarget.style.backgroundColor = 'red';
      this.setState(state => ({ answered: true }))
      // show right answer
      setTimeout( ()=>{
        for (let i = 0; i < ans.length; i++){
          if(ans[i].dataset.answer == 'correct'){
            return ans[i].style.backgroundColor = "green";
          }
        }
      }, 300)
      // setTimeout(() => {
      //   this.setState(state => ({ answered: false }))
      // }, 500);
    }
  };

  nextButton(){
    // this.getAPI()
    console.log('nextButton clicked')
    const ans = document.querySelectorAll('#ans')
    for (let i = 0; i < ans.length; i++){
      ans[i].style.backgroundColor = "none";
    }
    this.setState(state => ({ answered: false, currentQuiz: this.state.currentQuiz + 1 }))
  }

  getData() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quizList: data.results,
          loading: false
        })
      })
  }

  getURL(url) {
    this.setState({
      url: url,
      mode: 'quiz'
    }, this.getData);
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
        if (this.state.quizList.length > 0) {
          gamePhase = <GameBox quiz={this.state.quizList[this.state.currentQuiz]} score={this.state.score} clickButton={this.clickButton} nextButton={this.nextButton} answered={this.state.answered} />;
        } else {
          gamePhase = null;
        }
        break;
      case 'result':
        gamePhase = <h1>result</h1>
        break;
      default:
        gamePhase = <GameSettings />;
        break;
    }

    if (this.state.loading && this.state.mode === 'quiz') {
      return (
        <div className="text-center">
          <Spinner type="grow" />
          <Spinner type="grow" />
          <Spinner type="grow" />
        </div>
      )
    }

    return (
      <Container id="home">
        {gamePhase}
      </Container>
    )
  }
}