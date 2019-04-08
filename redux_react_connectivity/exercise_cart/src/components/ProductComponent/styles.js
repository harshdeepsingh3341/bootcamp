import styled from 'styled-components';

export const Product = styled.div`
background-color: #f2f2f2;
border-radius: 6px;
flex-basis: 30%;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
margin: 15px 0;
-webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.75);

@media (max-width: 650px){
flex-basis: 100%;
}

`;

export const Image = styled.img`
width: 100%;

`;

export const ImageCaption = styled.div`
width: 87%;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

export const Name = styled.h3`

`;

export const Cost = styled.div`
font-weight: bold;
margin: 10px 0;
`;

export const Stock = styled.div`
font-size: 15px;
font-weight: lighter;
margin: 5px 0;
`;

export const CartButton = styled.button`
background-color: #fff;
border: none;
border-radius: 4px;
width: 100%;
margin-bottom: 14px;
line-height: 30px;
font-size: 16px;
font-weight: bold;
color: #00ae00;
cursor: pointer;
pointer-events: ${props => props.quantity > 0 ? 'all' : 'none'} ;
opacity: ${props => props.quantity > 0 ? 1 : 0.4} ;
outline: none;
transition: 0.3s;

:hover{
background-color: rgba(0, 0, 0, 0.1);
}

:active{ 
outline: thin solid #00ae00;
}

`;

