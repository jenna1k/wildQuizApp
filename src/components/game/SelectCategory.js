import React from 'react';
import PropTypes from 'prop-types';
import { Container, CardColumns, Card, CardBody, Badge } from 'reactstrap';
import './SelectCategory.css';

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
    if (e) {
      e.preventDefault();

      var categoryId = e.target.id ? e.target.id.replace("category-", "") : "any";

      this.setState({
        selectedCategory: categoryId
      });

      if (this.props.setCategoryHandler != null) {
        this.props.setCategoryHandler(categoryId);
      }
    }
  }

  render() {
    var categoryId = "category-";

    return (
      <Container>
        <h2 className="text-center">Select the category of questions</h2>
        <CardColumns>
          <a key={this.props.defaultCategoryText} id={categoryId + this.props.defaultCategory} onClick={this.selectCategoryHandler}>
            <Card onClick={this.selectCategoryHandler}>
              <CardBody id={categoryId + this.props.defaultCategory}>{this.props.defaultCategoryText}</CardBody>
            </Card>
          </a>
          {this.state.categoryList.map((item) =>
            <a key={item.name} id={categoryId + item.id} onClick={this.selectCategoryHandler}>
              <Card onClick={this.selectCategoryHandler}>
                <CardBody id={categoryId + item.id}>
                  {item.name}
                </CardBody>
              </Card>
            </a>
          )}
        </CardColumns>
      </Container>
    );
  }
}
