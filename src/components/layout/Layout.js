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
                        <NavLink to='/' className='nav-link'>
                            Home
                        </NavLink>
                        <NavLink to='/about' className='nav-link'>
                            About
                        </NavLink>
                        <NavLink to='/contact' className='nav-link'>
                            Contact
                        </NavLink>
                        <NavLink to='/music' className='nav-link'>
                            Music
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/music' component={Music} />
                </Switch>
            </Container>
        </Router>
    );
};

export default Layout
