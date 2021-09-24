import React from 'react';
import { Footer } from '../components';
export function FooterContainer() {
  return dom(Footer, null, dom(Footer.Title, null, "Questions? Contact us."), dom(Footer.Break, null), dom(Footer.Row, null, dom(Footer.Column, null, dom(Footer.Link, {
    href: "#"
  }, "FAQ"), dom(Footer.Link, {
    href: "#"
  }, "Investor Relations"), dom(Footer.Link, {
    href: "#"
  }, "Ways to Watch"), dom(Footer.Link, {
    href: "#"
  }, "Corporate Information"), dom(Footer.Link, {
    href: "#"
  }, "Danflix Originals")), dom(Footer.Column, null, dom(Footer.Link, {
    href: "#"
  }, "Help Center"), dom(Footer.Link, {
    href: "#"
  }, "Jobs"), dom(Footer.Link, {
    href: "#"
  }, "Terms of Use"), dom(Footer.Link, {
    href: "#"
  }, "Contact Us")), dom(Footer.Column, null, dom(Footer.Link, {
    href: "#"
  }, "Account"), dom(Footer.Link, {
    href: "#"
  }, "Redeem Gift Cards"), dom(Footer.Link, {
    href: "#"
  }, "Privacy"), dom(Footer.Link, {
    href: "#"
  }, "Speed Test")), dom(Footer.Column, null, dom(Footer.Link, {
    href: "#"
  }, "Media Centre"), dom(Footer.Link, {
    href: "#"
  }, "Buy Gift Cards"), dom(Footer.Link, {
    href: "#"
  }, "Cookie Preferences"), dom(Footer.Link, {
    href: "#"
  }, "Legal Notices"))), dom(Footer.Break, null), dom(Footer.Text, null, "Danflix United Kingdom"));
}