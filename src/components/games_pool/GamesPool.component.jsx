// Package dependencies
import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';
import { withApollo, Query } from 'react-apollo';

// Local dependencies
import TableRow from './TableRow.component';
import { GameAdded } from '../../graphql/subscriptions/Game';
import { FetchGamesPool } from '../../graphql/queries/Game';

class GamesPool extends Component {
  render() {
    return (
      <Fragment>
        <h3>Games Pool</h3>
        <Table striped bordered hover dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Created At</th>
              <th>Player</th>
              <th>Play</th>
            </tr>
          </thead>
          <tbody>
            <Query
              query={FetchGamesPool}
            >
            {({ loading, error, data, subscribeToMore }) => {
              if (loading) return null;
              if (error) return `Error!: ${error}`;

              return (
                data.gamesPool.map((gameData, index) =>
                <TableRow
                  key={gameData._id}
                  index={index}
                  {...gameData} 
                  subscribeToGameAdded={() =>
                  subscribeToMore({
                    document: GameAdded,
                    updateQuery: (prev, { subscriptionData }) => {
                      console.log(subscriptionData);
                      console.log(Object.assign({}, prev, {
                        gamesPool: [...prev, subscriptionData.data.gameAdded]
                      }));
                      return Object.assign({}, prev, {
                        gamesPool: [...prev, subscriptionData.data.gameAdded]
                      });
                    }
                  })}
                />)
              );
            }}
            </Query>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default withApollo(GamesPool);
