import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className='container'>
        <br />
        <div className='col-md-4 card card-body mt-5'>
          <center className=''>

            <img src='images/Logo-AUTeM-Alumni-UTeM.png' style={{maxWidth: screen.width*0.3}} />

            <br /><br />

            <h3>Register</h3>

            <hr />

            <input
              type='text'
              className='form-control'
              placeholder='Enter your name here'
            /><br />

            <input
              type='text'
              className='form-control'
              placeholder='Enter your phone number here'
            /><br />

              <input
                type='text'
                className='form-control'
                placeholder='Enter your email here'
              /><br />

              <input
                type='password'
                className='form-control'
                placeholder='Enter your password here'
              /><br />

              <input
                type='password'
                className='form-control'
                placeholder='Enter your confirm password'
              /><br />

          <button type='button' className='btn btn-primary mr-3'>Register</button>
          <button type='button' className='btn btn-dark mr-3'>Clear</button>


          </center>
        </div>
      </div>
    );
  };
};

export default Register;
