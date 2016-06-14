import React from 'react';
import style from './FriendListItem.css';
const FriendListItem = ({ name, account, gender }) => {
    return (<li className={ style.item }>
        <img className={ style.headImg } src="https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg" alt=""/>
        <span>{ name }</span>
    </li>);
}

export default FriendListItem;