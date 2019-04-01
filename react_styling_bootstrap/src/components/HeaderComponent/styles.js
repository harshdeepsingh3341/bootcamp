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
`;

const H1 = styled.h1`
text-indent: -300px;
`

const NavList = styled.div`
flex-basis: 30%;
display: flex;
justify-content: space-between;
text-transform: capitalize;
font-weight: bold;
cursor: pointer;
line-height: 70px;
`;

const SearchContainer = styled.div`
flex-basis: 23%;
display: flex;

input {
    background-color: #f3f3f3;
    width: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    
    border: none;
    outline: none;
    line-height: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 7px;
}
.search-image{
  background: #f3f3f3 url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat -754px 4px;
  background-size: 1404px 105px;
  width: 28px;
  height: 30px;
  display: inline-block;
  border: none;
  outline: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

}
`

const UserNavList = styled.div`
display: flex;
flex-basis: 17%;
justify-content: space-around;
line-height: 20px;
font-weight: bold;
font-size: 14px;
.image{
flex-basis: 33px;
height: 32px;
-webkit-transform: scale(0.6);-moz-transform: scale(0.6);-ms-transform: scale(0.6);-o-transform: scale(0.6);transform: scale(0.6);
}

`;

const Profile = styled(UserNavList)`
display: flex;
flex-wrap: wrap;

.image{
background: url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat -603px -117px;

}
`;

const Wishlist = styled(UserNavList)`
display: flex;
flex-wrap: wrap;
.image{
background: url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat -650px -117px ;
}
`;

const Bag = styled(UserNavList)`
display: flex;
flex-wrap: wrap;
.image{
background: url(https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png) no-repeat -688px -117px ;
}
`;

export {
    Header,
    LogoWrapper,
    NavList,
    H1,
    SearchContainer,
    UserNavList,
    Profile,
    Wishlist,
    Bag
};