import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../components';
jest.mock('react-router-dom');
describe('<Form />', () => {
  it('renders the <Form /> with populated data', () => {
    //First we check that the form is appearing on the page
    const {
      container,
      getByText,
      getByPlaceholderText
    } = render(dom(Form, null, dom(Form.Title, null, "Sign In Now"), dom(Form.Base, null, dom(Form.Input, {
      placeholder: "Email address",
      onChange: () => {}
    }), dom(Form.Input, {
      type: "password",
      placeholder: "Password",
      onChange: () => {}
    }), dom(Form.Submit, {
      type: "submit",
      disabled: true
    }, "Sign In")), dom(Form.Text, null, "New to Netflix? ", dom(Form.Link, {
      to: "/signup"
    }, "Sign up now.")), dom(Form.TextSmall, null, "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")));
    expect(getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")).toBeTruthy();
    expect(getByText('Sign In Now')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Sign In').disabled).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders the <Form /> with an error', () => {
    const {
      container,
      getByText,
      queryByText
    } = render(dom(Form, null, dom(Form.Error, null, "Your email address is already being used"), dom(Form.Submit, {
      type: "submit"
    }, "Sign In")));
    expect(getByText('Your email address is already being used')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});