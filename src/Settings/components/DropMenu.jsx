import React from 'react';
import styled from 'styled-components';

export default function DropMenu(props) {
    const DropMenuElement = styled('select')((props) => ({
        border: '1px solid',
        borderRadius: '10px',
        borderColor: 'lightgray',
        fontSize: '1rem',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '8px',
        paddingBottom: '8px',
        outline: 'none',
        '&:focus': {
            borderColor: props.activeBorderColor || '#3563DE',
        },
    }));

    return (
        <DropMenuElement activeBorderColor={props.activeBorderColor} value={props.value} onChange={props.onChange}>
            {props.keyValueArray.map((obj, idx) => (
                <option value={obj[0]}>{obj[1]}</option>
            ))}
        </DropMenuElement>
    )
}