import styled from 'styled-components'
import {Styled_Header} from "../About/styles";

export const Styled_AddUserContainer = styled.div`
margin: 10px;
padding: 10px;
`;

export const Styled_AddUserHeader = styled(Styled_Header)`
text-align: center;
border-bottom: thin solid #b9b9b9;
`;

export const Styled_Form = styled.form`
width: 55%;
margin: 15px auto;
padding: 0;
line-height: 50px;
`;

export const Styled_NameGroup = styled.div`
display: flex;
justify-content: space-between;
`;

export const Styled_Input = styled.input`
padding: 0 8px;
margin: 9px 0;
width: 100%;
outline: none;
border: thin solid #ccc;
color: #848484;
border-radius: 4px;
line-height: 40px;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
transition: 0.2s;
:focus{
border: thin solid #61DAFB;
}
:hover{
border: thin solid #aeaeae;
}
`;

export const Styled_NameInput = styled(Styled_Input)`
flex-basis: 48%;
`;

export const Styled_InputSubmit = styled(Styled_Input)`
width: 30%;
margin: auto;
background-color: #61DAFB;
color: #000;
cursor: pointer;
font-size: 17px;
`;

export const Styled_SuccessContainer = styled.div`
line-height: 40px;
p{
font-size: 20px;
}
`;

export const Styled_UserContainer = styled.div`
width: fit-content;
margin: 20px auto;
display: flex;
justify-content: space-between;
font-size: 18px;
flex-wrap: wrap;
`;

export const Styled_UserKey = styled.span`
text-transform: capitalize;
font-weight: bold;
flex-basis: 26%;
text-align: left;
`;

export const Styled_UserValue =styled.span`
flex-basis: 74%;
text-align: right;
`;