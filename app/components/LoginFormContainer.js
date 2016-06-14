import { connect } from 'react-redux';
import LoginForm from './LoginForm.js';
import { login, showSignup } from '../reducers/login.js';

export default connect(state => ({
    loginState: state.login
}), {
    login,
    showSignup
})(LoginForm);


