import styled from "styled-components";
import {Styled_button, Styled_textArea} from "../../App.styles";

export const Styled_ButtonsWrapper = styled.div`
flex-basis: 10%;
visibility: ${props => props.isChecked ? 'hidden' : 'auto'}; 
display: flex;
flex-wrap: wrap;
`;

export const Styled_EditSaveButton = styled(Styled_button)`
flex-basis: 100%;
margin: 6px 0;
`;

export const Styled_DeleteButton = styled(Styled_EditSaveButton)`

`;
export const Styled_ToDoData = styled.p`
margin: 0;
line-height: 24px;
white-space: pre-wrap;
word-break: break-all;
flex-basis: 85%;
text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')} ;
`;

export const Styled_ToDoItem = styled.div`
flex-basis: 90%;
background-color: lightskyblue;
border: thin solid #74bbe6;
border-radius: 4px;
display: ${props => ((props.length > 0) ? 'flex' : 'none')} ;
padding: 10px 7px;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
-webkit-box-shadow: 0px 0px 0.5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 0.5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 0.5px 0px rgba(0,0,0,0.75);
margin-bottom: 14px;
align-items: center;
justify-content: space-between;
order: ${({isChecked}) => isChecked ? 1 : 0} ;
text-align: left;
`;

export const Styled_ToDoItemInput = styled(Styled_textArea)`

`;