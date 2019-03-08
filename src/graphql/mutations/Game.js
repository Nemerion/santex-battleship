import gql from 'graphql-tag';

const CreateGame = gql`
  mutation ($createdAt:Date, $name:String, $timePlayed:String, $boardStatus: [[Int]]) {
    createGame(createdAt: $createdAt, name: $name, timePlayed:$timePlayed, boardStatus: $boardStatus) {
      _id
      boardStatus
      name
      createdAt
      timePlayed
    }
  }
`;

const AddToMyGames = gql`
  mutation ($createdAt:Date, $name:String, $timePlayed:String, $_id:ID) {
    addToMyGames(createdAt: $createdAt, name: $name, timePlayed:$timePlayed, _id: $_id) {
      _id
      name
      createdAt
      timePlayed
    }
  }
`;

export {
  CreateGame,
  AddToMyGames
};
