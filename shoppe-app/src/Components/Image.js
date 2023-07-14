import React, { Component } from 'react';
import  image1  from '../assets/image1.png';
import './Image.css';
import { Button } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Jumbotron } from 'react-bootstrap';

 class Image extends Component {
    render() {
        return (
            <div class="container">
    <div class="jumbotron">
        <div className='text'>
      <h3>Gold big hoops</h3>
      <h4>$ 68,00</h4>
      <MDBBtn outline color='light'>
        View products
      </MDBBtn>
      </div>
    </div>
  </div>
        
        );
    }
}

export default Image;


