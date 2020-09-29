import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query {
    repositories(searchKeyword: "", orderDirection: ASC) {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
