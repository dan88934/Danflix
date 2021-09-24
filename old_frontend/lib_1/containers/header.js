import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
export function HeaderContainer({
  children
}) {
  return dom(Header, null, dom(Header.Frame, null, dom(Header.Logo, {
    to: ROUTES.HOME,
    alt: "Neflix",
    src: logo
  }), dom(Header.ButtonLink, {
    to: ROUTES.SIGN_IN
  }, "Sign In")), children); // return children
}