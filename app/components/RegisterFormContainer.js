import { connect } from 'react-redux';
import { closeSignup, signupSubmit } from '../reducers/login.js';
import RegisterForm from './RegisterForm.js';

export default connect(state => { 
    return {};
}, { closeSignup, signupSubmit })(RegisterForm);