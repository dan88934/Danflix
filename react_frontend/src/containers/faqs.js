import React from 'react';
import {Accordion} from '../components'
import { Item } from '../components/accordion/styles/accordion';
import OptForm from '../components/opt-form';
// import faqsData from '../fixtures/faqs';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return ( 
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((Item) => 
                <Accordion.Item key={Item.id}>
                    <Accordion.Header>{Item.header}</Accordion.Header>
                    <Accordion.Body>{Item.body}</Accordion.Body>
                </Accordion.Item>
        
            )}

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}