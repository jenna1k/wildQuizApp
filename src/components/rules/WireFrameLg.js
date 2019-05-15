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
                    <div className="col-lg-2 col-md-6 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJHTNMA73/screen_shot_2019-05-15_at_15.05.18.png" alt="wireframe for laptop and tablet"/></div>
                    <div className="col-lg-2 col-md-6 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJCQNK4JF/screen_shot_2019-05-15_at_15.05.29.png" alt="wireframe for laptop and tablet"/></div>
                    <div className="col-lg-2 col-md-6 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJHTPL2CR/screen_shot_2019-05-15_at_15.05.43.png" alt="wireframe for laptop and tablet"/></div>
                    <div className="col-lg-2 col-md-6 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJPNDP77E/screen_shot_2019-05-15_at_15.06.02.png" alt="wireframe for laptop and tablet"/></div>
                    <div className="col-lg-2 col-md-6 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJHTQQ389/screen_shot_2019-05-15_at_15.06.10.png" alt="wireframe for laptop and tablet"/></div>
                    <div className="col-lg-2 col-md-6 col-sm-12 m-2"><img className="wf_img" src="https://files.slack.com/files-pri/T6SG2QGG2-FJCQQ99GB/screen_shot_2019-05-15_at_15.06.28.png" alt="wireframe for laptop and tablet"/></div>
                </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}