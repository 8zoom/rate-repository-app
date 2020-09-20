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
    <Formik initialValues={initialValues} onSubmit={_onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
