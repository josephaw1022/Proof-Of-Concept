import React, { ReactNode } from 'react'

// Components for routes 
import { Home } from "@views/Home"
import { FormExample } from "@views/FormExample"
import { MobExample } from '@views/MobExample'



// State for the page 
import {example_one } from "@services/Example"
import { example_two } from  "@services/ExampleTwo"



// store for our state 
export const store = {
    example_one, 
    example_two 
}

export type StoreType = typeof store ; 


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
        element: <Home {...store} />,
        path: "",
        exact: true
    },
    {
        element: <FormExample {...store}  />,
        path: "/example",
        exact: true
    },
    {
        element: <MobExample {...store} />,
        path: '/mobx',
        exact: true
    }

]