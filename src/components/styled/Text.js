import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const Header = styled.h1 `
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    color: #171725;
    ${space}
    text-align: center;
`;

export const TextError = styled.p `
    color: #FF4545;
`;

export const TextPurple = styled.p `
    color: #7000FF;
    text-align: center;
`;