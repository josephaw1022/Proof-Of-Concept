import React , {FC, useEffect, useState} from "react";
import {Navbar} from "@components/Navbar"

export const FormExample:FC<any> = () => {

    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(false)

    return(
        <Navbar title="hello world"/> 
    )
}