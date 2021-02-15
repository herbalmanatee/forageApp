import React from 'react';
import styled from 'styled-components';
import ExplorePage from './ExplorePage.jsx';
import Home from './Home.jsx';
import UserPage from './UserPage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

let NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

let Nav = (props) => {

  return(
    <Router>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/user">My Map</Link>
      </NavBar>
      <Switch>
        <Route path="/explore">
          <ExplorePage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route to="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Nav;