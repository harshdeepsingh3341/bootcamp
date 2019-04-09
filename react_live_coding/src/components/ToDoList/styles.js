import styled from 'styled-components';

const Styled_ListContainer = styled.div`
width: 95%;
margin: auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Styled_ToDoItem = styled.div`
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
order: ${({isChecked}) => isChecked ? 1 : 0} 
`;

const Styled_AddItemContainer = styled.div`
flex-basis: 95%;
background-color: lightgrey;
display: flex;
padding: 10px;
align-items: center;
justify-content: space-between;
border-radius: 4px;
margin-bottom: 17px;
`;

const Styled_ToDoItemInput = styled.textarea`
flex-basis: 85%;
background-color: #eeeeee;
line-height: 18px;
padding: 10px 20px;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
border: thin solid #ccc;
border-radius: 4px;
outline: none;
`;

const Styled_AddButton = styled.button`
color: #ffffff;
background-color: firebrick;
line-height: 33px;
flex-basis: 10%;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 16px;
border: 3px solid #9c2222;
border-radius: 5px;
outline: none;
cursor: pointer;
`;

const Styled_ToDoData = styled.p`
margin: 0;
line-height: 24px;
white-space: pre-wrap;
word-break: break-all;
flex-basis: 85%;
text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')} ;
`;

const Styled_ButtonsWrapper = styled.div`
flex-basis: 10%;
visibility: ${props => props.isChecked ? 'hidden' : 'auto'}; 
display: flex;
flex-wrap: wrap;
`;

const Styled_EditSaveButton = styled(Styled_AddButton)`
flex-basis: 100%;
margin: 6px 0;
`;

const Styled_DeleteButton = styled(Styled_EditSaveButton)`
flex-basis: 100%;
margin: 6px 0;
`;

export {
    Styled_ListContainer,
    Styled_ToDoItem,
    Styled_AddItemContainer,
    Styled_ToDoItemInput,
    Styled_AddButton,
    Styled_ToDoData,
    Styled_EditSaveButton,
    Styled_DeleteButton,
    Styled_ButtonsWrapper
};