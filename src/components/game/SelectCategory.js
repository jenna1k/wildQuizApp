import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SelectCategory extends React.Component {
  static defaultProps = {
    setCategoryHandler: null,
    defaultCategory: "any",
    defaultCategoryText: "Any Category"
  }

  static propTypes = {
    setCategoryHandler: PropTypes.func,
    defaultCategory: PropTypes.string,
    defaultCategoryText: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.selectCategoryHandler = this.selectCategoryHandler.bind(this);
    this.state = {
      categoryList: [],
      selectedCategory: "any"
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList() {
    fetch("https://opentdb.com/api_category.php")
      .then(res => res.json())
      .then(data => { this.setState({ categoryList: data.trivia_categories }) })
      .catch(error => console.log(error));
  }

  selectCategoryHandler(e) {
    this.setState({
      selectedCategory: e.currentTarget.value
    });

    if (this.props.setCategoryHandler != null) {
      this.props.setCategoryHandler(e.target.value);
    }
  }

  render() {
    return (
      <FormGroup>
        <Label for="selectCategory">Category:</Label>
        <Input id="selectCategory" type="select" name="select" onChange={this.selectCategoryHandler}>
          <option key={this.props.defaultCategoryText}
            value={this.props.defaultCategory}
            onChange={this.selectCategoryHandler}>
            {this.props.defaultCategoryText}
          </option>
          {this.state.categoryList.map((item) =>
            <option key={item.name}
              value={item.id}
              onChange={this.selectCategoryHandler}>
              {item.name}
            </option>)}
        </Input>
        <FormText>Choose the category of questions.</FormText>
      </FormGroup>
    );
  }
}
