import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';

export default connect(state => ({
    homeState: state.home
}))(Home);