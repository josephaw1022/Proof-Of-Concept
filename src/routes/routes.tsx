import React, { ReactNode } from 'react'

// Components for routes 
import { Home } from "@views/Home"
import { FormExample } from "@views/FormExample"

/**
 * The general shape of a route object in our application 
 */
interface ROUTES {
    element: ReactNode;
    path: string;
    exact: boolean;
    children?: ROUTES[];
}


/**
 * The Routes of the apps are defined here 
 */
export const routes: ROUTES[] = [

    {
        element: <Home />,
        path: "",
        exact: true
    },
    {
        element: <FormExample />,
        path: "/example",
        exact: true
    }

]