/* external imports */
import React from 'react';
import { Link } from 'react-router-dom';
/* styles */
// import './index.scss';
/* internal components */
import withNavbar from '../shared/hoc/withNavBar';

function App() {
  return (
    <>
      <h1> HomePage </h1>
      <h3><Link to="/pricing">Pricing</Link></h3>
    </>
  );
}

export default withNavbar(App);
