import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './components/menu'
import Boards from './components/boards'
import Createboard from './components/createBoard'
import BoardView from './components/boardView'
import Createteam from './components/createTeam'
import Team from './components/teams'
import Login from './components/login'
import Register from './components/register'
import Startpage from './components/startPage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
            <Switch>
                  <Route exact path="/" component={Startpage} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route exact path="/profiles" component={Boards} />
                  <Route path="/create_board" component={Createboard} />
                  <Route path="/board" component={BoardView} />
                  <Route path="/create_team" component={Createteam} />
                  <Route path="/team" component={Team} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
