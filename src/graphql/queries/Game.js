import gql from 'graphql-tag';


const FetchGamesPool = gql`
  query {
    gamesPool {
      _id
      name
      createdAt
      timePlayed
    }
  }
`;

const FetchCurrentGames = gql`
  query  {
    myCurrentGames {
      _id
      name
      createdAt
      timePlayed
    }
  }
`;

export {
  FetchGamesPool,
  FetchCurrentGames,
};
