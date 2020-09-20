import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground
  },
});

const AppBar = () => {
  return(
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <AppBarTab title='Repositories'/>
        </TouchableWithoutFeedback>
      </View>
      );
};

export default AppBar;