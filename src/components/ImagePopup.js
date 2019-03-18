import React, { Component } from 'react';

class ImagePopup extends Component {
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
       <div className="modal-dialog" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
             <h4 className="modal-title" id="myModalLabel">Mojo Web App redesign concept</h4>
           </div>
           <div className="modal-body">
             <p>Some portfolio description here. Some portfolio description here. Some portfolio description here. Some portfolio description here. Some portfolio description here. Some portfolio description here. </p>
             <img src="images/portfolio/port1.jpg" className="img-responsive" alt="" />
           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default ImagePopup;
