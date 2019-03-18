import React, { Component } from 'react';
import ReactCompareImage from 'react-compare-image';

class Front extends Component {
  render() {
    return (
      <header className="container-fluid sdm-bg" id="home">
        <div className="row">
          <div className="overlay"></div>

          <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
            <li role="presentation" className="active"><a href="#home"><i className="fa fa-home"></i></a></li>
            <li role="presentation"><a href="#portfolio">Portfolio</a></li>
            <li role="presentation"><a href="#reviews">Reviews</a></li>
            <li role="presentation"><a href="#about_me">About</a></li>
            <li role="presentation"><a href="#expertness">Services</a></li>
            <li role="presentation"><a href="#hire_me">Awards</a></li>
            <li role="presentation"><a href="#contact_me">Contact</a></li>
          </ul>

          <div className="margin-top-76 img-circle center-block profile_picture" alt="profile">
            <ReactCompareImage leftImage="images/profile.jpg" rightImage="images/profile.jpg" leftImageCss={{borderRadius: '50%'}} rightImageCss={{filter: 'grayscale(100%)', borderRadius: '50%'}} sliderLineWidth="1" handleSize="25"/>
          </div>
          {/*<img src="images/profile.jpg" className="margin-top-76 img-circle center-block profile_picture" alt="profile" />*/}
          <h1 className="text-capitalize text-center">{this.props.name}</h1>
          <h3 className="text-capitalize text-center">{this.props.work} ({this.props.experience})</h3>
          <hr/>
          <div className="text-center margin-bottom-135">
            <ul className="social-networks spin-icon">
              <li><a href={this.props.social.Github} className="icon-github" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li><a href={this.props.social.Linkedin} className="icon-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={this.props.social.Facebook} className="icon-facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={this.props.social.Instagram} className="icon-instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={this.props.social.Whatsapp} className="icon-whatsapp" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Front;
