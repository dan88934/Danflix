function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Item, Inner, Header, Body } from './styles/accordion';
const ToggleContext = /*#__PURE__*/createContext();
export default function Accordion({
  children,
  ...restProps
}) {
  return dom(Container, restProps, dom(Inner, null, children));
} // State is for keeping track of changes on the page

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Accordion.Item = function AccordionItem({
  children,
  ...restProps
}) {
  const [toggleShow, setToggleShow] = useState(false);
  return dom(ToggleContext.Provider, {
    value: {
      toggleShow,
      setToggleShow
    }
  }, dom(Item, restProps, children), ";");
};

Accordion.Header = function AccordionHeader({
  children,
  ...restProps
}) {
  //Passed into item
  const {
    toggleShow,
    setToggleShow
  } = useContext(ToggleContext);
  return dom(Header, _extends({
    onClick: () => setToggleShow(!toggleShow)
  }, restProps), children, toggleShow ? dom("img", {
    src: "/images/icons/close-slim.png",
    alt: "Close"
  }) : dom("img", {
    src: "/images/icons/add.png",
    alt: "Open"
  }));
};

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}) {
  const {
    toggleShow
  } = useContext(ToggleContext);
  return toggleShow ? dom(Body, restProps, children) : null;
  return dom(Body, _extends({
    className: toggleShow ? 'open' : 'closed'
  }, restProps), dom("span", null, children));
};