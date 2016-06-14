import React, { Component, PropTypes } from 'react';
import FriendListItem from './FriendListItem.js';
import styles from './FriendList.css'
export default class FriendList extends Component {
    render() {
        const { friendList = [] } = this.props;
        return (
            <ul className={ styles.list }>
                { friendList.map(item => <FriendListItem {...item}></FriendListItem>) }
            </ul>
        );
    }
}
FriendList.propTypes = {
    friendList: PropTypes.array,
    isRequesting: PropTypes.bool
}