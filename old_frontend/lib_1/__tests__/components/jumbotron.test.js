import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo';
describe('<Jumbotron />', () => {
  it('renders the <Jumbotron /> with populated data', () => {
    const {
      container,
      getByText,
      getByAltText,
      getByTestId
    } = render(dom(Jumbotron.Container, null, jumboData.map(item => dom(Jumbotron, {
      key: item.id
    }, dom(Jumbotron.Pane, null, dom(Jumbotron.Title, null, item.title), dom(Jumbotron.SubTitle, null, item.subTitle)), dom(Jumbotron.Pane, null, dom(Jumbotron.Image, {
      src: item.image,
      alt: item.alt,
      "data-testid": `${item.id}-jumbo-image`
    }))))));
    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
    expect(getByTestId('1-jumbo-image')).toBeTruthy();
    expect(getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});