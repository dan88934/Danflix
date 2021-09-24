import React from 'react';
import { Container, Inner, Item, Pane, Title, SubTitle, Image } from './styles/jumbotron';
export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  //If no direction is passed if will default to a row 
  return dom(Item, restProps, dom(Inner, {
    direction: direction
  }, children));
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}) {
  return dom(Pane, restProps, children);
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}) {
  return dom(SubTitle, restProps, children);
};

Jumbotron.Image = function JumbotronImage({ ...restProps
}) {
  return dom(Image, restProps);
};