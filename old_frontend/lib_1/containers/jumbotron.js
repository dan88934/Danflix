import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components'; // import logo from './logo.svg';
// import './App.css';

export function JumbotronContainer() {
  return dom(Jumbotron.Container, null, jumboData.map(item => dom(Jumbotron, {
    key: item.id,
    direction: item.direction
  }, dom(Jumbotron.Pane, null, dom(Jumbotron.Title, null, item.title), dom(Jumbotron.SubTitle, null, item.subtitle)), dom(Jumbotron.Pane, null, dom(Jumbotron.Image, {
    src: item.image,
    alt: item.alt
  })))));
}