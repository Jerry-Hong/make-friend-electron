import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleWebRTC from 'simplewebrtc';
import styles from '../components/FriendList.css';
import { cancleBtn } from '../components/Friend.css';
import FriendList from '../components/FriendListContainer.js';
import { hashHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class FriendListPage extends Component {
    componentDidMount() {
        window.webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video 
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos 
            remoteVideosEl: 'remoteVideos',
            // immediately ask for camera access 
            autoRequestMedia: true
        });
        var remotes = document.getElementById('remoteVideos');
        
        window.webrtc.on('readyToCall', () => {
            // you can name it anything 
            window.webrtc.joinRoom(this.props.loginState.account);
        });
        window.webrtc.on('videoRemoved', (video, peer) => {
            console.log('video removed ', peer);
            console.log('leave')
            var cancelButton = document.getElementById('cancelBtn');
            remotes.removeChild(cancelButton);
            remotes.classList.remove(styles.background)
            window.webrtc.joinRoom(this.props.loginState.account);
        });
        window.webrtc.on('videoAdded', function (video, peer) {
            console.log('video added', peer);
            var cancelButton = document.createElement('button')
            cancelButton.classList.add(cancleBtn);
            cancelButton.id = 'cancelBtn'
            cancelButton.addEventListener('click', () => {
                window.webrtc.leaveRoom()
            })
            cancelButton.innerHTML = '<i class="fa fa-phone" aria-hidden="true"></i>';
            remotes.appendChild(cancelButton);
            if (remotes) {
               remotes.classList.add(styles.background)
            }
        });
    }
    _joinRoom(account) {
        
    }
    render() {
        return (
            <div onClick={ event => {
                if(this.props.main)
                    hashHistory.push('/friendList')
            } }>
                <video id="localVideo" className={styles.fullscreen} muted="true"></video>
                <div id="remoteVideos" className={ styles.remote }></div>
                <div className={ styles.content }>
                    <FriendList joinRoom={ this._joinRoom.bind(this) }></FriendList>
                </div>
                { this.props.mask }                    
                <ReactCSSTransitionGroup transitionName="friend" transitionEnterTimeout={500} transitionLeaveTimeout={300}> 
                    { this.props.main }                    
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default connect(state => ({
    loginState: state.login
}))(FriendListPage);
