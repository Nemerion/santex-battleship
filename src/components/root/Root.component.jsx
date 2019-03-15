// Package dependencies
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Local dependencies
import Routes from '../../Routes.component';
import { Header } from '../index';

// Styles
import './Root.scss';

export default class Root extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <Container fluid className="root-wrapper">
        <Header user={this.state.user}/>
        <div className="content">
          <Routes />
        </div>
      </Container>
    )
  }
}
