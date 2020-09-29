import React from 'react';
import { View } from 'react-native';
import RepositoryList from "./RepositoryList";
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const Main = () => {

  return (
    <View>
      <AppBar />
      <Switch>
        <Route path='/signIn'>
          <View style={theme.container}>
            <SignIn />
          </View>
        </Route>
        <Route path='/'>
          <View style={theme.container}>
            <RepositoryList />
          </View>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
