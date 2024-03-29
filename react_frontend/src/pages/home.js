import React from 'react';
import ReactDOM from 'react-dom'
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { HeaderContainer } from '../containers/header';


export default function Home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Unlimited films, TV shows and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </>
    );
  }

// ReactDOM.render(<Home />, document.getElementById('app'));