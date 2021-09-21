function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...rest
}) {
  return dom(Route, _extends({}, rest, {
    render: () => {
      if (!user) {
        return children;
      }

      if (user) {
        return dom(Redirect, {
          to: {
            pathname: loggedInPath
          }
        });
      }

      return null;
    }
  }));
}
export function ProtectedRoute({
  user,
  children,
  ...rest
}) {
  return dom(Route, _extends({}, rest, {
    render: ({
      location
    }) => {
      if (user) {
        return children;
      }

      if (!user) {
        return dom(Redirect, {
          to: {
            pathname: 'signin',
            state: {
              from: location
            }
          }
        });
      }

      return null;
    }
  }));
}