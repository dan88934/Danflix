import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
export function BrowseContainer({
  slides
}) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const {
    firebase
  } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    //We use Fuse for the live search function
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);
  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre']
    });
    const results = fuse.search(searchTerm).map(({
      item
    }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);
  return profile.displayName ? dom(DomFrag, null, loading ? dom(Loading, {
    src: user.photoURL
  }) : dom(Loading.ReleaseBody, null), dom(Header, {
    src: "joker1",
    dontShowOnSmallViewPort: true
  }, dom(Header.Frame, null, dom(Header.Group, null, dom(Header.Logo, {
    to: ROUTES.HOME,
    src: logo,
    alt: "Netflix"
  }), dom(Header.TextLink, {
    active: category === 'series' ? 'true' : 'false',
    onClick: () => setCategory('series')
  }, "Series"), dom(Header.TextLink, {
    active: category === 'films' ? 'true' : 'false',
    onClick: () => setCategory('films')
  }, "Films")), dom(Header.Group, null, dom(Header.Search, {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm
  }), dom(Header.Profile, null, dom(Header.Picture, {
    src: user.photoURL
  }), dom(Header.Dropdown, null, dom(Header.Group, null, dom(Header.Picture, {
    src: user.photoURL
  }), dom(Header.TextLink, null, user.displayName)), dom(Header.Group, null, dom(Header.TextLink, {
    onClick: () => firebase.auth().signOut()
  }, "Sign out")))))), dom(Header.Feature, null, dom(Header.FeatureCallOut, null, "Watch Joker Now"), dom(Header.Text, null, "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him."), dom(Header.PlayButton, null, "Play"))), dom(Card.Group, null, slideRows.map(slideItem => dom(Card, {
    key: `${category}-${slideItem.title.toLowerCase()}`
  }, dom(Card.Title, null, slideItem.title), dom(Card.Entities, null, slideItem.data.map(item => dom(Card.Item, {
    key: item.docId,
    item: item
  }, dom(Card.Image, {
    src: `/images/${category}/${item.genre}/${item.slug}/small.jpg`
  }), dom(Card.Meta, null, dom(Card.SubTitle, null, item.title), dom(Card.Text, null, item.description))))), dom(Card.Feature, {
    category: category
  }, dom(Player, null, dom(Player.Button, null), dom(Player.Video, {
    src: "/videos/bunny.mp4"
  })), dom("p", null, "player"))))), dom(FooterContainer, null)) : dom(SelectProfileContainer, {
    user: user,
    setProfile: setProfile
  });
} //Above - each item will have a file-name var. This var will be inserted where bunny is. It will be the same name as the video file