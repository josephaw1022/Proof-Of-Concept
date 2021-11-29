import React from 'react'
import { Menu, MenuItem } from '@mui/material';




export function NavMenu(props: NavMenuProps) {
    return (
        <Menu
            open={Boolean(props.anchorEl)}
            anchorEl={props.anchorEl}
            onClose={props.handleClose}
        >
            {props.values.map((item, index) => (
                <MenuItem key={index} {...item.props}>{item.label}</MenuItem>
            ))}
        </Menu>
    )
}


interface NavMenuProps {
    anchorEl: any;
    handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    values: Array<any>;
}
