import './Navigation.css';
import { NavLink, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function Navigation() {
  return (
    <div>
        <Navbar bg="light" expand="lg" className="mb-5">
            <Link className="nav-link" to="/">
              <Navbar.Brand>
                Ruby on Rails
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <NavLink className="nav-link" exact activeClassName="active" to="/">Products</NavLink>
                    <Link className="nav-link" to="/create">
                      <Button variant="success">
                        + New Product
                      </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;
