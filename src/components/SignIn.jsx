import React from "react";
import {
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Formik, useField } from "formik";
import * as yup from 'yup';
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "grey",
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

const validationSchema = yup.object().shape({
  name: yup
  .string()
  .min(3, 'Username must be at least four characters long')
  .required('Username is required'),

  password: yup
  .string()
  .min(6, 'Password must be at least six characters long')
  .required('Password is required')
});

const initialValues = {
  name: "",
  password: "",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput
        name="name"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          onSubmit();
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 24, padding: 10 }}>
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const SignIn = () => {
  const _onSubmit = values => {
    console.log(values);
  };
  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={_onSubmit}
    validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
