import React, { Component } from 'react';

class Works extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 position-absolute">
          <div className="text-center filter-btns">

            <ul className="nav nav-pills">
              <li role="presentation">
                <a href="javascript:void(0)" id="all" className="btn" data-mixitup-control data-filter="all">All</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" className="btn" data-mixitup-control data-filter=".react">React</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" className="btn" data-mixitup-control data-filter=".node">Node</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" className="btn" data-mixitup-control data-filter=".web">Web-Development</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" className="btn" data-mixitup-control data-filter=".ml">Machine Learning</a>
              </li>
              <li role="presentation">
                <a href="javascript:void(0)" className="btn" data-mixitup-control data-filter=".java">Java</a>
              </li>
            </ul>

          </div>

          <div className="row" id="mix-wrapper">
            <div id="effect-5">

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target react" data-order="1">
                <figure>
                  <img src="images/portfolio/react.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[0][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[0][0]}</h3>
                      <hr />
                      <p>{this.props.projects[0][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target ml" data-order="2">
                <figure>
                  <img src="images/portfolio/ml.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[1][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[1][0]}</h3>
                      <hr />
                      <p>{this.props.projects[1][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target react" data-order="3">
                <figure>
                  <img src="images/portfolio/react.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[2][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[2][0]}</h3>
                      <hr />
                      <p>{this.props.projects[2][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target react" data-order="3">
                <figure>
                  <img src="images/portfolio/react.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[3][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[3][0]}</h3>
                      <hr />
                      <p>{this.props.projects[3][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target ml" data-order="3">
                <figure>
                  <img src="images/portfolio/ml.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[4][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[4][0]}</h3>
                      <hr />
                      <p>{this.props.projects[4][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target react" data-order="4">
                <figure target="_blank">
                  <img src="images/portfolio/react.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[5][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[5][0]}</h3>
                      <hr />
                      <p>{this.props.projects[5][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target node" data-order="5">
                <figure>
                  <img src="images/portfolio/react.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[6][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[6][0]}</h3>
                      <hr />
                      <p>{this.props.projects[6][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" data-order="6">
                <figure>
                  <img src="images/portfolio/web.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[7][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[7][0]}</h3>
                      <hr />
                      <p>{this.props.projects[7][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target ml" data-order="7">
                <figure>
                  <img src="images/portfolio/ml.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[8][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[8][0]}</h3>
                      <hr />
                      <p>{this.props.projects[8][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" data-order="8">
                <figure>
                  <img src="images/portfolio/web.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[9][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[9][0]}</h3>
                      <hr />
                      <p>{this.props.projects[9][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" data-order="9">
                <figure>
                  <img src="images/portfolio/web.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[10][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[10][0]}</h3>
                      <hr />
                      <p>{this.props.projects[10][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-6 mix-target java" data-order="10">
                <figure>
                  <img src="images/portfolio/java.jpg" alt="" />
                  <figcaption>
                    <a href={this.props.projects[11][4]} target="_blank" rel="noopener noreferrer">
                      <h3>{this.props.projects[11][0]}</h3>
                      <hr />
                      <p>{this.props.projects[11][2]}</p>
                    </a>
                  </figcaption>
                </figure>
              </div>

            </div>
            {/*<div className="col-sm-12 text-center">
              <a href="#" className="btn btn-orange">Load More</a>
            </div>*/}

          </div>

        </div>
      </div>
    );
  }
}

export default Works;
