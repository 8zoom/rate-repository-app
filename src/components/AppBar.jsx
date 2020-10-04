import React, { useContext } from 'react';
import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import theme from '../theme';
import Text from './Text';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

import AuthStorageContext from '../contexts/AuthStorageContext';

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
    <TouchableWithoutFeedback style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);
  const authStorage = useContext(AuthStorageContext);

  // const apolloClient = createApolloClient(authStorage);
  // note typo above ... :/

  const apolloClient = useApolloClient();

  const user = data ? data.authorizedUser : undefined;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    // with incorrect apolloClient as above, re-renders do not occur
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>
        {user && (
          <Link to="/review" component={AppBarTab}>
            Create a review
          </Link>
        )}
        {user ? (
          <Link to="/" component={AppBarTab} onPress={() => signOut()}>
            Sign out
          </Link>
        ) : (
          <Link to="/signIn" component={AppBarTab}>
            Sign in
          </Link>
        )}
        {!user && (
          <Link to="/signUp" component={AppBarTab}>
            Sign up
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
