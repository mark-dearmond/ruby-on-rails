import './Navigation.css';
import { NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function Navigation() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className="mb-5">
            <NavLink className="nav-link" exact activeClassName="active" to="/">
              <Navbar.Brand>
                Ruby on Rails
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <NavLink className="nav-link" exact activeClassName="active" to="/">Products</NavLink>
                    <NavLink className="nav-link" exact activeClassName="active" to="/create">
                      <Button variant="success">
                        + New Product
                      </Button>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;
