import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';
export default function OptForm({
  children,
  ...restProps
}) {
  return dom(Container, restProps, children);
}

OptForm.Input = function OptFormInput({ ...restProps
}) {
  return dom(Input, restProps);
};

OptForm.Button = function OptFormButton({
  children,
  ...restProps
}) {
  return dom(Button, restProps, children, " ", dom("img", {
    src: "/images/icons/chevron-right.png",
    alt: "Try Now"
  }));
};

OptForm.Text = function OptFormText({
  children,
  ...restProps
}) {
  return dom(Text, restProps, children);
};

OptForm.Break = function OptFormBreak({ ...restProps
}) {
  return dom(Break, restProps);
};