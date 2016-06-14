import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendList from './FriendList.js';
import { getFriends } from '../reducers/friends.js';


class FriendListContainer extends Component {
    componentDidMount() {
        const { getFriends } = this.props;
        getFriends();
    }
    render() {
        return (
            <FriendList { ...this.props }></FriendList>
        );
    }
}



export default connect(state => ({
    friendList: state.friends.list,
    isRequesting: state.friends.isRequesting
}), { getFriends })(FriendListContainer);