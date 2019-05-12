import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';

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
      <Container>
        <div className="setting-text text-center">
          <p>Select the difficulty level</p>
        </div>
        <div className="text-center">
          <Button color="success" id='easy' onClick={this.selectLevelHandler}>Easy</Button>
          <Button color="primary" id='medium' onClick={this.selectLevelHandler}>Medium</Button>
          <Button color="danger" id='hard' onClick={this.selectLevelHandler}>Hard</Button>
        </div>
      </Container >
    )
  }
}
