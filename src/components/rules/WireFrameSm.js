import React from 'react';
import './ViewSlider.css';
import { Button, Modal, ModalBody } from 'reactstrap';

export default class WireFrameSm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="wrapper">
        <Button size="lg" color="warning" onClick={this.toggle}>Check here!</Button>
        <Modal className="my-modal-sm" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody onClick={this.toggle} className="modal_wrapper">
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img src="https://files.slack.com/files-pri/T6SG2QGG2-FJRTJ6NQP/screen_shot_2019-05-15_at_12.14.14.png"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img src="https://files.slack.com/files-pri/T6SG2QGG2-FJRTJ6NQP/screen_shot_2019-05-15_at_12.14.14.png"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img src="https://files.slack.com/files-pri/T6SG2QGG2-FJRTJ6NQP/screen_shot_2019-05-15_at_12.14.14.png"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img src="https://files.slack.com/files-pri/T6SG2QGG2-FJRTJ6NQP/screen_shot_2019-05-15_at_12.14.14.png"/></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 m-2"><img src="https://files.slack.com/files-pri/T6SG2QGG2-FJRTJ6NQP/screen_shot_2019-05-15_at_12.14.14.png"/></div>
                </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}