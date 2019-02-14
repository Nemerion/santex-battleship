import gql from 'graphql-tag';


const FetchCurrentGames = gql`
  query {
    games {
      _id
      name
      createdAt
    }
  }
`;

const FetchGameData = gql`
  query  {
    game(_id: ID) {
      _id
      name
      createdAt
    }
  }
`;

export {
  FetchCurrentGames,
  FetchGameData,
};
