import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-wrap: wrap;
width: 30%;
margin: auto;
justify-content: center;

input{
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  outline: none;
  border: thin solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input[type='submit']{
width: 30%;
cursor: pointer;
}

`;

const Error = styled.div`
background-color: rgba(255, 0, 0, 0.3);
border: thin solid maroon;
width: 30%;
margin: 20px auto;
line-height: 50px;
padding: 0 20px;
border-radius: 3px;
display: ${props => props.error ? 'block' : 'none'}
`

export {
    Form,
    Error
};