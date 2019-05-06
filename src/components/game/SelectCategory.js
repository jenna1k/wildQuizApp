import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class SelectCategory extends React.Component {
  constructor(props) {
    super(props);

    this.defaultProps = {
      defaultCategory: "Any Category"
    };

    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      dropdownOpen: false,
      categoryList: [],
      selectedCategory: "Any Category"
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList() {
    fetch("https://opentdb.com/api_category.php")
      .then(res => res.json())
      .then(data => { this.setState({ categoryList: data.trivia_categories }) })
  }

  changeValue(e) {
    this.setState({ selectedCategory: e.currentTarget.value })
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <FormGroup>
        <Label for="selectCategory">Choose the category:</Label>
        <Input id="selectCategory" type="select" name="select" onChange={this.changeValue}>
          <option value="any" onChange={this.changeValue}>{this.defaultProps.defaultCategory}</option>
          {this.state.categoryList.map((item) => <option value={item.id} onChange={this.changeValue}>{item.name}</option>)}
        </Input>
      </FormGroup>
    );
  }
}
