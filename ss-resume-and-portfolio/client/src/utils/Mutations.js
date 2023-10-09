import { gql} from "@apollo/client";

export const CREATE_CLIENT = gql`
mutation CreateClient($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $companyName: String, $message: String) {
  createClient(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, companyName: $companyName, message: $message) {
    firstName
    lastName
    email
    phone
    companyName
    message

  }
}
`;