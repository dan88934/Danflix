import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';
export default function Feature({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
}

Feature.Title = function FeatureTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Feature.SubTitle = function FeatureSubTitle({
  children,
  ...restProps
}) {
  return dom(SubTitle, restProps, children);
};