// Package dependencies
import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';
import { withApollo } from 'react-apollo';

// Local dependencies
import TableRow from './TableRow.component';
import { GameAdded } from '../../graphql/subscriptions/Game';
import { FetchCurrentGames } from '../../graphql/queries/Game';

class GamesPool extends Component {
  state = { gamesAvailable: []};

  componentDidMount() {
    this.getGames();
    this.subscribeToGameAdded();
  }

  getGames = () => {
    this.props.client.query({
      query: FetchCurrentGames
    }).then(response => {
      var gamesPool = response.data.games;
      this.setState({
        gamesAvailable: gamesPool
      });
    });
  }

  subscribeToGameAdded = () => {
    this.props.client.subscribe({query: GameAdded})
    .subscribe(data => {
      var game = data.data.gameAdded;
      var actualGames = this.state.gamesAvailable || [];
      actualGames.push(game);
      this.setState({
        gamesAvailable: actualGames
      });
    });
  }

  getRows = () => {
    return this.state.gamesAvailable.map((gameData, index) => <TableRow key={index} index={index} {...gameData} />);
  };

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
              <th />
            </tr>
          </thead>
          <tbody>
            {this.getRows()}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default withApollo(GamesPool);