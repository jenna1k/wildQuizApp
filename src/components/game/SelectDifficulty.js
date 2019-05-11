import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormText, Button } from 'reactstrap';

export default class SelectDifficulty extends React.Component {
  static defaultProps = {
    setDifficultyHandler: null,
    defaultLevel: "any",
    defaultLevelText: "Any Difficulty"
  }

  static propTypes = {
    setDifficultyHandler: PropTypes.func,
    defaultLevel: PropTypes.string,
    defaultCategoryText: PropTypes.string,
    levels: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.selectLevelHandler = this.selectLevelHandler.bind(this);
    this.state = {
      selectedLevel: "any"
    };
  }

  selectLevelHandler(e) {
    this.setState({
      selectedLevel: e.currentTarget.id
    });

    if (this.props.setDifficultyHandler != null) {
      this.props.setDifficultyHandler(e.target.id);
    }
  }

  render() {
    return (
      <div>
        <Button id='easy' onClick={this.selectLevelHandler}>Easy</Button>
        <Button id='medium' onClick={this.selectLevelHandler}>Medium</Button>
        <Button id='hard' onClick={this.selectLevelHandler}>Hard</Button>
      </div>
    )
  }
}
