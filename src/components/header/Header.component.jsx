// Package dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login.component';
import Modal from 'react-responsive-modal';
import { Button } from 'reactstrap';
import firebase from 'firebase';

// Styles
import classes from './Header.module.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      open: false,
      user: this.props.user
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, user } = this.state;

    return (
      <div className={classes.header}>
        <Link to="/" className={classes.header_logo}>
          Home
        </Link>
        <div>
          <Button onClick={this.onOpenModal}>Sign in</Button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <Login user={this.state.user}/>
          </Modal>
        </div>
      </div>
    )
  }
};
