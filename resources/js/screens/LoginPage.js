import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div className='container'>
        <br />
        <div className='col-md-4 card card-body mt-5'>
          <center className=''>

            <img src='images/Logo-AUTeM-Alumni-UTeM.png' style={{maxWidth: screen.width*0.5}} />

            <br /><br />

            <h3>Login</h3>

            <hr />
              <input
                type='text'
                className='form-control'
                placeholder='Enter your email here'
              />

            <br />

              <input
                type='password'
                className='form-control'
                placeholder='Enter your password here'
              />

            <br />

          <button type='button' className='btn btn-success mr-3'>Submit</button>
          <Link to='/registerpage'>
            <button type='button' className='btn btn-primary'> Register </button>
          </Link>

          <br />
          <div className='mt-3'><br /></div>
          <div className='mt-2'><br /></div>
          <div>
            <center>
              <a href='https://www.facebook.com/kidzeclipes' target='_blank'>Developed by Umar Mukhtar</a> <br />
            <a href='http://tuffah.info' target='_blank'>Version 1.1.0, 2019</a>
            </center>
          </div>

          </center>
        </div>
      </div>
    );
  };
};

export default LoginPage;
