import styled from 'styled-components'

const styledButton = styled.button
import React, { Children } from 'react'


const StyledButton = styled.button`
  width: 335px;
  height: 56px;
  gap: 8px; 
  border-radius: 8px; 
  padding: 8px 24px; 
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

type ButtonProps = {
  Children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button"

}

const Button = ({ Children, ... props }: ButtonProps) => {
  return <StyledButton {...props}>{Children}</StyledButton>
}

export default Button;