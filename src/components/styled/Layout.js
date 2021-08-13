import styled, { css } from 'styled-components'
import { width, space } from 'styled-system'

export const Container = styled.div `
    
`;

export const ContainerItem = styled.div `
    display: flex;
    ${width}
    ${space}
    margin: 0 auto;
    ${props => props.full && css`
        height: 100vh;
    `}
    ${props => props.center && css`
    align-items: center;
    justify-content: center;
    `}
    ${props => props.row && css`
    flex-direction: row;
    `}
    ${props => props.column && css`
    flex-direction: column;
    `}  
`;