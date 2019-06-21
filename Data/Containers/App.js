import React, { Component } from 'react';
import Router from '../Navigation/AppNavigation';
import {AppRegistry} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <Router/>
    );
  }
}

AppRegistry.registerComponent('Antiqueruby', () => App)
