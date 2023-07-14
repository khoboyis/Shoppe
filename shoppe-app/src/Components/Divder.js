import React, { Component } from 'react';
import './Divider.css'; 
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


class Divder extends Component {
    render() {
        return (
            <div className='section'>
                
                <h2> Shop the latest </h2> <span>
                    <Button variant="text"  >View all</Button></span>
            </div>
        );
    }
}

export default Divder;

