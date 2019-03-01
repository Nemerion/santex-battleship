// Package dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';

// Local dependencies
import { formatDate } from '../../helpers/formatters/commons';
import { AddToMyGames } from '../../graphql/mutations/Game';

// Styles
//import classes from './GamesPool.module.scss'; className={classes.header_logo}
class TableRow extends Component {

  componentDidMount() {
    this.props.subscribeToMore();
  }

  render() {
    const {index, createdAt, name, _id} = this.props;
    const route = "/game/"+_id;

    return (
      <tr>
        <td>{index}</td>
        <td>{formatDate(createdAt)}</td>
        <td>{name}</td>
        <td>
          <Mutation
            mutation={AddToMyGames}
            variables={{ name, createdAt, _id }}
          >
           {addToMyGames => <Link to={route} onClick={addToMyGames}>START</Link>}
          </Mutation>
        </td>
      </tr>
    );
  }
}

export default TableRow;
