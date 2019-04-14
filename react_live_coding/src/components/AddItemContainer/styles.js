import styled from "styled-components";

export const Styled_AddItemContainer = styled.div`
flex-basis: 100%;
background-color: lightgrey;
display: flex;
padding: 10px;
align-items: center;
justify-content: space-between;
border-radius: 4px;
margin-bottom: 17px;
`;

export const Styled_AddButton = styled.button`
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

export const Styled_AddItemInput = styled.textarea`
resize: vertical;
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