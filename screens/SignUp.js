import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
 } from 'react-native';
import styles from './SignUp.styles';
import t from 'tcomb-form-native';
import User, { formOptions } from '../models/User';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Sign up for ChatApp</Text>
        <Form
          ref="form"
          type={User}
          options={formOptions}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onSubmit}
          underlayColor='#99d9f4'
        >
        <Text style={styles.buttonText}> Sign Up</Text>
        </TouchableHighlight>
        <Text style={styles.regular}> Or don't, whatever... </Text>
      </View>
    );
  }
}
