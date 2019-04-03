import styled from 'styled-components';
import {Footer} from "../TopDealsItem/styles";


export const GridContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-basis: 100%;
`;

export const GridImage = styled.div`
flex-basis: 250px;
min-height: 330px;
display: flex;
align-items: flex-end;
justify-content: center;
background: ${props => `url(${props.image}) no-repeat`};
padding-bottom: 17px;
text-align: center;
cursor: pointer;
`;

export const BrandName = styled.h4`
font-size: 20px;
margin: 18px 0;
color: maroon;
`;

export const Message = styled.p`
text-transform: capitalize;
font-weight: bold;
`;

export const ImageCaption = styled.div`
flex-basis: 90%;
background-color: #fff;
//height: 100px;
padding: 0 10px;
`;
