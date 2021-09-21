import React from 'react';
import { Accordion } from '../components';
import { Item } from '../components/accordion/styles/accordion';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs';
export function FaqsContainer() {
  return dom(Accordion, null, dom(Accordion.Title, null, "Frequently Asked Questions"), faqsData.map(Item => dom(Accordion.Item, {
    key: Item.id
  }, dom(Accordion.Header, null, Item.header), dom(Accordion.Body, null, Item.body))), dom(OptForm, null, dom(OptForm.Input, {
    placeholder: "Email Address"
  }), dom(OptForm.Button, null, "Try it now"), dom(OptForm.Break, null), dom(OptForm.Text, null, "Ready to watch? Enter your email to create or restart your membership")));
}