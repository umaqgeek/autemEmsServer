import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div className='container'>
        <br />
        <div className='col-md-4 card card-body mt-5'>
          <center className='py-5' style={{height: '450px'}}>
            <h2>Ops!<br />Nothing to see here ..</h2>
            <br />
            <Link to='/'>
              <button type='button' className='btn btn-success mt-4'>Go to Home</button>
            </Link>
          </center>
        </div>
      </div>
    );
  };
};

export default LoginPage;
