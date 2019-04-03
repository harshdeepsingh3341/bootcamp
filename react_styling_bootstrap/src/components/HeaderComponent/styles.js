import styled from 'styled-components'

const Header = styled.header`
display: flex;
width: 100%;
-webkit-box-shadow: 0px 5px 15px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 5px 15px -9px rgba(0,0,0,0.75);
box-shadow: 0px 5px 15px -9px rgba(0,0,0,0.75);
line-height: 60px;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
background-color: #ffffff;
z-index: 1;
`;

const LogoWrapper = styled.div`
background: url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat -290px -61px;
flex-basis: 50px;
height: 36px;
margin-left: 4%;
line-height: 40px;
overflow: hidden;
cursor: pointer;
`;

const H1 = styled.h1`
text-indent: -300px;
`;

export {
    Header,
    LogoWrapper,
    H1
};