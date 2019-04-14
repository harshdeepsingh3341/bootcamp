import styled, {keyframes} from 'styled-components';

const _rotate = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`;

const Header = styled.header`
display: flex;
background-color: darkblue;
align-items: center;
color: #fff;
justify-content: space-between;
margin-bottom: 30px;
-webkit-box-shadow: 0 5px 14px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 0 5px 14px -6px rgba(0,0,0,0.75);
box-shadow: 0 5px 14px -6px rgba(0,0,0,0.75);
div{
display: flex;
align-items: center;
flex-basis: 20%;
}

`;

const Image = styled.img`
width: 50%;
//height: 70px;
animation: ${_rotate} infinite 20s linear;
pointer-events: none;
`;

const H1 = styled.h1`
padding-left: 20px;
.link{
text-decoration: none;
color: inherit;
text-transform: capitalize;
`;

const NavList = styled.ul`
flex-basis: 10%;
display: flex;
justify-content: space-between;
list-style: none;
padding-right: 30px;

.link{
text-decoration: none;
color: inherit;
    :hover{
      text-decoration: underline;
    }
}
`;


export {
    Header,
    Image,
    H1,
    NavList
};