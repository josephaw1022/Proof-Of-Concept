import { Loading } from "@components/Loading";
import React, { useState, useEffect , FC} from "react";
import { Route, Link} from "react-router-dom";


export const Home:FC<any> = props => {


    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)


    // Fake Loading 
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    

    return loading ? <Loading /> : (
        <div className="flex flex-col justify-center items-center gap-4  min-h-screen">
            <h1 className="text-lg md:text-3xl  m-3 p-3 max max-w-3xl">
                Welcome to the Tailwind, Mobx, React Router v6, and Typescript proof of concept
            </h1>
            <div className="flex flex-row gap-3 m-3 items-center justify-evenly ">
                <Link to="/example"  className="bg-blue-400 rounded-lg p-2 m-3">
                    Form Example 
                </Link>
                <Link to="/mobx"  className="bg-red-400 rounded-lg p-2 m-3">
                    Mobx Example 
                </Link>
            </div>
        </div>
    )

}
