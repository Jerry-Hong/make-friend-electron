import React, { Component, PropTypes } from 'react';
import FriendListItem from './FriendListItem.js';
import styles from './FriendList.css';
import { hashHistory } from 'react-router'


export default class FriendList extends Component {
    _showFriend(index) {
        const { setCurrentFriend } = this.props;
        console.log(setCurrentFriend)
        setCurrentFriend(index);
        hashHistory.push('/friend');
    }
    render() {
        const { friendList = [], joinRoom } = this.props;
        return (
            <ul className={ styles.list }>
                { friendList.map((item, index) => <FriendListItem {...item} index={ index } key={ item.account } showFriend={ this._showFriend.bind(this) }></FriendListItem>) }
            </ul>
        );
    }
}
FriendList.propTypes = {
    friendList: PropTypes.array,
    isRequesting: PropTypes.bool
}