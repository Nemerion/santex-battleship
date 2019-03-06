// Package dependencies
import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Mutation } from 'react-apollo';

// Local dependencies
import CurrentGames from '../current_games/CurrentGames.component';
import GamesPool from '../games_pool/GamesPool.component';
import { CreateGame } from '../../graphql/mutations/Game';
import { formatDateToISO } from '../../helpers/formatters/commons';
import moment from 'moment';

// Styles
import classes from './Home.module.scss';

const EMPTY_MATRIX = Array(10).fill(null).map(() => Array(10).fill(0));
const NAME = navigator.appName; //just to give a name
const DATE = formatDateToISO(moment());
const TIME_PLAYED = new Date();

class Home extends Component {  
  state = {
    boardStatus: EMPTY_MATRIX,
    name: NAME,
    createdAt: DATE,
    timePlayed: TIME_PLAYED.toLocaleTimeString()
  }

  render() {
    const { boardStatus, name, createdAt, timePlayed } = this.state
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
            variables={{ boardStatus, name, createdAt, timePlayed }}
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
