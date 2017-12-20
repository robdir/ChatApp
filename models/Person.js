import t from 'tcomb-form-native';

const Person = t.struct({
  email: t.String,
  password: t.String,
});

export const formOptions = {
  fields: {
    email: {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
    password: {
      secureTextEntry: true,
    }
  }
}

export default Person
