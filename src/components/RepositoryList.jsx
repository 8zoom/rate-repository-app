import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useDebounce } from 'use-debounce';

import SortList from './SortList';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const orderEnums = {
  latest: { orderBy: 'CREATED_AT' },
  rating: { orderBy: 'RATING_AVERAGE' },
  up: { orderDirection: 'ASC' },
  down: { orderDirection: 'DESC' },
};

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = React.useState('');

  const [orderBy, setOrderBy] = useState({
    ...orderEnums.latest,
    ...orderEnums.up,
  });

  const [value] = useDebounce(searchKeyword, 500);

  const query =
    value && value.length > 0 ? { ...orderBy, searchKeyword: value } : orderBy;

  const { repositories, fetchMore } = useRepositories({ first: 8, ...query });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <View style={{ height: Dimensions.get('window').height }}>
      <RepositoryListContainer
        testID="repoList"
        orderBy={orderBy}
        repositories={repositories}
        onEndReach={onEndReach}
      >
        <SortList
          setOrderBy={setOrderBy}
          orderEnums={orderEnums}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </RepositoryListContainer>
    </View>
  );
};
export default RepositoryList;
