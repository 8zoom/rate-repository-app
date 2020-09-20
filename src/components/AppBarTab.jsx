import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary
  },
  title: {
      marginTop: 30,
      marginLeft: 10,
      marginBottom: 20,
      color: theme.colors.tabTextColor
  }

});


const AppBarTab = ({title}) => {
return <Text  fontSize="title" fontWeight="bold" style={styles.title}>{title}</Text>;
};

export default AppBarTab;