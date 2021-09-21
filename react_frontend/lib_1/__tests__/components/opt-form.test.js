import React from 'react';
import { render } from '@testing-library/react';
import { OptForm } from '../../components';
describe('<OptForm />', () => {
  it('renders the <OptForm /> with populated data', () => {
    const {
      container,
      getByText,
      getByPlaceholderText
    } = render(dom(OptForm, null, dom(OptForm.Input, {
      placeholder: "Email address"
    }), dom(OptForm.Button, null, "Try it now"), dom(OptForm.Break, null), dom(OptForm.Text, null, "Ready to watch? Enter your email to create or restart your membership.")));
    expect(getByText('Try it now')).toBeTruthy();
    expect(getByText('Ready to watch? Enter your email to create or restart your membership.')).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});