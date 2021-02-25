# React x Bootstrap x Routing

Start off by creating a new react app with CRA.

`yarn create react-app <appname>`

cd into your project folder and install the `bootstrap`, `react-bootstrap`, `react-router-dom` and `sass` packages. In moodle they only install the `react-bootstrap` package and by opting out of using the base `bootstrap` package they need to add a `CDN` to the ./public/index.html file.

```
yarn add react-bootstrap bootstrap react-router-dom
```

Now clean up any bloat as we have done previously and then make these folders and files:

```
./src/sass/main.scss
./src/pages/Home.js
./src/components/layout/Layout.js
```

In Layout.js, import Navbar and Nav from the bootstrap library.

```jsx
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
```

Now let's write out some of the component. I'll start mine off as an arrow function.

```jsx
const Layout = () => {
    return(

    )
}

export default Layout;
```

Let's add some navbar elements here:

```jsx
return (
  <Navbar bg='light' variant='light' expand='lg'>
    <Navbar.Brand href='/'>React App</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
```

Now, head over to your App.js and import Layout.js then render it.

```jsx
import Layout from './components/layout/Layout';
function App() {
  return <Layout />;
}

export default App;
```

If you have not done so already, go ahead and run yarn start so you can see what's going on in the browser.

Let's make a heading component to show the user what page they are on. Create a new component (Heading.js) under components/layout

```jsx
const Heading = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Heading;
```

Notice how we passing an already destructured "prop" instead of `(props)`, this is a perfectly viable way of passing props, however be mindful of how massive your passed values list might get. Example:

```jsx
const Card = ({ name, email, phone, age, pet, image, balance, sibling }) => {};

// VERSUS

const Card = props => {
  const { name, email, phone, age, pet, image, balance, sibling } = props;
};

// OR

const Card = props => {
    <h1>{props.name}</h1>
    <p>{props.email}</p>
    ...
}
```

Now let's import this in our Home.js and pass a title to our heading component.

```jsx
import Heading from '../components/layout/Heading';
const Home = () => {
  return (
    <>
      <Heading title='Home' />
    </>
  );
};

export default Home;
```

## Mini assignment time:

Create _three_ new pages, name the third one whatever you would like. Im naming mine Crypto.js

```
./src/pages/About.js
./src/pages/Contact.js
./src/pages/<choose a pagename>.js
```

Now import the Heading component on each page and pass it a title.

## Continuation

Let's add routing for our page. Head to the Layout.js component and import the following:

```jsx
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
```

Now let's import all our pages:

```jsx
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Crypto from '../../pages/Crypto';
```

In Layout.js wrap everything that is returned in `<Router>` tags.

```jsx
const Layout = () => {
  return (
    <Router>
      <Navbar>...etc</Navbar>
    </Router>
  );
};
```

It's time to set up our links in the navbar.

```jsx
const Layout = () => {
  return (
    <Router>
      <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand href='/'>Big Page</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/' exact className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
            <NavLink to='/contact' className='nav-link'>
              Contact
            </NavLink>
            <NavLink to='/crypto' className='nav-link'>
              Crypto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
};
```

Now import `Container` from bootstrap:

```jsx
import Container from 'react-bootstrap/Container';
```

Below the last `</Navbar>` start your `<Container>` tags.
and then put a `<Switch>` with routes inside. Like so:

```jsx
<Container>
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/crypto' component={Crypto} />
  </Switch>
</Container>
```

My entire Layout.js now looks like this:

```jsx
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
import Crypto from '../../pages/Crypto';

import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <Router>
      <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand href='/'>React App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink to='/' exact className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
            <NavLink to='/contact' className='nav-link'>
              Contact
            </NavLink>
            <NavLink to='/crypto' className='nav-link'>
              Crypto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/crypto' component={Crypto} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Layout;
```

Congrats! you have not set up a bootstrap navbar with routing in react!

# Lesson task

Fill out your pages with content that makes sense to have using Bootstrap components.

For me I would add some info about myself or my company and then on my crypto page fetch some data from a crypto API and then display it.
I will do this simultaneously with you guys.
