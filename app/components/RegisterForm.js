import React, { Component } from 'react';
import styles from './RegisterForm.css';


export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            name: '',
            gender: 0
        }
        this._submit = this._submit.bind(this);
    }
    _submit(event) {
        console.log('eee')
        event.preventDefault();
        this.props.signupSubmit(this.state)
    }
    render() {
        return (
            <div className={ styles.registerForm }>
                <h2>註冊</h2>
                <form onSubmit={ this._submit }>
                    <div className="form-input">
                        <input type="email" placeholder="E-mail" value={ this.state.account } onChange={ (event) => {
                            this.setState({
                                account: event.target.value
                            });
                        } }/>
                    </div>
                    <div className="form-input">
                        <input type="password" placeholder="Password" value={ this.state.password } onChange={ (event) => {
                            this.setState({
                                password: event.target.value
                            });
                        } }/>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="姓名" value={ this.state.name } onChange={ (event) => {
                            this.setState({
                                name: event.target.value
                            });
                        } }/>
                    </div>
                    <div className="form-input">
                        <select onChange={ (event) => { 
                            this.setState({
                                gender: +event.target.value
                            })
                        } }>
                            <option value="">選擇性別</option>
                            <option value="0">男</option>
                            <option value="1">女</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <button className={ styles.submit }>送出</button>
                    </div>
                    <div className="form-input">
                        <button type="button" onClick={ this.props.closeSignup }>取消</button>
                    </div>
                </form>
            </div>
        );
    }
}
