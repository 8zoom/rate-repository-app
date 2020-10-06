import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import  RepositoryItem  from './RepositoryItem';

// export const RepositoryListContainer = ({ repositories, orderBy, children }) => {
//   
//   const styles = StyleSheet.create({
//     separator: {
//       height: 10,
//     },
//   });
//   const ItemSeparator = () => <View style={styles.separator} />;
//
//   // Get the nodes from the edges array
//   const repositoryNodes = repositories
//     ? repositories.edges.map(edge => edge.node)
//     : [];
//
//   return (
//     <FlatList  
//       testID='flat-list'
//       data={repositoryNodes}
//       keyExtractor={({ id }) => id}
//       // renderItem={({ item }) => <RepositoryItem repository={item} />}
//       // rendering like so: 
//       // renderItem={RepositoryItem}
//       // causes a "hook error" when attempting to use "useHistory" in the RepositoryList FC
//       renderItem={({ item }) => <RepositoryItem repository={item} />}
//       ItemSeparatorComponent={ItemSeparator}
//       ListHeaderComponent={children}
//       showsVerticalScrollIndicator={false}
//     /> 
//   );
// };


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;
    return (
      props.children
    )
  }

  render() {
    const props = this.props;
  // Get the nodes from the edges array
  const repositoryNodes = props.repositories
    ? props.repositories.edges.map(edge => edge.node)
    : [];


    return (
      <FlatList  
        testID='flat-list'
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        // renderItem={({ item }) => <RepositoryItem repository={item} />}
        // rendering like so: 
        // renderItem={RepositoryItem}
        // causes a "hook error" when attempting to use "useHistory" in the RepositoryList FC
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        showsVerticalScrollIndicator={false}
      /> 
    );
  }
};
