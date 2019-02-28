import gql from 'graphql-tag';

const GameAdded = gql`
  subscription {
    gameAdded {
      _id
      name
      createdAt
    }
  }
`;

const MyCurrentGames = gql`
  subscription {
    currentGamesAdded {
      _id
      name
      createdAt
    }
  }
`;

export {
  GameAdded,
  MyCurrentGames
};
