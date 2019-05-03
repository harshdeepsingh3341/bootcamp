import styled, {keyframes} from 'styled-components';
import {Styled_Container} from "../../App.styles";

const fade_out = keyframes`
from{
opacity: 0.8;
  display: flex;
}
to{
opacity: 0;
  display: none;
}
`;

export const Styled_SuccessContainer = styled(Styled_Container)`
margin-bottom: 15px;
opacity: 0.8;
animation: ${fade_out} 2s linear;
animation-fill-mode: both;
animation-delay: ${props => `${props.displayTime}s`};
pointer-events: none;
`;

export const Styled_message = styled.p`
font-size: 18px;
font-weight: bold;
margin: 10px;
`;
