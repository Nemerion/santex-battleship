import gql from 'graphql-tag';

const CreateGame = gql`
  mutation ($boardStatus: [[Int]]) {
    createGame(boardStatus: $boardStatus) {
      _id
      boardStatus
    }
  }
`;

export {
  CreateGame
};
