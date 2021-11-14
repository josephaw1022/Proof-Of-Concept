
import React, { ReactElement } from "react"
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { StoreType } from "@routes/routes"

export const Header = observer((props: StoreType): ReactElement => {

    return (
        <header className="bg-red-400 text-white p-3 m-0 fixed w-full  ">
            <Link className="mx-4 bg-blue-400 p-2 text-white text-sm rounded-lg " to="/"> Go Back </Link>
            This is the header! The value of count is updating in the header as well: Count =  <span className="text-green-400 font-bold text-2xl"> {props.example_one.count} </span>

        </header>
    )
})