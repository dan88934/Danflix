import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
export function SelectProfileContainer({
  user,
  setProfile
}) {
  return dom(DomFrag, null, dom(Header, {
    bg: false
  }, dom(Header.Frame, null, dom(Header.Logo, {
    to: ROUTES.HOME,
    src: logo,
    alt: "Netflix"
  }))), dom(Profiles, null, dom(Profiles.Title, null, "Who's watching?"), dom(Profiles.List, null, dom(Profiles.User, {
    onClick: () => setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    }),
    "data-testid": "user-profile"
  }, dom(Profiles.Picture, {
    src: user.photoURL
  }), dom(Profiles.Name, null, user.displayName)))));
}