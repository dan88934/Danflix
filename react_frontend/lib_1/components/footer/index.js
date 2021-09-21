import React from 'react';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer';
export default function Footer({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
}

Footer.Row = function FooterRow({
  children,
  ...restProps
}) {
  return dom(Row, restProps, children);
};

Footer.Column = function FooterColumn({
  children,
  ...restProps
}) {
  return dom(Column, restProps, children);
};

Footer.Link = function FooterLink({
  children,
  ...restProps
}) {
  return dom(Link, restProps, children);
};

Footer.Title = function FooterTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Footer.Text = function FooterText({
  children,
  ...restProps
}) {
  return dom(Text, restProps, children);
};

Footer.Break = function FooterBreak({
  children,
  ...restProps
}) {
  return dom(Break, restProps, children);
};