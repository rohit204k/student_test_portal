import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-size:22px
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input
`
  width: 100%;
  padding: 0.25rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  border-style: solid;
  border-color: #3f4eae;
  color: #3f4eae;
`;

const Div = styled.div
`
  border: 10px hidden;
  padding: 20px;
  margin: 50px 100px 100px 100px;
  font-size: 26px;
`;
  
const Label = styled.label
`
  width: 100%;
  padding: 0.25rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  border-style: solid;
  border-color: #3f4eae;
  color: #3f4eae;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  margin: 0.3rem;
  padding: 10px 0.5px;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Button1 = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  margin: 5px 100px 5px 500px;
  padding: 10px 0.5px;
  color: white;
  font-weight: 700;
  width: 10%;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;


const Logo = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Label,Form,Div, Input, Button, Button1, Logo, Card, Error };