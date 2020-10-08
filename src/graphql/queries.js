import { gql } from 'apollo-boost';
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $first: Int
    $after: String
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      first: $first
      after: $after
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
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

// query Repository($id: ID!, $first: Int, $after: String) {
// reviews(first: $first, after: $after) @connection(key: "repository", filter: ["type"]) {

export const REPOSITORY = gql`
  query($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryBaseFields
      ratingAverage
      reviewCount
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              ...UserBaseFields
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
  ${USER_BASE_FIELDS}
`;
