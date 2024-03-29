import React from 'react';
// import jumboData from '../fixtures/jumbo';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';
// import logo from './logo.svg';
// import './App.css';

export function JumbotronContainer() {
  return (
        <Jumbotron.Container>
          {jumboData.map((item) => (
              <Jumbotron key={item.id} direction={item.direction}>
                <Jumbotron.Pane> 
                  <Jumbotron.Title>{item.title}</Jumbotron.Title>
                  <Jumbotron.SubTitle>{item.subtitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                  <Jumbotron.Image src={item.image} alt={item.alt} />
                </Jumbotron.Pane>
              </Jumbotron>
          ))}
        </Jumbotron.Container>
  );
}


