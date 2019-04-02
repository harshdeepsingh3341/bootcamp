import styled from 'styled-components';

const ListContainer = styled.div`
width: 95%;
margin: auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const ToDoItem = styled.div`
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
`;

const AddItemContainer = styled.div`
flex-basis: 95%;
background-color: lightgrey;
display: flex;
padding: 10px;
align-items: center;
justify-content: space-between;
border-radius: 4px;
margin-bottom: 17px;
`;

const ToDoItemInput = styled.textarea`
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

const AddButton = styled.button`
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

const ToDoData = styled.p`
margin: 0;
line-height: 24px;
white-space: pre-wrap;
word-break: break-all;
flex-basis: 90%;
text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')} ;
`;

const EditSaveButton = styled(AddButton)`
flex-basis: 7%;
visibility: ${props => props.isChecked ? 'hidden' : 'auto'}; 
`;

export {
    ListContainer,
    ToDoItem,
    AddItemContainer,
    ToDoItemInput,
    AddButton,
    ToDoData,
    EditSaveButton
};