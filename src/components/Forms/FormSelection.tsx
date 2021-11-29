
import React from 'react'
import { FormControl, InputLabel, Select, MenuItem,  } from '@mui/material'




export function FormSelection(props: FormSelectionProps) {
    return (
        <FormControl fullWidth>
            <InputLabel>{props.label}</InputLabel>
            <Select {...props.selectionProps} >
                {props.menuItems.map((item, index) => (
                    <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
                )
                )}
            </Select>
        </FormControl>
    )
}

interface FormSelectionProps {
    label: string;
    menuItems: Array<{ label: string, value: string }>;
    selectionProps: any;
}