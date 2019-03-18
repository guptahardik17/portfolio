import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div id="preloader">
        <div className="sk-wave">
          <div className="sk-rect sk-rect1"></div>
          <div className="sk-rect sk-rect2"></div>
          <div className="sk-rect sk-rect3"></div>
          <div className="sk-rect sk-rect4"></div>
          <div className="sk-rect sk-rect5"></div>
        </div>
      </div>
    );
  }
}

export default Preloader;
