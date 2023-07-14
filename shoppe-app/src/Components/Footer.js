import React, { useState } from 'react';
import './Footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new URLSearchParams();
    formData.append('email', email);

    fetch("https://subscriber-server-service.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
      .then((response) => response.json())
      .then((data) => setMessage("Subscription Successful"))
      .catch((error) => setMessage("Error: " + error));
  };

  return (
    <MDBFooter bgColor='light' className='text-center text-md-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          {/* Your existing columns */}

          {/* Newsletter signup form */}
          <MDBRow className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit}>
              <MDBCol md='5' size='15' className='mb-4 mb-md-0'>
                <MDBInput 
                  type='text' 
                  id='form5Example2' 
                  label='Email address' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} // Set email state on input change
                />
              </MDBCol>

              <MDBCol size='auto' className='mb-4 mb-md-0'>
                <MDBBtn type="submit">Subscribe</MDBBtn>
              </MDBCol>
            </form>
            {/* Display message */}
            <p>{message}</p>
          </MDBRow>
          
          {/* Social media icons */}
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='12' className='text-center'>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="instagram" size="2x" className="p-2" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="facebook-f" size="2x" className="p-2" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="twitter" size="2x" className="p-2" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="linkedin-in" size="2x" className="p-2" />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBRow>
        <div className='bottom p-3' bgColor='light'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='#'>
          Shelly. All rights reserved. | <a href="/terms">Terms of use</a> | <a href="/privacy">Privacy policy</a>
        </a>
      </div>
      </MDBContainer>
    </MDBFooter>
  );
}