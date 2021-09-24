import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';
describe('<Player />', () => {
  it('renders the <Player /> with a bunny video', () => {
    const {
      container,
      getByText,
      queryByTestId
    } = render(dom(Player, null, dom(Player.Button, null), dom(Player.Video, {
      src: "/videos/bunny.mp4"
    })));
    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));
    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(queryByTestId('player'));
    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});