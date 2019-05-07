import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SelectDifficulty extends React.Component {
  static defaultProps = {
    setDifficultyHandler: null,
    defaultLevel: "any",
    defaultLevelText: "Any Difficulty",
    levels: ["easy", "medium", "hard"]
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
      selectedLevel: e.currentTarget.value
    });

    if (this.props.setDifficultyHandler != null) {
      this.props.setDifficultyHandler(e.target.value);
    }
  }

  render() {
    return (
      <FormGroup>
        <Label for="selectDifficulty">Difficulty:</Label>
        <Input id="selectDifficulty" type="select" name="select" onChange={this.selectLevelHandler}>
          <option key={this.props.defaultLevelText}
            value={this.props.defaultLevel}
            onChange={this.selectLevelHandler}>
            {this.props.defaultLevelText}
          </option>
          {this.props.levels.map((item) =>
            <option key={item}
              value={item}
              onChange={this.selectLevelHandler}>
              {item.substring(0, 1).toUpperCase() + item.substring(1)}
            </option>)}
        </Input>
        <FormText>Choose the difficulty level of questions.</FormText>
      </FormGroup>
    );
  }
}