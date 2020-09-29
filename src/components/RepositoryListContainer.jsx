import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {RepositoryItem} from './RepositoryItem';



export const RepositoryListContainer = ({repositories}) => {
  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  const ItemSeparator = () => <View style={styles.separator} />;

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList testID='flat-list'
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};