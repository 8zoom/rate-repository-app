import React from 'react';
import {TouchableOpacity, View, StyleSheet, Button, Image } from 'react-native';
import Text from './Text';

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
      justifyContent: 'space-around'
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
  export const convertNum = n => n > 1000 ? (n / 1000).toFixed(1) + 'k' : n;


export const RepositoryItem = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity testID='touch' onPress={onPress} style={[styles.item,  style]}>
      <View style={styles.row}>
        <Image 
          style={styles.avatar}
          source={{uri: item.ownerAvatarUrl}}
        />
        <View style={styles.title}>
          <Text fontWeight='bold'  fontSize='subheading'>{item.fullName}</Text>
          <Text testID='description' color='textSecondary'>{item.description}</Text>

          <View style={styles.separator} />
          <View style={styles.separator} />

          <View style={{width: 150}}>
            <Button title={item.language}/> 
          </View>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.titleTextRow}>
        <View style={styles.titleText}>
          <Text color='textSecondary'>Stars</Text>
          <Text testID='stargazers' fontWeight='bold'>{convertNum(item.stargazersCount)}</Text>
        </View>
        <View style={styles.titleText}>
          <Text color='textSecondary'>Forks</Text>
          <Text fontWeight='bold'>{convertNum(item.forksCount)}</Text>
        </View>
        <View style={styles.titleText}>
          <Text color='textSecondary'>Reviews</Text>
          <Text fontWeight='bold'>{convertNum(item.reviewCount)}</Text>
        </View>
        <View style={styles.titleText}>
          <Text color='textSecondary'>Rating</Text>
          <Text fontWeight='bold'>{convertNum(item.ratingAverage)}</Text>
        </View>
      </View>

      <View style={styles.separator} />
      <View style={styles.separator} />
    </TouchableOpacity>
  );
};