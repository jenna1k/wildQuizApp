import React from 'react';
import { Container, Button } from 'reactstrap';
import SelectCategory from './SelectCategory';
import NumberOfQuestions from './NumberOfQuestions';
import SelectDifficulty from './SelectDifficulty';
import './GameSettings.css';


export default class GameSettings extends React.Component {
  static defaultProps = {
    url: 'https://opentdb.com/'
  }

  constructor(props) {
    super(props);

    this.generateAPIRequestURL = this.generateAPIRequestURL.bind(this);
    this.getSessionToken = this.getSessionToken.bind(this);
    this.setCategoryHandler = this.setCategoryHandler.bind(this);
    this.setAmountHandler = this.setAmountHandler.bind(this);
    this.setDifficultyHandler = this.setDifficultyHandler.bind(this);
    this.customizeGame = this.customizeGame.bind(this);

    this.state = {
      gameSetting: 'default', // 'default', 'selectCategory', 'selectDifficulty', 'selectAmount'
      type: 'multiple',
      category: 'any',
      difficulty: 'any',
      amount: 10,
      token: '' // By appending a Session Token to a API Call, the API will never give you the same question twice. 
    };
  }

  componentDidMount() {
    this.getSessionToken();
  }

  getSessionToken() {
    fetch(this.props.url + 'api_token.php?command=request')
      .then(res => res.json())
      .then(data => { this.setState({ token: data.token }) })
      .catch(error => console.log(error));
  }

  setCategoryHandler(category) {
    this.setState({
      category: category,
      gameSetting: 'selectDifficulty'
    })
  }

  setAmountHandler(amount) {
    this.setState({
      amount: amount
    })
  }

  setDifficultyHandler(difficulty) {
    this.setState({
      difficulty: difficulty,
      gameSetting: 'selectAmount'
    })
  }

  generateAPIRequestURL() {
    const url = this.props.url
      + "api.php?token=" + this.state.token
      + (this.state.category === 'any' ? "" : "&category=" + this.state.category)
      + (this.state.difficulty === 'any' ? "" : "&difficulty=" + this.state.difficulty)
      + "&amount=" + this.state.amount
      + "&type=" + this.state.type;

    if (this.props.getURL != null) {
      this.props.getURL(url);
    }
  }

  customizeGame() {
    this.setState({
      gameSetting: 'selectCategory'
    })
  }

  render() {
    var gameSettings;
    switch (this.state.gameSetting) {
      case 'default':
        gameSettings = <Container className="text-center">
          <h1>Welcome to Wild Quiz</h1>
          <Button color="success" size="lg" onClick={this.generateAPIRequestURL}>Play</Button>
          <Button color="warning" size="lg" onClick={this.customizeGame}>Custom Game</Button>
        </Container>
        break;

      case 'selectCategory':
        gameSettings = <SelectCategory setCategoryHandler={this.setCategoryHandler} />
        break;

      case 'selectDifficulty':
        gameSettings = <SelectDifficulty setDifficultyHandler={this.setDifficultyHandler} />
        break;

      case 'selectAmount':
        gameSettings = <NumberOfQuestions setAmountHandler={this.setAmountHandler} />
        break;

      default:
        gameSettings = <div>Default</div>
        break;
    }

    return (
      <div className="game-settings">
        {gameSettings}
      </div>
    )
  }
}