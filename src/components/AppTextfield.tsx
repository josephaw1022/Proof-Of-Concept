import React from 'react'
import { TextField } from '@mui/material';
import { useField } from 'formik';


interface TextFieldProps {
    label: string;
    multiline?: boolean;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    name: string;
    value: any;
    onChange: any;
    helperText: any
}


export const AppTextField = (props: TextFieldProps) => {

    

    return (

        <TextField
            {...props}
        />
        
    )
}
