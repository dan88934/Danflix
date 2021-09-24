import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  var _useAuthListener = useAuthListener(),
      user = _useAuthListener.user; //Listeners let us know the state of user in app (are they signed in or out)

  return React.createElement(
    Router,
    null,
    React.createElement(
      Switch,
      null,
      React.createElement(
        IsUserRedirect,
        { user: user, loggedInPath: ROUTES.BROWSE, path: ROUTES.SIGN_IN },
        React.createElement(Signin, null)
      ),
      React.createElement(
        IsUserRedirect,
        { user: user, loggedInPath: ROUTES.BROWSE, path: ROUTES.SIGN_UP },
        React.createElement(Signup, null)
      ),
      React.createElement(
        ProtectedRoute,
        { user: user, path: ROUTES.BROWSE },
        React.createElement(Browse, null)
      ),
      React.createElement(
        IsUserRedirect,
        { user: user, loggedInPath: ROUTES.BROWSE, path: ROUTES.HOME },
        React.createElement(Home, null)
      )
    )
  );
}

ReactDOM.render(<App />, document.getElementById('root'));