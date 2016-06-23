import React, { Component } from 'react';
import styles from './Friend.css';


export default class Friend extends Component {

    _call() {
        const { friend: {
            account
        } } = this.props;
        console.log(account)
        window.webrtc.leaveRoom()
        window.webrtc.joinRoom(account);
    }
    render() {
        console.log(this.props);
        const { friend: {
            name,
            gender
        } } = this.props;
        return (
            <div className={ styles.friend } onClick={ event => {
                event.stopPropagation();
            } }>
                <div>
                    <h1 className={ styles.title }>Information</h1>
                    <img className={ styles.headImg } src="https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg" alt=""/>
                </div>
                <div className={ styles.info }>
                    <label>Name: { name }</label>
                    <label>Gender: { gender ? '男' : '女' }</label>
                </div>
                <div>   
                    <button className={ styles.circleBtn } onClick={ this._call.bind(this) }>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </button>
                </div>  
            </div>
        );
    }
}
