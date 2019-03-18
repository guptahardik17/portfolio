import React, { Component } from 'react';

class Palette extends Component {
  render() {
    return (
      <div className="palette-wrapper palette-closed">
        <div className="palette-inner">
          <div className="palette-toggle">
            <div className="palette-toggle-inner">
              <span><i className="fa fa-cog fa-spin"></i>Options</span>
            </div>
          </div>
          <h2 className="palette-title">Color Variant</h2>
          <ul className="palette-colors clearfix">
            <li className="palette-color-red"><a href="css/red.min.css"> </a></li>
            <li className="palette-color-purple"><a href="css/purple.min.css"> </a></li>
            <li className="palette-color-cyan"><a href="css/cyan.min.css"> </a></li>
            <li className="palette-color-green"><a href="css/green.min.css"> </a></li>
            <br />
            <h2 className="palette-title">Gradient</h2>
            <li className="palette-color-gradient"><a href="css/gradient.min.css"> </a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Palette;
