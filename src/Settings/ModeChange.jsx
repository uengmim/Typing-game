import React from 'react';
import MenuTitle from "./components/MenuTitle";
import DropMenu from "./components/DropMenu";

export default function ModeChange(props) {
    return (
        <>
            <MenuTitle titleString={props.MenuTitleString} />
            <DropMenu keyValueArray={props.DropMenuArray} activeBorderColor={props.DropMenuActiveBorderColor} value={props.value} onChange={props.onChange} />
        </>
    )
}