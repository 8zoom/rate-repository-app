import React from 'react';
import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepositoryItem from './SingleRepositoryItem';
import Review from './Review';

const Main = () => {
  return (
    <View>
      <AppBar />
      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/repo/:id">
          <SingleRepositoryItem />
        </Route>
        <Route path="/">
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
