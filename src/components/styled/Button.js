import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: none;
  color: #fcfcfc;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  height: 45px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  ${props => props.primary && css`
    background: #0062FF;
    border: 2px solid #0062FF;
  `}
  
  ${props => props.secondary && css`
    background: #7000FF;
    border: 2px solid #7000FF;
  `}
`;