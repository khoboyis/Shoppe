import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.svg';

import { ShoppingCartOutlined, SearchOutlined, PermIdentityOutlined, HomeOutlined } from '@mui/icons-material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bgColor='light' variant="dark">
      <Container>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="nav navbar-nav navbar-right"
          > 
          <Nav.Link href="#" style={{color:"black"}} ><img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> </Nav.Link>
          <Nav.Link href="#" style={{color:"black"}} > Shop</Nav.Link>
            <Nav.Link href="#" style={{color:"black"}}>Blog</Nav.Link>
            <Nav.Link href="#" style={{color:"black"}}>Our story</Nav.Link>
            <Nav.Link href="#" style={{color:"black"}}> | </Nav.Link> 
            <Nav.Link href="#" style={{color:"black"}} active><PersonOutlinedIcon /></Nav.Link>
            <Nav.Link href="#" style={{color:"black"}}><ShoppingCartOutlined /> </Nav.Link>
            <Nav.Link href="#" style={{color:"black"}}><SearchOutlined /></Nav.Link>
                  
             </Nav>
            
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;