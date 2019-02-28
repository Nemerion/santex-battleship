// Package dependencies
import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Local dependencies
import { formatDate } from '../../helpers/formatters/commons';


class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const {index, createdAt, timePlayed, name} = this.props;

    return (
      <tr>
        <td>{index}</td>
        <td>{formatDate(createdAt)}</td>
        <td>{timePlayed}</td>
        <td>{name}</td>
        <td>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret size="sm">
              Actions
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>See board</DropdownItem>
              <DropdownItem>Play</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </td>
      </tr>
    );
  }
}


export default TableRow;
