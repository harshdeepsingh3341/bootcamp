import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Styled_button} from "../../App.styles";

export const Styled_Link = styled(Link)`
font-weight: bold;
text-decoration: none;
color: white;
background-color: grey;
//flex-basis: 30%;
margin: 11px 0 0 0;
height: 250px;
font-size: 30px;
word-break: break-word;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
display: flex;
justify-content: center;

//align-content: center;
align-items: center;

border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;

export const Styled_TodoGroupContainer = styled.div `
display: flex;
flex-direction: column;
flex-basis: 30%;
margin: 0 0 11px 0;

`;

export const Styled_deleteButton = styled(Styled_button)`
border-top-right-radius: 0;
border-top-left-radius: 0;
justify-content: center;
span{
padding-left: 8px;
}
`;