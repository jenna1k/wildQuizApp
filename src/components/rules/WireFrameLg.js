import React from 'react';
import './ViewSlider.css';
import { Button, Modal, ModalBody } from 'reactstrap';

export default class WireFrameLg extends React.Component {
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
      <div>
        <Button size="lg" color="warning" onClick={this.toggle}>Check here!</Button>
        <Modal className="my-modal-lg" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody onClick={this.toggle} className="modal_wrapper">
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPH1MVB6/screen_shot_2019-05-15_at_12.14.02.png"/></div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPH1MVB6/screen_shot_2019-05-15_at_12.14.02.png"/></div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPH1MVB6/screen_shot_2019-05-15_at_12.14.02.png"/></div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPH1MVB6/screen_shot_2019-05-15_at_12.14.02.png"/></div>
                    <div className="col-lg-4 col-md-12 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPH1MVB6/screen_shot_2019-05-15_at_12.14.02.png"/></div>
                </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}