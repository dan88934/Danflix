function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { Container, Group, Background, Dropdown, Picture, Link, Search, Profile, FeatureCallOut, SearchIcon, SearchInput, ButtonLink, PlayButton, Text, Feature, Logo } from './styles/header';
export default function Header({
  bg = true,
  children,
  ...restProps
}) {
  return bg ? dom(Background, _extends({
    "data-testid": "header-bg"
  }, restProps), children) : children;
}

Header.Frame = function HeaderFrame({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
};

Header.Group = function HeaderGroup({
  children,
  ...restProps
}) {
  return dom(Group, restProps, children);
};

Header.Logo = function HeaderLogo({
  to,
  ...restProps
}) {
  return dom(ReachRouterLink, {
    to: to
  }, dom(Logo, restProps));
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return dom(Search, restProps, dom(SearchIcon, {
    onClick: () => setSearchActive(searchActive => !searchActive),
    "data-testid": "search-click"
  }, dom("img", {
    src: "/images/icons/search.png",
    alt: "Search"
  })), dom(SearchInput, {
    value: searchTerm,
    onChange: ({
      target
    }) => setSearchTerm(target.value),
    placeholder: "Search films and series",
    active: searchActive,
    "data-testid": "search-input"
  }));
};

Header.Profile = function HeaderProfile({
  children,
  ...restProps
}) {
  return dom(Profile, restProps, children);
};

Header.Feature = function HeaderFeature({
  children,
  ...restProps
}) {
  return dom(Feature, null, children);
};

Header.Picture = function HeaderPicture({
  src,
  ...restProps
}) {
  return dom(Picture, _extends({}, restProps, {
    src: `/images/users/${src}.png`
  }));
};

Header.Dropdown = function HeaderDropdown({
  children,
  ...restProps
}) {
  return dom(Dropdown, restProps, children);
};

Header.TextLink = function HeaderTextLink({
  children,
  ...restProps
}) {
  return dom(Link, restProps, children);
};

Header.PlayButton = function HeaderPlayButton({
  children,
  ...restProps
}) {
  return dom(PlayButton, restProps, children);
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return dom(FeatureCallOut, restProps, children);
};

Header.Text = function HeaderText({
  children,
  ...restProps
}) {
  return dom(Text, restProps, children);
};

Header.ButtonLink = function HeaderButtonLink({
  children,
  ...restProps
}) {
  return dom(ButtonLink, restProps, children);
};