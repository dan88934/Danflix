function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useContext, createContext } from 'react';
import { Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Item, Image } from './styles/card';
export const FeatureContext = /*#__PURE__*/createContext();
export default function Card({
  children,
  ...restProps
}) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return dom(FeatureContext.Provider, {
    value: {
      showFeature,
      setShowFeature,
      itemFeature,
      setItemFeature
    }
  }, dom(Container, restProps, children));
}

Card.Group = function CardGroup({
  children,
  ...restProps
}) {
  return dom(Group, restProps, children);
};

Card.Title = function CardTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Card.SubTitle = function CardSubTitle({
  children,
  ...restProps
}) {
  return dom(SubTitle, restProps, children);
};

Card.Text = function CardText({
  children,
  ...restProps
}) {
  return dom(Text, restProps, children);
};

Card.Entities = function CardEntities({
  children,
  ...restProps
}) {
  return dom(Entities, restProps, children);
};

Card.Meta = function CardMeta({
  children,
  ...restProps
}) {
  return dom(Meta, restProps, children);
};

Card.Item = function CardItem({
  item,
  children,
  ...restProps
}) {
  const {
    setShowFeature,
    setItemFeature
  } = useContext(FeatureContext);
  return dom(Item, _extends({
    onClick: () => {
      setItemFeature(item);
      setShowFeature(true);
    }
  }, restProps), children);
};

Card.Image = function CardImage({ ...restProps
}) {
  return dom(Image, restProps);
};

Card.Feature = function CardFeature({
  children,
  category,
  ...restProps
}) {
  const {
    showFeature,
    itemFeature,
    setShowFeature
  } = useContext(FeatureContext);
  return showFeature ? dom(Feature, _extends({}, restProps, {
    src: `/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`
  }), dom(Content, null, dom(FeatureTitle, null, itemFeature.title), dom(FeatureText, null, itemFeature.description), dom(FeatureClose, {
    onClick: () => setShowFeature(false)
  }, dom("img", {
    src: "/images/icons/close.png",
    alt: "Close"
  })), dom(Group, {
    margin: "30px 0",
    flexDirection: "row",
    alignItems: "center"
  }, dom(Maturity, {
    rating: itemFeature.maturity
  }, itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity), dom(FeatureText, {
    fontWeight: "bold"
  }, itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1))), children)) : null;
};