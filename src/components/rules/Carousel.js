import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Carousel.css';
import {StaggeredMotion, spring} from "react-motion";
import { Card, CardImg, CardColumns, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

class ViewSlide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const isActive = this.props.active ? "active" : "";
        const classes = "ViewSlide " + isActive;
        return (
          <div style={this.props.style}  
               className={classes}
               onClick={this.props.onClick}>
            {this.props.children} 
          </div>
        )
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeSlideIndex: 0,
            // Working on a better version where you just pass children with a triggers and x prop.
            slides: [
                {
                    triggers: 1,
                    x: 0,
                    content: (
                      <div className="ppt_container">
                        <h1>How we built this</h1>
                      </div>
                        
                    )
                },
                 {
                    triggers: 2,
                    x: 100,
                    content: (
                      <div className="ppt_container">
                        <h1>What technologies we used</h1>
                        <div className="tech_logos">
                          <img src="https://cdn.svgporn.com/logos/html-5.svg"/>
                          <img src="https://cdn.svgporn.com/logos/css-3.svg"/>
                          <img src="https://cdn.svgporn.com/logos/javascript.svg"/>
                          <img src="https://cdn.svgporn.com/logos/react.svg" />                          
                          <img src="https://cdn.svgporn.com/logos/bootstrap.svg" />
                          <img src="https://madewithnetwork.ams3.cdn.digitaloceanspaces.com//spatie-space-production/1901/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png" />
                          <img src="https://cdn.svgporn.com/logos/npm.svg"/>
                          <img src="https://cdn.svgporn.com/logos/git.svg" />                            
                          <img src="https://cdn.svgporn.com/logos/github-icon.svg" />
                          <img src="https://cdn.svgporn.com/logos/netlify.svg" />
                        </div>
                      </div>
                    )
                },
                 {
                    triggers: 3,
                    x: 200,
                    content: (
                        <h1>WireFrame</h1>
                    )
                },
                {
                    triggers: 0,
                    x: 300,
                    content: (
                        <h1>Let's Go back to the start</h1>
                    )
                },
                {
                    triggers: 0,
                    x: 400,
                    content: (
                        <h1>Secret slide!</h1>
                    )
                },
            ]
        }
    }
    setActiveSlide(slideIndex) {
       this.setState({activeSlideIndex: slideIndex});
    }
    render() {
        const slides = this.state.slides;
        return (
                <StaggeredMotion
                  defaultStyles={slides}
                  styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                    return i === 0
                      ? {x: -(this.state.activeSlideIndex * 100)}
                      : {x: prevInterpolatedStyles[i - 1].x + 100}
                  })}>
                  {interpolatingStyles =>
                    <div className="ViewSlider">
                      {interpolatingStyles.map((style, i) => {
                        const active = i == this.state.activeSlideIndex,
                              slide = this.state.slides[i];
                         return (
                        <ViewSlide
                            style={{left: `${style.x}%`}}
                            active={active}
                            key={i}
                            onClick={this.setActiveSlide.bind(this, slide.triggers)}>
                                 <h1>{slide.content}</h1>
                        </ViewSlide>
                        )}
                      )}
                     </div>
                  }
                </StaggeredMotion>
        )
    }
}


export default Carousel;

