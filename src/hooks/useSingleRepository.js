import { useQuery, useMutation } from '@apollo/client';

import { REPOSITORY } from '../graphql/queries';
// import createApolloClient from '../utils/apolloClient';

export const useSingleRepositoryw = () => {
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

export function fetchSingleRepository({ id }) {
  const { loading, error, data } = useQuery(REPOSITORY, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data);
}
