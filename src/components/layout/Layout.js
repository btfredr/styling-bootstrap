import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Music from '../../pages/Music';
import Container from 'react-bootstrap/Container';

const Layout = () => {
    return (
        <Router>
            <Navbar bg='light' variant='light' expand='lg'>
                <Navbar.Brand href='/'>React App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link to='/' className='nav-link'>
                            Home
                        </Nav.Link>
                        <Nav.Link to='/about' className='nav-link'>
                            About
                        </Nav.Link>
                        <Nav.Link to='/contact' className='nav-link'>
                            Contact
                        </Nav.Link>
                        <Nav.Link to='/music' className='nav-link'>
                            Music
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    );
};

export default Layout
