import React, { ReactNode } from 'react'

// Components for routes 
import { Home } from "@views/Home"
import { FormExample } from "@views/FormExample"
import { MobExample } from '@views/MobExample'
import { ApiExample } from '@views/ApiExample'


// State for the page 
import { example_one } from "@services/Example"
import { example_two } from "@services/ExampleTwo"
import { apiState } from '@services/Sites'


// store for our state 
export const store = {
    example_one,
    example_two,
    apiState
}

export type StoreType = typeof store;


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
        element: <FormExample {...store} />,
        path: "/example",
        exact: true
    },
    {
        element: <MobExample {...store} />,
        path: '/mobx',
        exact: true
    },
    {
        element: <ApiExample {...store} />,
        path: '/api-example',
        exact: true,
    }

]