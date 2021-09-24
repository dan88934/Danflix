import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components'; //Check that the footer matches the below text

describe('<Footer />', () => {
  it('renders the <Footer /> with populated data', () => {
    const {
      container,
      getByText
    } = render(dom(Footer, null, dom(Footer.Title, null, "Questions? Contact us."), dom(Footer.Break, null), dom(Footer.Row, null, dom(Footer.Column, null, dom(Footer.Link, {
      href: "#"
    }, "FAQ"), dom(Footer.Link, {
      href: "#"
    }, "Investor Relations"), dom(Footer.Link, {
      href: "#"
    }, "Ways to Watch"), dom(Footer.Link, {
      href: "#"
    }, "Corporate Information"), dom(Footer.Link, {
      href: "#"
    }, "Netflix Originals")), dom(Footer.Column, null, dom(Footer.Link, {
      href: "#"
    }, "Help Centre"), dom(Footer.Link, {
      href: "#"
    }, "Jobs"), dom(Footer.Link, {
      href: "#"
    }, "Terms of Use"), dom(Footer.Link, {
      href: "#"
    }, "Contact Us")), dom(Footer.Column, null, dom(Footer.Link, {
      href: "#"
    }, "Account"), dom(Footer.Link, {
      href: "#"
    }, "Redeem gift cards"), dom(Footer.Link, {
      href: "#"
    }, "Privacy"), dom(Footer.Link, {
      href: "#"
    }, "Speed Test")), dom(Footer.Column, null, dom(Footer.Link, {
      href: "#"
    }, "Media Centre"), dom(Footer.Link, {
      href: "#"
    }, "Buy gift cards"), dom(Footer.Link, {
      href: "#"
    }, "Cookie Preferences"), dom(Footer.Link, {
      href: "#"
    }, "Legal Notices"))), dom(Footer.Break, null), dom(Footer.Text, null, "Netflix United Kingdom")));
    expect(getByText('Questions? Contact us.')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Investor Relations')).toBeTruthy();
    expect(getByText('Ways to Watch')).toBeTruthy();
    expect(getByText('Corporate Information')).toBeTruthy();
    expect(getByText('Netflix Originals')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});