import './Navigation.css';
import { NavLink, Router} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className="mb-5">
            <Navbar.Brand>Highlands</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink className="nav-link" exact activeClassName="active" to="/">Listings</NavLink>
                    <NavLink className="nav-link" exact activeClassName="active" to="/create">Create</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;
