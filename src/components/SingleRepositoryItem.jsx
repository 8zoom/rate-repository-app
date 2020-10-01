import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import Text from './Text';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';
import { REPOSITORY } from '../graphql/queries';
import * as Linking from 'expo-linking';

import theme from '../theme';
const blue = theme.colors.google;

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  avatar: {
    flexGrow: 0,
    width: 64,
    height: 56,
  },
  titleTextRow: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  titleText: {
    flexDirection: 'column',
  },
  separator: {
    marginVertical: 5,
  },
  entry: {
    fontSize: 12,
  },
  button: {
    alignSelf: 'flex-start',
  },
});

const convertNum = (n) => (n > 1000 ? (n / 1000).toFixed(1) + 'k' : n);

const SingleRepositoryItem = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REPOSITORY, { variables: { id } });
  if (loading)
    return (
      <Text style={{ color: 'white', fontSize: 24, padding: 10 }}>
        {' '}
        Loading...{' '}
      </Text>
    );
  if (error) console.log(error);
  if (data) console.log(data);
  const {
    url,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = data.repository;

  return (
    <View>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.title}>
          <Text fontWeight="bold" fontSize="subheading">
            {fullName}
          </Text>
          <Text testID="description" color="textSecondary">
            {description}
          </Text>

          <View style={styles.separator} />

          <View
            style={{
              backgroundColor: blue,
              alignSelf: 'flex-start',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, padding: 8 }}>
              {language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.titleTextRow}>
        <View style={styles.titleText}>
          <Text color="textSecondary">Stars</Text>
          <Text testID="stargazers" fontWeight="bold">
            {convertNum(stargazersCount)}
          </Text>
        </View>
        <View style={styles.titleText}>
          <Text color="textSecondary">Forks</Text>
          <Text fontWeight="bold">{convertNum(forksCount)}</Text>
        </View>
        <View style={styles.titleText}>
          <Text color="textSecondary">Reviews</Text>
          <Text fontWeight="bold">{convertNum(reviewCount)}</Text>
        </View>
        <View style={styles.titleText}>
          <Text color="textSecondary">Rating</Text>
          <Text fontWeight="bold">{convertNum(ratingAverage)}</Text>
        </View>
      </View>

      <View style={styles.separator} />
      <View style={styles.separator} />

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(url);
        }}
        testID="submitButton"
      >
        <View
          style={{
            backgroundColor: blue,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 20, padding: 10 }}>
            Open in GitHub
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SingleRepositoryItem;
