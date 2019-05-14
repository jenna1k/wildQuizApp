import React from 'react';
import { Container, Spinner } from 'reactstrap';
import GameBox from '../components/game/GameBox';
import GameSettings from '../components/game/GameSettings';
import './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'customization', // 'customization', 'quiz', 'result'
      quizList: [],
      currentQuiz: 0,
      score: 0,
      answered: false,
      progress: {},
      url: 'https://opentdb.com/api.php?amount=10&type=multiple',
      loading: true,
      comment: 'Start !'
    };

    this.clickButton = this.clickButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.getData = this.getData.bind(this);
    this.getURL = this.getURL.bind(this);
  }

  clickButton(e, key) {
    const ans = document.querySelectorAll('#ans')
    var progress = Object.assign([], this.state.progress);
    if (key === 0 && !this.state.answered) {
      e.target.style.backgroundColor = 'green';
      progress.push(true);
      this.setState(state => ({ score: state.score + 10, answered: true, progress: progress, comment: 'good job!' }))
      // setTimeout(() => {
      //   e.currentTarget.style.backgroundColor = 'info'
      // }, 500);
    } else if (!this.state.answered) {
      e.target.style.backgroundColor = 'red';
      progress.push(false);
      this.setState(state => ({ answered: true, progress: progress, comment: 'oopsy!' }))
      // show right answer
      setTimeout(() => {
        for (let i = 0; i < ans.length; i++) {
          if (ans[i].dataset.answer === 'correct') {
            return ans[i].style.backgroundColor = "green";
          }
        }
      }, 300)
      // setTimeout(() => {
      //   e.currentTarget.style.backgroundColor = 'info'
      // }, 500);
    }
  };

  nextButton() {
    const ans = document.querySelectorAll('#ans')
    for (let i = 0; i < ans.length; i++) {
      ans[i].style.backgroundColor = "";
    }
    setTimeout(() => {
      if (this.state.currentQuiz !== this.state.quizList.length - 1) {
        this.setState(state => ({ answered: false, currentQuiz: this.state.currentQuiz + 1 }))
      } else {
        this.setState(state => ({ answered: false, mode: 'result' }))
      }
    }, 300)
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

  render() {
    var gamePhase;
    switch (this.state.mode) {
      case 'customization':
        gamePhase = <GameSettings getURL={this.getURL} />;
        break;
      case 'quiz':
        if (this.state.quizList.length > 0) {
          gamePhase = <GameBox
            quiz={this.state.quizList[this.state.currentQuiz]}
            score={this.state.score}
            clickButton={this.clickButton}
            nextButton={this.nextButton}
            answered={this.state.answered}
            progress={this.state.progress}
            amount={this.state.quizList.length}
            comment={this.state.comment} />;
        } else {
          gamePhase = null;
        }
        break;
      case 'result':
        gamePhase = <h1 className="text-center">Your score: {this.state.score} points</h1>
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