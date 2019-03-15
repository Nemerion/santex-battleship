// Package dependencies
import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';
import { withApollo, Query } from 'react-apollo';

// Local dependencies
import TableRow from './TableRow.component';
import { FetchCurrentGames } from '../../graphql/queries/Game';
import { MyCurrentGames } from '../../graphql/subscriptions/Game';

class CurrentGames extends Component {
  render() {
    return (
      <Fragment>
        <h3>My current games</h3>
        <Table striped bordered hover dark>
          <thead>
          <tr>
            <th>#</th>
            <th>Created At</th>
            <th>Time Played</th>
            <th>Turn</th>
            <th />
          </tr>
          </thead>
          <tbody>
            <Query query={FetchCurrentGames} pollInterval={15000}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return null;
                if (error) return `Error!: ${error}`;

                const subscribeToFetchCurrentGames = () => subscribeToMore({
                  document: MyCurrentGames,
                  updateQuery: (prev, { subscriptionData }) => {
                    //check if value exists and is already added.
                    if (!subscriptionData.data || (prev.myCurrentGames !== [] &&
                    prev.myCurrentGames[prev.myCurrentGames.length - 1]._id === subscriptionData.data.currentGamesAdded._id)) {
                      return prev;
                    }

                    const obj = Object.assign({}, {
                      myCurrentGames: [...prev.myCurrentGames, subscriptionData.data.currentGamesAdded]
                    });

                    return obj;
                  }
                })

                return (
                  data.myCurrentGames.map((gameData, index) =>
                  <TableRow
                    key={gameData._id}
                    index={index}
                    {...gameData}
                    subscribeToMore={subscribeToFetchCurrentGames}
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

export default withApollo(CurrentGames);
