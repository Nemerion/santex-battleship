// Package dependencies
import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Mutation } from 'react-apollo';

// Local dependencies
import CurrentGames from '../current_games/CurrentGames.component';
import GamesPool from '../games_pool/GamesPool.component';
import { CreateGame } from '../../graphql/mutations/Game';

// Styles
import classes from './Home.module.scss';

const EMPTY_MATRIX = Array(10).fill(null).map(() => Array(10).fill(0));

class Home extends Component {  
  state = {
    boardStatus:EMPTY_MATRIX,
  }

  render() {
    const { boardStatus } = this.state
    return (
      <div className={classes.home}>
        <Row>
          <Col xs={{size: 12}}>
            <div className="title">
              <h1>Battleship</h1>
            </div>
          </Col>
          <Col xs={{size: 4, offset: 8}} className="text-right">
          <Mutation
            mutation={CreateGame}
            variables={{ boardStatus }}
          >
            {createGame => <Button color="info" onClick={createGame}>New Game</Button>}
          </Mutation>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <GamesPool />
          </Col>
          <Col xs="6">
            <CurrentGames />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
