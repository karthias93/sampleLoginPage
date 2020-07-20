import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Login from './pages/Login'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <div className="bootstrap-container">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
