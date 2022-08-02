import React from 'react';
import styled from 'styled-components';

export default function Appbar(props) {
    const AppbarElement = styled('div')((props) => ({
        width: '100%',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        outline: 'none',
        padding: '40px',
        paddingBottom: '20px',
        marginBottom: '20px',
        backgroundColor: props.bgColor
    }));

    const Title = styled('p')(() => ({
        fontWeight: 'bold',
        fontSize: '1.3rem',
        padding: 0,
        margin: 0,
        fontFamily: 'Noto Sans KR,serif'
    }));



    return (
        <AppbarElement bgColor={props.bgColor}>
            <Title>{props.titleString}</Title>
        </AppbarElement>
    )
}