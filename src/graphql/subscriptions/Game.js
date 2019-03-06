import gql from 'graphql-tag';

const GameAdded = gql`
  subscription {
    gameAdded {
      _id
      name
      createdAt
      timePlayed
    }
  }
`;

const MyCurrentGames = gql`
  subscription {
    currentGamesAdded {
      _id
      name
      createdAt
      timePlayed
    }
  }
`;

export {
  GameAdded,
  MyCurrentGames
};
