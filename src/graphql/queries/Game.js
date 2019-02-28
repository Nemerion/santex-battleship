import gql from 'graphql-tag';


const FetchGamesPool = gql`
  query {
    gamesPool {
      _id
      name
      createdAt
    }
  }
`;

const FetchCurrentGames = gql`
  query  {
    myCurrentGames {
      _id
      name
      createdAt
    }
  }
`;

export {
  FetchGamesPool,
  FetchCurrentGames,
};
