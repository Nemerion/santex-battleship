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

const AddToMyGames = gql`
  mutation ($createdAt:Date, $name:String, $_id:ID) {
    addToMyGames(createdAt: $createdAt, name: $name, _id: $_id) {
      _id
      name
      createdAt
    }
  }
`;

export {
  CreateGame,
  AddToMyGames
};
