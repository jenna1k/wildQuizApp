import React from "react";
import { UncontrolledCarousel, Jumbotron } from "reactstrap";
import "./Carousel.css";

const items = [
  {
    src: "https://i.imgur.com/LnoKaEG.jpg",

    altText: "Slide 2",
    caption: "Select difficulty",
    header: "Select difficulty"
  },

  {
    src: "https://i.imgur.com/LnoKaEG.jpg",

    altText: "Slide 2",
    caption: "Select difficulty",
    header: "Select cathegory"
  },
  {
    src: "https://i.imgur.com/LnoKaEG.jpg",

    altText: "Slide 2",
    caption: "Select difficulty",
    header: "Select difficulty"
  }
];

const Carousel = () => (
  <div>
    <UncontrolledCarousel items={items} className="carousel-custom" />
  </div>
);

export default Carousel;

