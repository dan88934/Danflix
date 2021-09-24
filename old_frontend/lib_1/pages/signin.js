import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
export default function Signin() {
  const history = useHistory();
  const {
    firebase
  } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = event => {
    event.preventDefault(); // firebase work here!

    firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => {
      // push to the browse page
      history.push(ROUTES.BROWSE);
    }).catch(error => {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    });
  };

  return dom(DomFrag, null, dom(HeaderContainer, null, "Hello from the sign in!", dom(Form, null, dom(Form.Title, null, "Sign In"), error && dom(Form.Error, {
    "data-testid": "test"
  }, error), dom(Form.Base, {
    onSubmit: handleSignIn,
    method: "POST"
  }, dom(Form.Input, {
    placeholder: "Email address",
    value: emailAddress,
    onChange: ({
      target
    }) => setEmailAddress(target.value)
  }), dom(Form.Input, {
    type: "Password",
    autoComplete: "off",
    placeholder: "Password",
    value: password,
    onChange: ({
      target
    }) => setPassword(target.value)
  }), dom(Form.Submit, {
    disabled: isInvalid,
    type: "submit"
  }, "Signin")), dom(Form.Text, null, "New to Netfix? ", dom(Form.Link, {
    to: "/signup"
  }, "Sign up now ")), dom(Form.TextSmall, null, "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn More."))), dom(FooterContainer, null));
}