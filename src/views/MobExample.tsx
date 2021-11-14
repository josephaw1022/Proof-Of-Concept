/* eslint-disable react-hooks/exhaustive-deps */

import { Header } from "@components/MobXHeader";
import { store, StoreType } from "@routes/routes";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { example_one } from '../../.history/src/services/Example_20211114145835';

export const MobExample = observer(({ example_one, example_two }: StoreType) => {

    const handleIncrement = () => {
        example_one.increment()
    }

    const handleDecrement = () => {
        example_one.decrement()
    }

    const handleReset = () => {
        example_one.reset();
    }

    // declare that you have see this page in the store 
    useEffect(() => {
        example_one.setHasViewedCountPage()
    }, [])


    // setValues for example_two service and reset them when you leave the page
    useEffect(()=> { 
        example_two.setAppName('MobX Example')
        example_two.setUserName('JackWhiteakers')
        example_two.setPassword('P@$$wordio')
        example_two.setAge(34)
        
        return ()=> {   
            example_two.reset()   
        }
    },[])


    return (
        <>
            <Header {...store} />
            <div className="min-h-screen flex flex-col gap-3 items-center justify-center overflow-y-visible ">

                <button onClick={handleIncrement} className="mt-20  border-0 bg-yellow-300 p-2 text-center text-white text-2xl scale-125  w-6/12" >
                    Increment
                </button>

                <button onClick={handleDecrement} className="border-0 bg-green-300 p-2 text-center text-white text-2xl scale-125 w-6/12">
                    Decrement
                </button>
                <button onClick={handleReset} className="border-0 bg-red-300 p-2 text-center text-white text-2xl scale-125 w-6/12">
                    Reset
                </button>

                <span className="border-0 bg-blue-300 p-2 text-center text-white text-2xl scale-125 w-6/12 ">
                    Count = {example_one.count}
                </span>

                <h1 className="text-center my-16 text-3xl ">example_two values </h1>
                <h1 className="text-black "> appname = <span className="text-red-500"> {example_two.app_name}  </span> </h1>
                <h1 className="text-black "> user_name = <span className="text-red-500"> {example_two.user_name}  </span> </h1>
                <h1 className="text-black "> age =  <span className="text-red-500"> {example_two.age}  </span> </h1>

            </div>
        </>
    )
}
)


