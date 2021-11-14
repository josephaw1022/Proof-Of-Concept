import { Loading } from "@components/Loading";
import { StoreType } from "@routes/routes";
import { observer } from 'mobx-react';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";


export const Home = observer((props: StoreType) => {


    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)



    // Fake Loading 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)

    }, [])

    // Navbar title handling 
    const [navbarTitle, setNavbarTitle] = useState<string>(``)
    useEffect(() => {
        setNavbarTitle(
            props.example_one.hasViewedCountPage ?
                `count from the simple mobx example page = ${props.example_one.count}. Yes it works in between routes!! `
                : `look at the mobx & form example`
        );
    }, [props.example_one])



    return loading ? <Loading /> : (
        <>
            <Navbar title={navbarTitle} />
            <div className="flex flex-col justify-center items-center gap-4  min-h-screen">
                <h1 className="text-lg md:text-3xl  m-3 p-3 max max-w-3xl text-center">
                    Welcome to the Tailwind, Mobx, React Router v6, and Typescript proof of concept
                </h1>
                <div className="flex flex-row flex-wrap gap-3 m-3 items-center justify-evenly ">
                    <Link to="/example" className="bg-blue-400 rounded-lg p-2 m-3">
                        Form Example
                    </Link>
                    <Link to="/mobx" className="bg-red-400 rounded-lg p-2 m-3">
                        Mobx Example
                    </Link>
                </div>
            </div>
        </>
    )

}
) 