import React from 'react';
import './ViewSlider.css';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalBody } from 'reactstrap';

export default class TechModal extends React.Component {
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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody onClick={this.toggle}>
          <div className="tech_logos">
                          <Row>
                            <div className="img_wrapper">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/492px-Adobe_XD_CC_icon.svg.png"/>
                            </div>
                          </Row>
                          <hr/>
                          <Row>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/html-5.svg"/>
                              </div>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/css-3.svg"/>
                              </div>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/javascript.svg"/>
                              </div>
                          </Row>
                          <hr/>
                          <Row>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/react.svg" />                          
                              </div>
                          </Row>
                          <hr/>
                          <Row>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/bootstrap.svg" />
                              </div>
                              <div className="img_wrapper">
                                <img src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com//spatie-space-production/1901/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png" />
                              </div>
                          </Row>
                          <hr/>
                          <Row>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/npm.svg"/>
                              </div>
                          </Row>
                          <hr/>
                          <Row>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/git.svg" />                            
                              </div>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/github-icon.svg" />
                              </div>
                          </Row>
                          <hr/>
                          <Row>
                              <div className="img_wrapper">
                                <img src="https://cdn.svgporn.com/logos/netlify.svg" />
                              </div>
                          </Row>
                        </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}