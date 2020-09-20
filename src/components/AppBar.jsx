import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground
  },
});

const AppBar = () => {
  return(
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to="/" activeOpacity={0.3} >
            <AppBarTab title='Repositories'/>
          </Link>
          <Link to="/signin" activeOpacity={0.3} >
            <AppBarTab title='Sign in'/>
          </Link>
          </ScrollView>
      </View>
      );
};

export default AppBar;