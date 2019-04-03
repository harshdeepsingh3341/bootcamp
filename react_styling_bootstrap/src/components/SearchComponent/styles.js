import styled from 'styled-components';

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

export {
    SearchContainer
}