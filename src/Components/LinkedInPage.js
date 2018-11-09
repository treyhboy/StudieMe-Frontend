import React, { Component } from 'react';
import axios from 'axios';
import { LinkedIn } from './src';

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
      var d = data.code;
      axios.post(`http://localhost:1234/data`,{da:"hello world",d})
          .then(res => {
              console.log(res);
              console.log(res.data);
          })

      // fetch("http://localhost:1234/data", {
      //     method: "POST",
      //     body: "hello",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     credentials: "same-origin"
      // })
      //     // .then(res => res.json())
      //     .then(
      //         (result) => {
      //             console.log("result1");
      //             console.log(result);
      //         },
      //         (error) => {
      //             console.log("error2")
      //             console.log(error)
      //         }
      //     )
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="81k5i16hicsnq3"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri={`${window.location.origin}/linkedin`}
        >
          <img src={require('./src/assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
