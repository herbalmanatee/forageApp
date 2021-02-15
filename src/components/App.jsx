import React from 'react';
import styled from 'styled-components';
import Nav from './Nav.jsx';
import ExplorePage from './ExplorePage.jsx';
import UserPage from './UserPage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

const Main = styled.div``;

let NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
  }

  render() {
    return (
      <Nav>
      </Nav>
    )
  }
}

export default App;