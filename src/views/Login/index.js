import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

// Styles
import { styles, texts, images, buttons } from './Style';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  // Navigate to Forgot Password
  _navigateForgotPassword() {
    this.props.navigation.push("ForgotPassword");
  }

  render() {
    return (
      //Scroll the page if needed
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          {/* Logo */}
          <Image source={require('../../assets/galo-cego.png')} style={images.logo} />

          {/* Input Email */}
          <TextInput
            style={styles.input}
            autoComplete
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email" />

          {/* Input Password */}
          <TextInput
            style={styles.input}
            autoComplete
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Senha" />

          {/* Container action buttons */}
          <View style={styles.containerButtons}>
            <TouchableOpacity style={buttons.actions}>
              <Text style={texts.buttons}>CADASTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={buttons.actions}>
              <Text style={texts.buttons}>ENTRAR</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={buttons.forgotPassword} onPress={() => this._navigateForgotPassword()}>
            <Text style={texts.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View >
      </ScrollView>
    );
  }
}
