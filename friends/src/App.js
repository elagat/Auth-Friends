import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './Login';
import PrivateRoute from './PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>FriendList</Link>
          </li>
        </ul>
        <Route path='login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendList} />
      </div>
    </Router>
  );
}

export default App;
