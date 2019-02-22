// Package dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Local dependencies
import { formatDate } from '../../helpers/formatters/commons';

// Styles
import classes from './GamesPool.module.scss';
class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {index, createdAt, name, _id} = this.props;

    return (
      <tr>
        <td>{index}</td>
        <td>{formatDate(createdAt)}</td>
        <td>{name}</td>
        <td>
          <Link to="/game/:id" className={classes.header_logo}>Start</Link>
        </td>
      </tr>
    );
  }
}

export default TableRow;
