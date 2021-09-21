import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
export default function SignUp() {
  const history = useHistory();
  const {
    firebase
  } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = event => {
    event.preventDefault();
    return firebase.auth().createUserWithEmailAndPassword(emailAddress, password).then(result => result.user.updateProfile({
      displayName: firstName,
      photoURL: Math.floor(Math.random() * 5) + 1
    }).then(() => {
      history.push(ROUTES.BROWSE);
    })).catch(error => {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    });
  };

  return dom(DomFrag, null, dom(HeaderContainer, null, dom(Form, null, dom(Form.Title, null, "Sign Up"), error && dom(Form.Error, null, error), dom(Form.Base, {
    onSubmit: handleSignup,
    method: "POST"
  }, dom(Form.Input, {
    placeholder: "First name",
    value: firstName,
    onChange: ({
      target
    }) => setFirstName(target.value)
  }), dom(Form.Input, {
    placeholder: "Email address",
    value: emailAddress,
    onChange: ({
      target
    }) => setEmailAddress(target.value)
  }), dom(Form.Input, {
    type: "password",
    value: password,
    autoComplete: "off",
    placeholder: "Password",
    onChange: ({
      target
    }) => setPassword(target.value)
  }), dom(Form.Submit, {
    disabled: isInvalid,
    type: "submit",
    "data-testid": "sign-up"
  }, "Sign Up")), dom(Form.Text, null, "Already a user? ", dom(Form.Link, {
    to: "/signin"
  }, "Sign in now.")), dom(Form.TextSmall, null, "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."))), dom(FooterContainer, null));
}