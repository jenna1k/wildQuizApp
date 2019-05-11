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

    this.state = {
      step: 'welcome', // 'welcome', 'selectCategory', 'selectDifficulty', 'selectAmount'
      type: 'multiple',
      category: 'any', // API call: <url> + (this.state.category == "any" ? "" : ("&category=" + this.state.category))
      difficulty: 'any', //
      amount: 10, // handle values outside 1-50 
      token: '' // Session Tokens are unique keys that will help keep track of the questions the API has already retrieved. By appending a Session Token to a API Call, the API will never give you the same question twice. 
    };
    console.log(this.props.url);
  }

  componentDidMount() {
    this.getSessionToken();
    console.log(this.state.token);
  }

  getSessionToken() {
    fetch(this.props.url + 'api_token.php?command=request')
      .then(res => res.json())
      .then(data => { this.setState({ token: data.token }) })
      .catch(error => console.log(error));
  }

  setCategoryHandler(category) {
    this.setState({
      category: category
    })
  }

  setAmountHandler(amount) {
    this.setState({
      amount: amount
    })
  }

  setDifficultyHandler(difficulty) {
    this.setState({
      difficulty: difficulty
    })
  }

  generateAPIRequestURL() {
    var url = this.props.url
      + "api.php?token=" + this.state.token
      + (this.state.category === 'any' ? "" : "&category=" + this.state.category)
      + (this.state.difficulty === 'any' ? "" : "&difficulty=" + this.state.difficulty)
      + "&amount=" + this.state.amount
      + "&type=" + this.state.type;

    console.log(url);
  }

  render() {
    var customizedSetting;
    switch (this.state.step) {
      case 'welcome':
        customizedSetting =
          <div className="text-center">
            <h1>Welcome to Wild Quiz</h1>
            <Button color="success" size="lg" onClick={this.generateAPIRequestURL}> Play</Button>
            <Button color="warning" size="lg">Custom Game</Button>
          </div>
        break;
      case 'selectCategory':
        customizedSetting = <SelectCategory setCategoryHandler={this.setCategoryHandler} />;
        break;
      case 'selectDifficulty':
        customizedSetting = <SelectDifficulty setDifficultyHandler={this.setDifficultyHandler} />;
        break;
      case 'selectAmount':
        customizedSetting = <NumberOfQuestions setAmountHandler={this.setAmountHandler} />;
        break;
      default:
        customizedSetting = <h1>Welcome to Wild Quiz</h1>;
        break;
    }
    return (
      <Container>
        {customizedSetting}
      </Container>
    )
  }
}