import React from 'react';
import styled from 'styled-components';

export default function MenuTitle(props) {
    const MenuTitleElement = styled('p')(() => ({
        fontSize: '0.8rem',
        padding: 0,
        margin: 0,
        color: 'rgba(72, 72, 72, 0.7)',
        fontFamily: 'Noto Sans KR, serif',
        flex: 1,
        marginBottom: '5px'
    }));

    return (
        <MenuTitleElement>
            {props.titleString}
        </MenuTitleElement>
    )
}