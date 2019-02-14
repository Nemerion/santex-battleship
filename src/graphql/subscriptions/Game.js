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

export {
  GameAdded
};
