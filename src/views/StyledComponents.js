import styled from 'styled-components';

export const LargeHeader = styled.h1`
  text-family: Arial;
  text-style: Bold;
`;

LargeHeader.displayName = 'LargeHeader';

export const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 2px;
  size: 20px;
  border-radius: 3px;
`;

export const Section = styled.section`
  margin: 0px;
`;

export const Image = styled.img`
  box-shadow: 1px 1px 2px grey;
  border-radius: 5px;
  border: 1px silver solid;
  background-color: rgb(233, 233, 233);
  height: 80px;
  width: 80px;
`;
