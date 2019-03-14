// Package dependencies
import React from 'react';
import { Container } from 'reactstrap';

// Local dependencies
import Routes from '../../Routes.component';
import { Header } from '../index';
import Login from '../login/Login.component';

// Styles
import './Root.scss';


const Root = () => (
  <Container fluid className="root-wrapper">
    <Header />
    <Login/>
    <div className="content">
      <Routes />
    </div>
  </Container>
);

export default Root;
