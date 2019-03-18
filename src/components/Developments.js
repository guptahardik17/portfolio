import React, { Component } from 'react';
import Fields from './Fields.js';

class Developments extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="overlay"></div>
          <div className="col-sm-12">
            <h3 className="text-center"><i className="fa fa-bookmark"></i>What I Do</h3>
          </div>
        </div>
        <section className="container">
          <Fields skills={this.props.skills}/>
        </section>
      </div>
    );
  }
}

export default Developments;
