import React, { Component } from 'react';
import Webcam from "react-webcam";
// import { Button } from 'semantic-ui-react';
const axios = require('axios');

class WebcamCapture extends Component {

  constructor(props) {
    super(props);

    this.capture = this.capture.bind(this);
  }

    componentDidMount(){
      // const _this = this;
      // (function move() {
      //   _this.capture();
      //   setTimeout(move, 1000);
      // })();
    }

    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      if(imageSrc == null){
        return
      }
      axios.post('http://127.0.0.1:5000/analyse_emotions', imageSrc,
      {
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div className='webcam-container'>
          <Webcam
            className={'webcam'}
            audio={false}
            height={300}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={425}
            videoConstraints={videoConstraints}
          />
          {/* <Button onClick={this.capture}>Capture photo</Button> */}
        </div>
        
      );
    }
  }
  export default WebcamCapture;