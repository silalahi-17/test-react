import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    border: 2px solid black;
    background-color: whitesmoke;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: dodgerblue;
    color: dodgerblue;
    border-radius: 2px;

    &:hover {
        background: dodgerblue;
        color: whitesmoke;
    }
`;


export default class Styled extends React.Component {
    render() {
        return (
            <Button>Go Eduwork</Button>
        )
    }
}