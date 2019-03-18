import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <div className="row">
        <div className="overlay"></div>


        <div className="container">
          <div className="row">
            <div className="col-md-12" data-wow-delay="0.2s">
              <div className="carousel slide" data-ride="carousel" id="quote-carousel">

                <ol className="carousel-indicators">
                  <li data-target="#quote-carousel" data-slide-to="0" className="active"><img className="img-responsive " src="images/anant.jpg" alt="" />
                  </li>
                  <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive" src="images/harsh.jpg" alt="" />
                  </li>
                  <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive" src="images/bhavesh.jpg" alt="" />
                  </li>
                </ol>


                <div className="carousel-inner text-center">


                  <div className="item active">
                    <blockquote>
                      <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">

                          <p>{this.props.testimonials[0][1]}</p>
                          <a href={this.props.testimonials[0][2]} target="_blank" rel="noopener noreferrer"><small>{this.props.testimonials[0][0]}</small></a>
                        </div>
                      </div>
                    </blockquote>
                  </div>

                  <div className="item">
                    <blockquote>
                      <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">

                          <p>{this.props.testimonials[1][1]}</p>
                          <a href={this.props.testimonials[1][2]} target="_blank" rel="noopener noreferrer"><small>{this.props.testimonials[1][0]}</small></a>
                        </div>
                      </div>
                    </blockquote>
                  </div>

                  <div className="item">
                    <blockquote>
                      <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">

                          <p>{this.props.testimonials[2][1]}</p>
                          <a href={this.props.testimonials[2][2]} target="_blank" rel="noopener noreferrer"><small>{this.props.testimonials[2][0]}</small></a>
                        </div>
                      </div>
                    </blockquote>
                  </div>


                </div>

                <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-angle-left fa-2x"></i></a>
                <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-angle-right fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Testimonials;
