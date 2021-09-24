function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner, Close } from './styles/player';
export const PlayerContext = /*#__PURE__*/createContext();
export default function Player({
  children,
  ...restProps
}) {
  const [showPlayer, setShowPlayer] = useState(false);
  return dom(PlayerContext.Provider, {
    value: {
      showPlayer,
      setShowPlayer
    }
  }, dom(Container, restProps, children));
}

Player.Video = function PlayerVideo({
  src,
  ...restProps
}) {
  const {
    showPlayer,
    setShowPlayer
  } = useContext(PlayerContext);
  return showPlayer ? /*#__PURE__*/ReactDOM.createPortal(dom(Overlay, {
    onClick: () => setShowPlayer(false),
    "data-testid": "player"
  }, dom(Inner, null, dom("video", {
    id: "netflix-player",
    controls: true
  }, dom("source", {
    src: src,
    type: "video/mp4"
  })), dom(Close, null))), document.body) : null;
};

Player.Button = function PlayerButton({ ...restProps
}) {
  const {
    showPlayer,
    setShowPlayer
  } = useContext(PlayerContext);
  return dom(Button, _extends({
    onClick: () => setShowPlayer(showPlayer => !showPlayer)
  }, restProps), "Play");
};