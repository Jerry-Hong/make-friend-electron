import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';
import styles from '../components/FriendList.css';
import FriendList from '../components/FriendListContainer.js';
export default class FriendListPage extends Component {
    componentDidMount() {
        var webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video 
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos 
            remoteVideosEl: 'remoteVideos',
            // immediately ask for camera access 
            autoRequestMedia: true
        });
        webrtc.on('readyToCall', function () {
            // you can name it anything 
            webrtc.joinRoom('your awesome room name');
        });
    }
    render() {
        return (
            <div>
                <video id="localVideo" className={styles.fullscreen}></video>
                <div id="remoteVideos"></div>
                <div className={ styles.content }>
                    <FriendList></FriendList>
                </div>
            </div>
        );
    }
}
