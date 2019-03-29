import styled, { css } from 'styled-components';

const Span = styled.span`
    cursor: pointer;
    ${props =>
        props.topBarLeft ? css`
    margin-right: 25%;
    font-weight: bold;
    `
            :
            props.topBarCenter ? css`
    margin-right: 5%;
    &:last-child{
        margin-right: 0;
    }
    &:hover{
        text-decoration: underline;
    }
        `
                :
                props.date ? css`
    text-align: left;
    flex: 1;
    margin-left: -1125px;
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: initial;
            `
                    :
                    props.temp && css`
    margin-right: -1225px;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: initial;
                `
    }
`

const H1 = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
`

export {
    Span,
    H1
}