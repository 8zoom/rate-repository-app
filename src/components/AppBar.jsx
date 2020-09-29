import React, { useContext, useState , useEffect } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import theme from '../theme';
import Text from './Text';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

import AuthStorageContext from "../contexts/AuthStorageContext";
import createApolloClient from "../utils/apolloClient";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
});


const AppBarTab = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback style={styles.tabTouchable}{...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  const [user , setData] = useState(null);
  const { data } = useQuery(AUTHORIZED_USER);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = createApolloClient(authStorage);

  const signOut= async () => {
    if(user) {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      setData(null);
    } else {
      setData(data.authorizedUser);
    }
  };

  useEffect(() => {      
    if (data) setData(data.authorizedUser);
  }, [data, user]);
  console.log(user);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}  horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        {user ?
        <Link to="/" component={AppBarTab} onPress={() => signOut()}>Sign out</Link>
        : 
        <Link to="/signIn" component={AppBarTab}onPress={() => signOut()}>Sign in</Link>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;
