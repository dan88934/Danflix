import React from 'react';
import ReactDOM from 'react-dom';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';
export default function Home() {
  return dom(DomFrag, null, dom(HeaderContainer, null, dom(Feature, null, dom(Feature.Title, null, "Unlimited films, TV shows and more."), dom(Feature.SubTitle, null, "Watch anywhere. Cancel at any time."), dom(OptForm, null, dom(OptForm.Input, {
    placeholder: "Email Address"
  }), dom(OptForm.Button, null, "Try it now"), dom(OptForm.Break, null), dom(OptForm.Text, null, "Ready to watch? Enter your email to create or restart your membership")))), dom(JumbotronContainer, null), dom(FaqsContainer, null), dom(FooterContainer, null));
}
ReactDOM.render(dom(Home, null), document.getElementById('app'));