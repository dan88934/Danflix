function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';
export default function Profiles({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
}

Profiles.Title = function ProfilesTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Profiles.List = function ProfilesList({
  children,
  ...restProps
}) {
  return dom(List, restProps, children);
};

Profiles.User = function ProfilesUser({
  children,
  ...restProps
}) {
  return dom(Item, restProps, children);
};

Profiles.Picture = function ProfilesPicture({
  src,
  ...restProps
}) {
  return dom(Picture, _extends({}, restProps, {
    src: src ? `/images/users/${src}.png` : '/images/misc/loading.gif'
  }));
};

Profiles.Name = function ProfilesName({
  children,
  ...restProps
}) {
  return dom(Name, restProps, children);
};