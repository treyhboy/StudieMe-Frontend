import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './assets/index.css';
import styled from 'styled-components';

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: ${props=>props.height||"4rem"};
width: ${props=>props.width||"11rem"};
border-radius: 1rem;
border: solid 1px #24D89B;
color: ${props=>props.color};
background-color: ${props=>props.bcolor};
font-size: ${props=>props.size||"2rem"};
font-weight: 200;
transition: .5s;
&:hover{
color: ${props=>props.bcolor};
background-color: ${props=>props.color};
}
`

export class LinkedIn extends Component {
  static propTypes = {
    className: PropTypes.string,
    onFailure: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    clientId: PropTypes.string.isRequired,
    redirectUri: PropTypes.string.isRequired,
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.receiveMessage, false);
  }

  getUrl = () => {
    const {redirectUri, clientId} = this.props;
    // TODO: Support IE 11
    const linkedInAuthenLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=fdsf78fyds7fm&scope=r_basicprofile,r_emailaddress,w_share,rw_company_admin`;
    return linkedInAuthenLink;
  }

  receiveMessage = (event) => {
    if (event.origin === window.location.origin) {
      console.log('event data:', event.data);
      if (event.data.errorMessage && event.data.from === 'Linked In') {
        this.props.onFailure(event.data);
        this.popup && this.popup.close();
      } else if (event.data.code && event.data.from === 'Linked In') {
        this.props.onSuccess({ code: event.data.code });
        this.popup && this.popup.close();
      }
    }
  };

  handleConnectLinkedInClick = (e) => {
    console.log('handleConnectLinkedInClick');
    if (e) {
      e.preventDefault();
    }
    this.props.onClick && this.props.onClick();
    this.popup = window.open(this.getUrl(), '_blank', 'width=600,height=600');
    window.removeEventListener('message', this.receiveMessage, false);
    window.addEventListener('message', this.receiveMessage, false);
  }


  render() {
    const { disabled } = this.props;
    return (
        <Button bcolor={"#24D89B"} color={"white"} onClick={this.handleConnectLinkedInClick}
                disabled={disabled}>
          Login
        </Button>
    );
  }
}

LinkedIn.defaultProps = {
  className: 'btn-linkedin',
  disabled: false,
};
export default LinkedIn;
