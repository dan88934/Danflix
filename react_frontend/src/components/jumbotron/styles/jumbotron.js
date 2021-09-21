import styled from 'styled-components/macro'; // Gives us component names

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

 //Styled allows us to pass in semantic elements such as h1, p, h2
export const Inner = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction}; 
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
// Pass a prop to change direction

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
    `;

export const Title = styled.h1`
    font-size: 50px;
    line-hight: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-hight: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;


export const Image = styled.img`
    max-width: 100%;
    height: auto;

`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
        margin-bottom: 50px;
      }
    }

`;