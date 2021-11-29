import React, { useEffect, useState, Component, ReactNode } from 'react'
import { observer } from 'mobx-react'
import { Loading } from '@components/Loading';
import { Navbar } from '@app/components/Navbar/Navbar';
import { IconButton } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import { StoreType } from '@routes/routes';



export const ApiExample = observer((props: StoreType) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await props.apiState.getData((err, resp) => {
                if (resp) {
                    setList(resp.data);
                }
                if (err) {
                    setError(true);
                    console.error(err);
                }
                setLoading(false);
            });
        }

        getData();
    }, []);


    return (
        <>
            <Navbar
                title="API Example"
                icon={
                    <Link to="/" className="mr-2">
                        <IconButton size="medium"
                            className="m-0 mr-2 p-0">
                            <ArrowBackIcon className="text-white" />
                        </IconButton>
                    </Link>
                }
            />
            <div className="min-h-screen flex flex-col justify-center items-center gap-4">
                {
                    error ? <h1>Error </h1>
                        :
                        loading ? <Loading /> : (
                            list.map(
                                ({ title }, iter) =>
                                    <div className="bg-green-400 text-white text-2xl p-2 w-72 text-center rounded-lg " key={iter}>
                                        {title}
                                    </div>
                            )
                        )
                }
            </div>
        </>
    )

})




