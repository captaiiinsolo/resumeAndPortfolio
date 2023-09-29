import { gql} from "@apollo/client";

export const CREATE_CLIENT = gql`
mutation CreateClient($firstName: String!, $lastName: String!) {
  createClient(firstName: $firstName, lastName: $lastName) {
    firstName
    lastName
  }
}
`;