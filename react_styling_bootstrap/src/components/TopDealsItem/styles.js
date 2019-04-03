import styled from 'styled-components';

const TopDealsCard = styled.div`
flex-basis: 250px;
height: 175px;
//background: #eb01a5;
background-image: ${(props) => (`linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(246,39,12,0) 100%), url(${props.image})`)};
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-content: space-around;
color: #ececec;
padding: 0 15px;
cursor: pointer;

`;
const Heading = styled.h4`
font-size: 17px;
text-transform: uppercase;
font-weight: bold;
display: flex;
flex-direction: column;
//margin: 0;
padding-bottom: 5px;
border-bottom: 1.5px solid whitesmoke;
border-radius: 2px;
`;

const Message = styled.p`
font-size: 20px;
text-transform: uppercase;
font-weight: bold;
flex-basis: 85%;
padding: 0;
margin: 0;

`;
const Footer = styled.h6`
font-size: 9px;
letter-spacing: 2px;
text-transform: uppercase;
font-weight: lighter;
`;

export {
    TopDealsCard,
    Footer,
    Heading,
    Message
}