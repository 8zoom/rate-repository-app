import { useQuery, useMutation } from '@apollo/client';

import { REPOSITORY } from '../graphql/queries';
// import createApolloClient from '../utils/apolloClient';

export const foouseSingleRepositoryw = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    const token = await data.authorize.accessToken;
    await authStorage.setAccessToken(token);
    await apolloClient.resetStore();
  };

  return [signIn, result];
};

export function fetchSingleRepository(variables) {
  const { loading, error, data } = useQuery(REPOSITORY, {
    variables,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
}

const useSingleRepository = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(REPOSITORY, {
    variables,
    // ...
  });

  const handleFetchMore = () => {
    const canFetchMore =
      // !loading && data && data.repository.reviews.pageInfo.hasNextPage;
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },

      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...previousResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };

        // return { repository: { ...previousResult.repository, ...nextResult } };
        return nextResult;
      },
    });
  };

  return {
    repository: data ? data.repository : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useSingleRepository;
