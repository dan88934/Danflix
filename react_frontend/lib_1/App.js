import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
export default function App() {
  const {
    user
  } = useAuthListener(); //Listeners let us know the state of user in app (are they signed in or out)

  return dom(Router, null, dom(Switch, null, dom(IsUserRedirect, {
    user: user,
    loggedInPath: ROUTES.BROWSE,
    path: ROUTES.SIGN_IN
  }, dom(Signin, null)), dom(IsUserRedirect, {
    user: user,
    loggedInPath: ROUTES.BROWSE,
    path: ROUTES.SIGN_UP
  }, dom(Signup, null)), dom(ProtectedRoute, {
    user: user,
    path: ROUTES.BROWSE
  }, dom(Browse, null)), dom(IsUserRedirect, {
    user: user,
    loggedInPath: ROUTES.BROWSE,
    path: ROUTES.HOME
  }, dom(Home, null))));
}