import ApolloClient from "apollo-boost";
import Constants from "expo-constants";

const createApolloClient = () => {
  const uri = Constants.manifest.extra.uri;

  return new ApolloClient({
    uri,
  });
};

export default createApolloClient;
