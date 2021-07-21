import React, { Component } from 'react';
import '../css/Contents.css';


class Contents extends Component {
  render() {
    return(
      <div className="contentBox">
        <a href="javascript/">
          <div className="contentPhotoBorder">
            <div className="contentPhoto">
              <img className="animal" src={this.props.img} alt="animal"></img>
            </div>
          </div>
          <div className="contentTexts">
            <div className="contentMainText"><h4>[과학] {this.props.name}</h4></div>
            <div className="contentSubText">
              <p>{this.props.info}</p> 
            </div>
          </div>
          <div className="contentOption"></div>
        </a>
      </div>
    );
  }
}

export default Contents;