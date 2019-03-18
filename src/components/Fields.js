import React, { Component } from 'react';

class Fields extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-xs-6">
          <div className="block">
            <i className="fa fa-cubes fa-3x"></i>
            <h4 className="text-uppercase">{this.props.skills[0][0]}</h4>
            <p>
              {this.props.skills[0][1]}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-xs-6">
          <div className="block">
            <i className="fa fa-code fa-3x"></i>
            <h4 className="text-uppercase">{this.props.skills[1][0]}</h4>
            <p>
              {this.props.skills[1][1]}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-xs-6">
          <div className="block">
            <i className="fa fa-database fa-3x"></i>
            <h4 className="text-uppercase">{this.props.skills[2][0]}</h4>
            <p>
              {this.props.skills[2][1]}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-xs-6">
          <div className="block">
            <i className="fa fa-terminal fa-3x"></i>
            <h4 className="text-uppercase">{this.props.skills[3][0]}</h4>
            <p>
              {this.props.skills[3][1]}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-xs-6">
          <div className="block">
            <i className="fa fa-lightbulb-o fa-3x"></i>
            <h4 className="text-uppercase">{this.props.skills[4][0]}</h4>
            <p>
              {this.props.skills[4][1]}
            </p>
          </div>
        </div>
        <div className="col-sm-4 col-xs-6">
          <div className="block">
            <i className="fa fa-camera fa-3x"></i>
            <h4 className="text-uppercase">{this.props.skills[5][0]}</h4>
            <p>
              {this.props.skills[5][1]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Fields;
