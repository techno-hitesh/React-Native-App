import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {ExStyles} from '../../../styles/global';
import { fieldType } from '../../../types/appType';
const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleInput = ({value, fieldName}: fieldType) => {
    console.warn('----------------', value, fieldName);
    if (fieldName == 'email') {
      setEmail(value);
    } else if ((fieldName = 'pass')) {
      setPass(value);
    }
  };

  const handleSubmit = () => {
    console.warn('data@@@@', email, pass);
    setEmail('');
    setPass('');
  };

  return (
    <View>
      <Text style={ExStyles.textMode}>React Native</Text>
      <View>
        <Text style={styles.formheading}>Login Form</Text>

        <TextInput
          style={styles.textInput}
          placeholder="enter you email"
          value={email}
          onChangeText={value => handleInput({value, fieldName: 'email'})}
        />

        <TextInput
          style={styles.textInput}
          placeholder="enter you password"
          value={pass}
          onChangeText={value => handleInput({value, fieldName: 'pass'})}
          secureTextEntry={true}
        />

        <View style={styles.customBtn}>
          <Button title="Submit" onPress={handleSubmit}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formheading: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'gray',
    color: 'black',
    padding: 15,
    marginTop: 10,
    margin: 10,
  },
  customBtn: {
    marginTop: 10,
    borderRadius: 20,
    padding: 15,
    margin: 5,
  },
});

export default Login;
