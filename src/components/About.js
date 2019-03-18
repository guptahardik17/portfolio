import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1 col-sm-12">
          <div className="row">
            <div className="col-md-5 col-sm-4 col-xs-12">
              <h3><i className="fa fa-user"></i>About me</h3>
              <div className="block">
                <p>
                  {this.props.about}
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <h3><i className="fa fa-building"></i>Work history</h3>

              {this.props.workhistory.map(i => {
                return(
                  <div className="block" key={i}>
                    <h4>{i[0]}</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-building"></i> {i[1]}</li>
                      <li><i className="fa fa-clock-o"></i> {i[2]}</li>
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="col-md-3 col-sm-4 col-xs-6">
              <h3><i className="fa fa-graduation-cap"></i>Education</h3>
              <div className="block">
                <h4>{this.props.education.College[0]}</h4>
                <ul className="icon-list">
                  <li><i className="fa fa-book"></i> {this.props.education.College[1]} </li>
                  <li><i className="fa fa-clock-o"></i> {this.props.education.College[2]} </li>
                </ul>
              </div>

              <h3><i className="fa fa-trophy"></i>Achievements</h3>
              {this.props.achievements.map(i => {
                return(
                  <div className="block" key={i}>
                    <h4>{i[0]}</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-font-awesome"></i> {i[1]}</li>
                      <li><i className="fa fa-clock-o"></i> {i[3]}</li>
                    </ul>
                  </div>
                )
              })}


            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;
