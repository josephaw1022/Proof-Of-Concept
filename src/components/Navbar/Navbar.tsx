import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { FC, ReactNode, useState } from "react";

interface NavbarProps {
    title?: string | ReactNode;
    icon?: any
    suffix?:string | ReactNode ; 

}

export const Navbar: FC<NavbarProps> = ({ title, icon ,suffix}) => {

    return (

        <AppBar position="sticky">

            <Toolbar>
                {icon}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginLeft:"2"}}>
                    <span className="select-none m-0 p-0" > {title} </span>
                </Typography>

                {suffix}

            </Toolbar>
        </AppBar >
    )
}