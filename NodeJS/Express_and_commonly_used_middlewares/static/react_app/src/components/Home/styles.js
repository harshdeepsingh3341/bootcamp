import styled from 'styled-components'

export const Styled_StudentsContainer = styled.div`
width: 100%;
margin: 10px 0;
line-height: 40px;
`;

export const Styled_StudentsTable = styled.table`
width: 60% ;
margin: auto;
text-align: center;
border-collapse: collapse;
thead{
background-color: #61DAFB;
}
tr{
:nth-child(even){
background-color: rgba(97, 218, 251, 0.1);
}
}
`;

export const Styled_Error = styled.div`
width: 60%;
margin: auto;
background-color: rgba(255, 0, 0, 0.3);
border: 1px solid red;
border-radius: 10px;
text-transform: capitalize;
padding-left: 10px;
padding-right: 10px;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
white-space: pre-wrap;
`;

export const Styled_Loader = styled.div`
width: 100%;
text-align: center;
font-size: 18px;
`;