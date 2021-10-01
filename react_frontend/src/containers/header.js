import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
// import logo from '../logo.png'
import logo from '/public/images/logo.png'

// const logo = require('.../public/images/logo.png')

export function HeaderContainer({ children }) {
    return (

// Define logo here - add it below with {logo}
        <Header>
            <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="Neflix" src={logo}/>
               {/* <Header.Logo to={ROUTES.HOME} alt="Neflix" src={require(.../public/images/logo.png)}/> */}
               <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> 
            </Header.Frame>
            {children}
        </Header>
    );
    // return children
}