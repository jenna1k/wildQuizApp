import React from 'react';
import Gamebox from '../components/Gamebox';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: fetch("https://opentdb.com/api.php?amount=1&type=multiple")
        .then(res => res.json())
        .then(data => { this.setState({ quiz: data.results[0] }) })
    };
  }

  render() {
    return (
      <div>
        <Gamebox quiz={this.state.quiz} displayType={'text'} />
      </div>
    )
  }
}