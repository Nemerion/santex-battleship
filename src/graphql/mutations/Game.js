import gql from 'graphql-tag';

const CreateGame = gql`
  mutation ($_id: ID!, $boardStatus: [[Int]]) {
    createGame(_id: $_id, boardStatus: $boardStatus) {
      _id
      boardStatus
    }
  }
`;

export {
  CreateGame
};
