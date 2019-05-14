import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div fixed="bottom" id="footer">
        <footer>
          <p className="text-center">Wild Code School &copy; 2019</p>
        </footer>
      </div>
    );
  }
}
