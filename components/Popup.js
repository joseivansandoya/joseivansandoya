import React, { Component } from 'react';
import GradientBar from './GradientBar';

class Popup extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <>
        <div className="popup-background">
          <div className="popup">
            <GradientBar>
              Lorem ipsum dolor sit
              <span onClick={this.props.togglePopup}>
                <img src="/static/close.svg" />
              </span>
            </GradientBar>
            <div className="popup-body">
              <div className="form-control">
                <label for="name">Name</label>
                <input id="name" />
              </div>
              <div className="form-control">
                <label for="email">Email</label>
                <input id="email" />
              </div>
              <div className="form-control-full">
                <label for="message">Message</label>
                <textarea id="message"></textarea>
              </div>
              <div className="form-control-button">
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .popup-background {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
            width: 100%;
            height: 100%;
          }

          .popup {
            background-color: #FFFFFF;
            margin: 10% auto;
            width: 50%;
            border-radius: 7px;
            overflow: hidden;
            box-shadow: 0px 0px 10px #4F4F4F;
          }

          .popup .gradientBar {
            padding: 20px !important;
            color: #FFFFFF;
            position: relative;
            font-weight: lighter;
          }

          .popup .gradientBar span {
            position: absolute;
            top: 20px;
            right: 20px;
            display: block;
            width: 20px;
            height: 20px;
            cursor: pointer;
            opacity: 0.7;
          }

          .popup .gradientBar span:hover {
            opacity: 1;
          }

          .popup .gradientBar span img {
            max-width: 100%;
          }

          .popup-body {
            background: #FFFFFF;
            padding: 15px;
            display: flex;
            flex-wrap: wrap;
          }

          .form-control {
            width: 50%;
            margin-bottom: 5px;
            padding: 5px;
            box-sizing: border-box;
          }

          .form-control-full, .form-control-button {
            width: 100%;
            padding: 5px;
            box-sizing: border-box;
          }

          .form-control label, .form-control-full label {
            display: block;
            font-size: 14px;
            margin-bottom: 10px;
            color: #212121;
          }

          .form-control input,
          .form-control-full textarea {
            width: 100%;
            height: 35px;
            background: #F7F7F7;
            border: none;
            padding: 7px;
            box-sizing: border-box;
            border-radius: 5px;
            font-size: 14px;
          }

          .form-control-full textarea {
            height: 100px;
            resize: none;
          }

          .form-control-button button {
            background: #9c6efd;
            padding: 10px 40px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
            color: #FFFFFF;
            cursor: pointer;
          }

          .form-control-button button:hover {
            background: #8357e0;
          }
        `}</style>
      </>
    )
  }
}

export default Popup;
