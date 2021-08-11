import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: none;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  height: 45px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;

  ${props => props.primary && css`
    background: #0062FF;
    border: 2px solid #0062FF;
  `}
  
  ${props => props.secondary && css`
    background: #7000FF;
    border: 2px solid #7000FF;
  `}
`;