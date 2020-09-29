import React from 'react';
import useRepositories from '../hooks/useRepositories';
import {RepositoryListContainer} from './RepositoryListContainer'; 


const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer testID='repoList' repositories={repositories} />;
};

export default RepositoryList;
