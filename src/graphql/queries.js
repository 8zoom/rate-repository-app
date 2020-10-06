import { gql } from 'apollo-boost';
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryBaseFields
          ratingAverage
          reviewCount
        }
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
