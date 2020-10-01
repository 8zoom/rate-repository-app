import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import { useHistory } from 'react-router-native';
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
});

export const convertNum = (n) => (n > 1000 ? (n / 1000).toFixed(1) + 'k' : n);

const RepositoryItem = ({ repository }) => {
  const history = useHistory();
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  const onPress = () => {
    history.push(`/repo/${repository.id}`);
  };
  return (
    <TouchableOpacity onPress={onPress} testID="touch">
      <View style={styles.separator} />

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
          <View style={styles.separator} />

          <View
            style={{
              backgroundColor: blue,
              alignSelf: 'flex-start',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Text testID='button' style={{ color: 'white', fontSize: 14, padding: 8 }}>
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
    </TouchableOpacity>
  );
};

export default RepositoryItem;
