import styled from 'styled-components'

export const Products = styled.div`
display: flex;
flex-direction: column;
border-bottom: thin solid #ccc;
padding: 20px 0;
min-height: 400px;
max-height: 400px;
overflow-x: hidden;
overflow-y: scroll;
`;

export const Product = styled.div`
width: 97%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px;
`;

export const Details = styled.div`
display: flex;
flex-wrap: wrap;
flex-basis: 40%;
justify-content: space-between;
align-items: center;
`;

export const Cost = styled.div`
font-size: 18px;
color: darkred;
font-weight: bold;
`;

export const Name = styled.span`
font-weight: bold;
font-size: 18px;
line-height: 25px;
flex-basis: 100%;
`;

export const Quantity = styled.span`
display: flex;
justify-content: space-between;
flex-basis: 40%;
`;

export const Button = styled.button`
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
`;

export const QuantityButton = styled(Button)`
pointer-events: ${props => props.disableAddProductQuantity ? 'none' : 'auto'};
opacity: ${props => props.disableAddProductQuantity ? 0.4 : 1} ;
color: #009be2;
`;
export const DeleteButton = styled(Button)`
color: red;
`;