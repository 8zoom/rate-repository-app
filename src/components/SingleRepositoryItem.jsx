import React, { useEffect } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  Image,
  Platform,
} from 'react-native';
import Text from './Text';
import formatInThousands from '../utils/formatInThousands';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';
import { REPOSITORY } from '../graphql/queries';
import * as Linking from 'expo-linking';

import theme from '../theme';
const blue = theme.colors.google;
import { styles as repoStyles } from '../repositoryItemStyles.js';

const styles = StyleSheet.create(repoStyles);

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold">
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryInfo = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = repository;

  const onPress = () => Linking.openURL(url);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        </View>

        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {fullName}
          </Text>
          <Text style={styles.descriptionText} color="textSecondary">
            {description}
          </Text>
          {language ? (
            <View style={styles.languageContainer}>
              <Text style={styles.languageText}>{language}</Text>
            </View>
          ) : null}
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <CountItem count={stargazersCount} label="Stars" />
        <CountItem count={forksCount} label="Forks" />
        <CountItem count={reviewCount} label="Reviews" />
        <CountItem count={ratingAverage} label="Rating" />
      </View>

      <View style={styles.githubContainer}>
        <Text onPress={() => onPress(url)} style={styles.githubText}>
          Open in GitHub
        </Text>
      </View>
    </View>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 15 }}>
      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <View style={{ flexGrow: 0, marginRight: 20 }}>
          <Text>{review.rating}</Text>
        </View>

        <View style={{ flexGrow: 1, flexShrink: 1 }}>
          <Text>{review.user.username}</Text>
          <Text>{review.createdAt}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepositoryItem = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  if (loading)
    return (
      <Text style={{ color: 'white', fontSize: 24, padding: 10 }}>
        Loading...
      </Text>
    );
  if (error) {
    return (
      <Text style={{ color: 'white', fontSize: 24, padding: 10 }}>
        Error! {error.message.toString()}
      </Text>
    );
  }

  const repository = data.repository;
  const reviews = data.repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={
        Platform.OS !== 'android' &&
        (({ highlighted }) => (
          <View style={[styles.separator, highlighted && { marginLeft: 0 }]} />
        ))
      }
      // ...
    />
  );
};

export default SingleRepositoryItem;
