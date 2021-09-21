import React from 'react';
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './styles/form';
export default function Form({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
}

Form.Error = function FormError({
  children,
  ...restProps
}) {
  return dom(Error, restProps, children);
};

Form.Base = function FormBase({
  children,
  ...restProps
}) {
  return dom(Base, restProps, children);
};

Form.Title = function FormTitle({
  children,
  ...restProps
}) {
  return dom(Title, restProps, children);
};

Form.Text = function FormText({
  children,
  ...restProps
}) {
  return dom(Text, restProps, children);
};

Form.TextSmall = function FormTextSmall({
  children,
  ...restProps
}) {
  return dom(TextSmall, restProps, children);
};

Form.Link = function FormLink({
  children,
  ...restProps
}) {
  return dom(Link, restProps, children);
};

Form.Input = function FormInput({
  children,
  ...restProps
}) {
  return dom(Input, restProps, children);
};

Form.Submit = function FormSubmit({
  children,
  ...restProps
}) {
  return dom(Submit, restProps, children);
};