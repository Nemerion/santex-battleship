import gql from 'graphql-tag';

const CreateGame = gql`
  mutation ($createdAt:Date, $name:String, $boardStatus: [[Int]]) {
    createGame(createdAt: $createdAt, name: $name, boardStatus: $boardStatus) {
      _id
      boardStatus
      name
      createdAt
    }
  }
`;

export {
  CreateGame
};
