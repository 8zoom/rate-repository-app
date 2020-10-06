import React , { useState }  from 'react';
import SortList from './SortList'

import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const orderEnums = {
    latest: { orderBy: 'CREATED_AT' },
    rating: { orderBy: 'RATING_AVERAGE' },
    up: { orderDirection: 'ASC' },
    down: { orderDirection: 'DESC' },
  };

  const [orderBy, setOrderBy] = useState({
    ...orderEnums.latest,
    ...orderEnums.up,
  });


  const { repositories } = useRepositories(orderBy);

  return (
    <>
      <RepositoryListContainer testID="repoList" orderBy={orderBy} repositories={repositories}>
	<SortList setOrderBy={setOrderBy} orderEnums={orderEnums } />
      </RepositoryListContainer> 
    </>
  );
};
export default RepositoryList;
