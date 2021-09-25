import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png'
export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="Neflix" src= {require(.../lib/images/logo.png)}/>
               <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> 
            </Header.Frame>
            {children}
        </Header>
    );
    // return children
}