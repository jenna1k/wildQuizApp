import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {marked: false};
    this.shuffle = this.shuffle.bind(this);
}
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldComponentUpdate')
  //   if (this.props.answered === false) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render(){
    console.log('Answers component rendered!!!!!!!!!!!!')

    // DESTRUCTURING

    const {correct_answer, incorrect_answers, clickButton, answered} = this.props;

    // FOR SHUFFLE BUTTONS

    let list = [];

    const answerList = [].concat(correct_answer).concat(incorrect_answers);
    for (let i = 0; i < answerList.length; i++){
      list.push(
        <Col lg="6" sm="12">
        <Button className="m-1" color="info" size="lg" key={i} block onClick={(e) => clickButton(e,i)}>{answerList[i]}</Button>
        </Col>
      )
    }
    
    

    return(
      <Card className="border-0 bg-light">
        <Row>
          {this.marked? this.shuffle(list) : (list)}
          Correct: {correct_answer}
  
        </Row>
      </Card>
    )
  }
}



// const Answers = ({correct_answer, incorrect_answers, clickButton})=> {
//   let list = [];

//   const answerList = [].concat(correct_answer).concat(incorrect_answers);
//   for (let i = 0; i < answerList.length; i++){
//     list.push(
//       <Col lg="6" sm="12">
//       <Button className="m-1" color="info" size="lg" key={i} block onClick={(e) => clickButton(e,i)}>{answerList[i]}</Button>
//       </Col>
//     )
//   }


//   const shuffle = (array) => {
//     var currentIndex = array.length, temporaryValue, randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
//   }


//   return(
//     <Card className="border-0 bg-light">
//       <Row>
//         {shuffle(list)}
//         Correct: {correct_answer}

//       </Row>
//     </Card>
//   )
// }

// export default Answers;