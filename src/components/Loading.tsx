import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

/**
 * The actual loading spinner that is used when fetching data 
 */
export const Loading = () =>
    <div className="min-h-screen flex justify-center items-center p-2 ">
        <div className='scale-150'>
            <CircularProgress />
        </div>
    </div>
