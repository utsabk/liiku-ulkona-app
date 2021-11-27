import React from 'react';
import * as Yup from 'yup';
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import FormikTextInput from '../components/FormikTextInput';
import theme from '../theme';

const imageBackground = { uri: require('../../assets/outdoor.png') };

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    width: '90%',
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
  registerText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    padding: 25,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const navigation = useNavigation();

  const handleRegisterClick = () => navigation.navigate('Register');

  return (
    <ImageBackground
      style={styles.img}
      blurRadius={3}
      source={imageBackground.uri}
    >
      <View style={styles.container}>
        <FormikTextInput placeholder="Enter your username" name="username" />
        <FormikTextInput
          placeholder="Enter your password"
          name="password"
          secureTextEntry
        />
        <Pressable onPress={onSubmit} style={styles.signIn}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </Pressable>
        <Text style={styles.registerText} onPress={handleRegisterClick}>
          Register for free
        </Text>
      </View>
    </ImageBackground>
  );
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});
const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log('Username:-', username, 'Password:-', password);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;