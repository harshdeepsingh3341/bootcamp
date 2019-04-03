import styled from 'styled-components';

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
    UserNavList,
    Wishlist,
    Profile,
    Bag
}