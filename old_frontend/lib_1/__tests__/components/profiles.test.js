import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';
describe('<Profiles />', () => {
  it('renders the <Profiles /> with populated data', () => {
    const {
      container,
      getByText,
      getByTestId
    } = render(dom(Profiles, null, dom(Profiles.Title, null, "Who's watching?"), dom(Profiles.List, null, dom(Profiles.User, {
      onClick: () => {}
    }, dom(Profiles.Picture, {
      src: "/images/karl.png",
      "data-testid": "profile-picture"
    }), dom(Profiles.Name, null, "Karl")))));
    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Karl'));
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the <Profiles /> with populated data but misc profile image', () => {
    const {
      container,
      getByText,
      getByTestId
    } = render(dom(Profiles, null, dom(Profiles.Title, null, "Who's watching?"), dom(Profiles.List, null, dom(Profiles.User, {
      onClick: () => {}
    }, dom(Profiles.Picture, {
      "data-testid": "profile-picture-misc"
    }), dom(Profiles.Name, null, "Karl")))));
    expect(getByText("Who's watching?"));
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Karl'));
    expect(container.firstChild).toMatchSnapshot();
  });
});