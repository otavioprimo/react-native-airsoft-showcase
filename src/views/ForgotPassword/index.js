import React, { Component } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';

// Styles
import { styles, texts, buttons } from './Style';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            autoComplete
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email"
          />

          <TouchableOpacity style={buttons.btnEnviar}>
            <Text style={texts.btnEnviar}>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}