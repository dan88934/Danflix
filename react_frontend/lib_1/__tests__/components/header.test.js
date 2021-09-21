import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from '../../components';
jest.mock('react-router-dom');
describe('<Header />', () => {
  it('renders the basic <Header /> with a background', () => {
    const {
      container,
      getByText,
      getByTestId
    } = render(dom(Header, null, dom(Header.Frame, null, dom(Header.Logo, {
      src: "/logo.svg",
      alt: "Netflix"
    }), dom(Header.TextLink, {
      active: "true"
    }, "Hello I am a link!"))));
    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(getByTestId('header-bg')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the basic <Header /> without a background', () => {
    const {
      container,
      getByText,
      queryByTestId
    } = render(dom(Header, {
      bg: false
    }, dom(Header.Frame, null, dom(Header.Logo, {
      src: "/logo.svg",
      alt: "Netflix"
    }), dom(Header.ButtonLink, null, "Sign In"), dom(Header.TextLink, {
      active: false
    }, "Hello I am a link!"))));
    expect(getByText('Hello I am a link!')).toBeTruthy();
    expect(queryByTestId('header-bg')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the full <Header> with a background', () => {
    const {
      container,
      getByText,
      getByTestId
    } = render(dom(Header, {
      src: "joker1",
      dontShowOnSmallViewPort: true
    }, dom(Header.Frame, null, dom(Header.Group, null, dom(Header.Logo, {
      src: "/images/logo.svg",
      alt: "Netflix"
    }), dom(Header.TextLink, {
      active: false,
      onClick: () => {}
    }, "Series"), dom(Header.TextLink, {
      active: true,
      onClick: () => {}
    }, "Films")), dom(Header.Group, null, dom(Header.Search, {
      searchTerm: "Joker",
      setSearchTerm: () => {}
    }), dom(Header.Profile, null, dom(Header.Picture, {
      src: "/images/karl.png"
    }), dom(Header.Dropdown, null, dom(Header.Group, null, dom(Header.Picture, {
      src: "/images/karl.png"
    }), dom(Header.TextLink, null, "Karl Hadwen")), dom(Header.Group, null, dom(Header.TextLink, {
      onClick: () => {}
    }, "Sign out")))))), dom(Header.Feature, null, dom(Header.FeatureCallOut, null, "Watch Joker Now"), dom(Header.Text, null, "Forever alone in a crowd..."), dom(Header.PlayButton, null, "Play"))));
    expect(getByTestId('search-input')).toBeTruthy();
    expect(getByTestId('search-input').value).toBe('Joker');
    fireEvent.change(getByTestId('search-input'), {
      target: {
        value: 'Simpsons'
      }
    });
    fireEvent.click(getByTestId('search-click'));
    expect(getByText('Series')).toBeTruthy();
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Karl Hadwen')).toBeTruthy();
    expect(getByText('Watch Joker Now')).toBeTruthy();
    expect(getByText('Sign out')).toBeTruthy();
    expect(getByText('Forever alone in a crowd...')).toBeTruthy();
    expect(getByText('Play')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});