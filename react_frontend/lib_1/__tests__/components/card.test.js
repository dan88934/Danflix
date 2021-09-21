import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';
const category = 'series';
const slideRows = [{
  title: 'Documentaries',
  data: [{
    genre: 'documentaries',
    maturity: '18',
    slug: 'tiger-king',
    description: 'Tiger King description',
    id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
    title: 'Tiger King',
    docId: 'IcRxJBanzE7nmIp2GMGb'
  }]
}, {
  title: 'Feel Good',
  data: [{
    title: 'Juno',
    genre: 'feel-good',
    description: 'Juno description',
    maturity: '0',
    id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
    slug: 'juno',
    docId: '4JDgdf5vE0K3YrW9ZnbP'
  }]
}];
describe('<Card />', () => {
  it('renders the <Card /> with populated data', () => {
    const {
      container,
      getByText
    } = render(dom(Card.Group, null, slideRows.map(slideItem => dom(Card, {
      key: `${category}-${slideItem.title.toLowerCase()}`
    }, dom(Card.Title, null, slideItem.title), dom(Card.Entities, null, slideItem.data.map(item => dom(Card.Item, {
      key: item.docId,
      item: item
    }, dom(Card.Image, {
      src: `/images/${category}/${item.genre}/${item.slug}/small.jpg`
    }), dom(Card.Meta, null, dom(Card.SubTitle, null, item.title), dom(Card.Text, null, item.description))))), dom(Card.Feature, {
      category: category
    }, dom(Player, null, dom(Player.Button, null), dom(Player.Video, null)))))));
    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Tiger King')).toBeTruthy();
    expect(getByText('Tiger King description')).toBeTruthy();
    expect(getByText('Feel Good')).toBeTruthy();
    expect(getByText('Juno')).toBeTruthy();
    expect(getByText('Juno description')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the <Card /> with and clicks the card feature', () => {
    const {
      container,
      queryByText,
      getByAltText,
      getByTestId
    } = render(dom(Card.Group, null, slideRows.map(slideItem => dom(Card, {
      key: `${category}-${slideItem.title.toLowerCase()}`
    }, dom(Card.Title, null, slideItem.title), dom(Card.Entities, null, slideItem.data.map(item => dom(Card.Item, {
      key: item.docId,
      item: item,
      "data-testid": `${item.slug}-item-feature`
    }, dom(Card.Image, {
      src: `/images/${category}/${item.genre}/${item.slug}/small.jpg`
    }), dom(Card.Meta, null, dom(Card.SubTitle, null, item.title), dom(Card.Text, null, item.description))))), dom(Card.Feature, {
      category: category
    }, dom(Player, null, dom(Player.Button, null), dom(Player.Video, null)))))));
    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('tiger-king-item-feature'));
    expect(queryByText('18')).toBeTruthy();
    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();
    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('juno-item-feature'));
    expect(queryByText('PG')).toBeTruthy();
    fireEvent.click(getByAltText('Close'));
    expect(queryByText('PG')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});