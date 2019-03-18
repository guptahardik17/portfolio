import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    return (
      <div>
      <div className="row text-center">
        <div className="col-sm-4 col-xs-12">
          <div className="block">
            <i className="fa fa-envelope fa-2x"></i>
            <h4 className="text-uppercase">Queries</h4>
            <ul className="list-unstyled">
              <li>{this.props.contact.Email}</li>
              {/*<li>contact@gmail.com</li>*/}
            </ul>
          </div>
        </div>
        <div className="col-sm-4 col-xs-12">
          <div className="block">
            <i className="fa fa-whatsapp fa-2x"></i>
            <h4 className="text-uppercase">Whatsapp</h4>
            <ul className="list-unstyled">
              <li>{this.props.contact.Phone2}</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4 col-xs-12">
          <div className="block">
            <i className="fa fa-phone fa-2x"></i>
            <h4 className="text-uppercase">Call</h4>
            <ul className="list-unstyled">
              <li>{this.props.contact.Phone}</li>
              <li>{this.props.contact.Phone2}</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="col-sm-6 text-center margin-top-55 margin-bottom-55">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=guptahardik17@gmail.com&su=Mail through Portfolio" target="_blank" rel="noopener noreferrer"><button type="submit" className="btn btn-orange">Send Direct Email</button></a>
      </div>

      <div className="col-sm-6 text-center margin-top-55 margin-bottom-55">
        <a href="https://api.whatsapp.com/send?phone=918386076342" target="_blank" rel="noopener noreferrer"><button type="submit" className="btn btn-orange">Send Direct Message</button></a>
      </div>

    <div className="text-center row">
      <div className="col-sm-12">
      <ul className="social-networks spin-icon">
        <li><a href={this.props.contact.Social.Github} className="icon-github" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href={this.props.contact.Social.Linkedin} className="icon-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href={this.props.contact.Social.Facebook} className="icon-facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href={this.props.contact.Social.Instagram} className="icon-instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href={this.props.contact.Social.Whatsapp} className="icon-whatsapp" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
      </ul>
        <p className="text-center margin-top-30">
         &copy; Copyright 2019 <a href="https://github.com/guptahardik17">REACT Portfolio by Hardik Gupta </a>
       </p>
     </div>
   </div>
      </div>
    );
  }
}

export default ContactDetails;
