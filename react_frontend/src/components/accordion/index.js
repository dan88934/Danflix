import React, {useState, useContext, createContext } from 'react';
import { Container, Title, Item, Inner, Header, Body } from './styles/accordion'

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            <Inner>{ children }</Inner>
        </Container>
    );
}
// State is for keeping track of changes on the page
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title { ...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow}}> 
            <Item { ...restProps}>{children}</Item>;
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) { //Passed into item
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
    <Header onClick={() => setToggleShow(!toggleShow)} { ...restProps}> 
    {/* Above line was initially different in tutorial */}
        {children}
        {/* Below line has a method for printing the state of an item - enable to see true / false on item on page*/}
        {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre>  */}
        {toggleShow ? (
            <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
            <img src="/images/icons/add.png" alt="Open" />
        )}
    </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body { ...restProps }>{children}</Body> : null
    return (
        <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
          <span>{children}</span>
        </Body>
      );
    };