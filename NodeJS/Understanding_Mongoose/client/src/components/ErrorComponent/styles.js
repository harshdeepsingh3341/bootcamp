import styled from 'styled-components'
import {Styled_Container} from "../../App.styles";

export const Styled_ErrorContainer = styled(Styled_Container)`
text-align: center;
background-color: rgba(255, 0, 0, 0.4);
border: thin solid maroon;
border-radius: 6px;
display: initial;
`;

export const Styled_ErrorMessage = styled.h2`
`;

export const Styled_ErrorStack = styled.p`
display: block;
white-space: pre;
`;