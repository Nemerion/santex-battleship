import gql from 'graphql-tag';


const FetchCurrentGames = gql`
  query {
    games {
      _id
    }
  }
`;

const FetchMyGames = gql`
  query {
    myGames {
      _id
    }
  }
`;

const FetchGameData = gql`
  query  {
    FetchGameData(_id: ID) {
      _id
    }
  }
`;

export {
  FetchCurrentGames,
  FetchMyGames,
  FetchGameData,
};
