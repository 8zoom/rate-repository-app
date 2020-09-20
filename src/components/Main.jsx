import React from 'react';
import { View } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from './AppBar';
import theme from '../theme';

const Main = () => {
  return (
    <View>
      <AppBar />
      <View style={theme.container}>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;