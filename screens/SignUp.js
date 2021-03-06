import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
 } from 'react-native';
import styles from './SignUp.styles';
import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';
import signUp from '../actions/users/sign-up';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onSubmit.bind(this);

    this.state = { newUser: null };
  }

  componentDidMount() {
  this.refs.form.getComponent('name').refs.input.focus();
  }

  clearForm() {
    this.setState({ newUser: null }); 
  }

  onChange(newUser) {
    this.setState({ newUser });
  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
    this.props.signUp(newUser);
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
        behaviour="padding"
        style={styles.container}>

        <Text style={styles.title}> Sign up for ChatApp</Text>
        <Form
          ref="form"
          type={Person}
          options={formOptions}
          value={this.state.newUser}
          onChange={this.onChange}
        />
        <TouchableHighlight
          style={styles.buttonPrimary}
          onPress={this.onSubmit}
          underlayColor='#99d9f4'
        >
        <Text style={styles.buttonText}> Sign Up</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonSecondary}
          onPress={this.onSubmit}
          onPress={Actions.signIn}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>


        <Text style={styles.regular}> Or don't, whatever... </Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { signUp })(SignUp);
