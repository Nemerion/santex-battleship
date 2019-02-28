// Package dependencies
import React, { Component, Fragment } from 'react';
import { withApollo, Subscription } from 'react-apollo';
import { Table } from 'reactstrap';

// Local dependencies
import TableRow from './TableRow.component';
import { MyCurrentGames } from '../../graphql/subscriptions/Game';
import { FetchCurrentGames } from '../../graphql/queries/Game';

class CurrentGames extends Component {
  state = {gamesAvailable: [],
    subscription: {}};
  
  componentDidMount() {
    this.getCurrentGames();
    //this.subscribeToCurrentGame();
  }

  // componentWillUnmount() {
  //   this.state.subscription.unsubscribe();
  // }

  getCurrentGames = () => {
    this.props.client.query({
      query: FetchCurrentGames
    }).then(response => {
      var currentGames = response.data.myCurrentGames;
      this.setState({
        gamesAvailable: currentGames
      });
    });
  }

  // subscribeToCurrentGame = () => {
  //   this.setState({
  //     subscription: this.props.client.subscribe({query: MyCurrentGames})
  //     .subscribe(data => {
  //       var game = data.data.gameAdded;
  //       var myGames = this.state.gamesAvailable || [];
  //       myGames.push(game);
  //       this.setState({
  //         gamesAvailable: myGames
  //       });
  //     })
  //   });
  // }

  getRows = (data) => {
    //console.log(data);
    return this.state.gamesAvailable.map((gameData, index) => <TableRow key={gameData._id} index={index} {...gameData} />);
  };

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
            <Subscription
              subscription={MyCurrentGames}
            >
              {data  => (this.getRows(data))}
            </Subscription>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default withApollo(CurrentGames);
