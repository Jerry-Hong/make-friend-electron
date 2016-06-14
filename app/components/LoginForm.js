import React, { Component } from 'react';
import styles from './LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: ''
        }
        this._submit = this._submit.bind(this);
    }
    _submit(event) {
        event.preventDefault();
        const { login } = this.props;
        login(this.state)
    }
    render() {
        const { login, showSignup, loginState } = this.props;
        const loading = loginState.isRequesting ? <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i> : '';

        return (
            <form onSubmit={ this._submit }>
                <div className="form-input">
                    <input type="text" placeholder="email" value={ this.state.account } onChange={ (event) => {
                        this.setState({
                            account: event.target.value
                        });
                    } }/>
                </div>
                <div className="form-input">
                    <input type="password" placeholder="password" value={ this.state.password } onChange={ (event) => {
                        this.setState({
                            password: event.target.value
                        });
                    } }/>
                </div>
                <div>
                    {loading ? loading : <span style={{ color: '#fd4545' }}>{ loginState.errorMessage }</span> }
                </div>

                <div className="form-input">
                    <button type="submit" className={ styles.login }>login</button>
                </div>
                <div className="form-input">
                    <button type="button" className={ styles.signup } onClick={ showSignup }>sign up</button>
                </div>
            </form>

        );
    }
}

export default LoginForm;