import Friend from './Friend.js';
import { connect } from 'react-redux';


export default connect((state)=>({
    friend: state.friends.list[state.friends.index]
}))(Friend)