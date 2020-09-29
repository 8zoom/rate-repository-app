import { gql } from "apollo-boost";

// remember that the  AutorizeInput "input type" is defined by the api server
// authorize(credentials: AuthorizeInput): AuthorizationPayload

// or we can TITLE the mutatioin: mutation Authorize($credentials: AuthorizeInput) {

export const SIGN_IN = gql`
  mutation Authorize($credentials: AuthorizeInput) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
