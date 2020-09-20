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
    width: 74,
    height: 66,
  },
  titleText: {
    flexDirection: 'column-reverse',
    flexGrow: 1,
  },
  separator: {
    marginVertical: 5,
  },
  entry: {
    fontSize: 12,
  },
});

const Separator = () => (
  <View style={styles.separator} />
);

const convertNum = n => n > 1000 ? (n / 1000).toFixed(1) + 'k' : n;

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item,  style]}>
    <View style={styles.row}>
      <Image 
        style={styles.avatar}
        source={{uri: item.ownerAvatarUrl}}
      />
      <View style={styles.title}>
        <Text fontWeight='bold'  fontSize='subheading'>{item.fullName}</Text>
        <Text color='textSecondary'>{item.description}</Text>

        <Separator />

        <View style={{width: 150}}>
          <Button title={item.language}/> 
        </View>
      </View>
    </View>

    <Separator />

    <View style={styles.row}>
      <View style={styles.titleText}>
        <Text fontWeight='bold'>{convertNum(item.stargazersCount)}</Text>
        <Text color='textSecondary'>Stars</Text>
      </View>
      <View style={styles.titleText}>
        <Text fontWeight='bold'>{convertNum(item.forksCount)}</Text>
        <Text color='textSecondary'>Forks</Text>
      </View>
      <View style={styles.titleText}>
        <Text fontWeight='bold'>{convertNum(item.reviewCount)}</Text>
        <Text color='textSecondary'>Reviews</Text>
      </View>
      <View style={styles.titleText}>
        <Text fontWeight='bold'>{convertNum(item.ratingAverage)}</Text>
        <Text color='textSecondary'>Rating</Text>
      </View>
    </View>
    <Separator />
    <Separator />
  </TouchableOpacity>
);
  
const RepositoryItem= ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
};


export default RepositoryItem;
