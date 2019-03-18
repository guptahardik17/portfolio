import React, { Component } from 'react';

class Awards extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2><i className="fa fa-trophy"></i> Awards !</h2>
          </div>
        </div>

        <br /><br />
        <div className="row">
          <div id="effect-5">

          <div className="col-sm-2">
          </div>

            <div className="col-sm-4 col-xs-6">
              <figure>
                <img src="images/unisys.jpg" alt=""/>
                <figcaption>
                  <a href="#hire_me">
                    <h3>ALL INDIA RUNNER-UP</h3>
                    <hr />
                    <p>UNISYS HACKATHON 20/20 (Powered by Hackerearth)</p>
                    <p>Location: Bangalore</p>
                  </a>
                </figcaption>
              </figure>
              <br />
            </div>


            <div className="col-sm-4 col-xs-6">
              <figure>
                <img src="images/lnmhacks.jpg" alt=""/>
                <figcaption>
                  <a href="#hire_me">
                    <h3>RUNNER-UP</h3>
                    <hr />
                    <p>LNMHACKS 3.0 (Powered by Hackerearth)</p>
                    <p>Location: Jaipur</p>
                  </a>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Awards;
