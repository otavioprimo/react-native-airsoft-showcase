import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import StackNavigator from './src/routes';

import Colors from './src/util/Colors';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.headerBackground} barStyle="light-content" />
        <StackNavigator />
      </View>
    );
  }
}