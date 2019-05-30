import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataServer: {
        name: '',
        phone: '',
        email: '',
        password: '',
        cPassword: ''
      },
      loadingText: ''
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  };

  inputHandler(obj) {
    this.setState({
      ...this.state,
      dataServer: {
        ...this.state.dataServer,
        [obj.target.name]: obj.target.value
      }
    });
  };

  clearForm() {
    this.setState({
      ...this.state,
      dataServer: {
        name: '',
        phone: '',
        email: '',
        password: '',
        cPassword: ''
      }
    });
  };

  submitForm() {
  };

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
              name='name'
              placeholder='Enter your name here'
              onChange={this.inputHandler}
              value={this.state.dataServer.name}
            /><br />

            <input
              type='text'
              className='form-control'
              name='phone'
              placeholder='Enter your phone number here'
              onChange={this.inputHandler}
              value={this.state.dataServer.phone}
            /><br />

              <input
                type='text'
                className='form-control'
                name='email'
                placeholder='Enter your email here'
                onChange={this.inputHandler}
                value={this.state.dataServer.email}
              /><br />

              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Enter your password here'
                onChange={this.inputHandler}
                value={this.state.dataServer.password}
              /><br />

              <input
                type='password'
                className='form-control'
                name='cPassword'
                placeholder='Enter your confirm password'
                onChange={this.inputHandler}
                value={this.state.dataServer.cPassword}
              /><br />

          <button type='button' className='btn btn-primary mr-3' onClick={this.submitForm}>Register</button>
          <button type='button' className='btn btn-dark mr-3' onClick={this.clearForm}>Clear</button>


          </center>
        </div>
      </div>
    );
  };
};

export default Register;
