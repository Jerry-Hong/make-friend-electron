import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import LoginForm from './LoginFormContainer.js';
import styles from './Home.css';
import classnames from 'classnames';
import addClassOnce from '../utils/cssAnimation.js';
import { hashHistory } from 'react-router'
import RegisterForm from './RegisterFormContainer.js';

export default class Home extends Component {
  componentDidUpdate() {
    const { homeState } = this.props;

    if(homeState.isFail)
      addClassOnce(this.refs.logo, ['animated', 'wobble', 'red']);
    if(homeState.isLogin) {
      addClassOnce(this.refs.logo, ['animated', 'bounceOutUp'], () => {
        hashHistory.push('/friendList')
      });
    }
  }
  render() {
    const { homeState } = this.props;
    
    return (
      <div>
        <div className={ styles.container }>
          <div className={ styles.content }>
            <div>
              <span className={ styles.logo } >
                <i className="fa fa-hand-spock-o fa-5x" aria-hidden="true" ref="logo"></i>
              </span>
              <h1>
                Make Friend
              </h1>      
            </div>
            <LoginForm></LoginForm>
          </div>
          {
            homeState.showSignup ? <RegisterForm></RegisterForm> : ''
          }
        </div>
      </div>
    );
  }
}
