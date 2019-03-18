import React, { Component } from 'react';
import ContactDetails from './ContactDetails.js';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="overlay"></div>
          <div className="col-sm-12 text-center text-capitalize">
            <h3>Need any Help or want to discuss a project?</h3>
            <h4>Connect With Me  <i className="fa fa-thumbs-up"> </i></h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <section className="col-sm-10 col-sm-offset-1">
            <ContactDetails contact={this.props.contact}/>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
