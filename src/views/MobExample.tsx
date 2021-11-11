
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";


export const MobExample = observer(({ store }: { store: any }): any => {


    const handleIncrement = () => {
        store.increment()
    }

    const handleDecrement = () => {
        store.decrement()
    }

    return (
        <> 
        <Header store={store} /> 
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center ">

            <button onClick={handleIncrement} className="border-0 bg-green-300 p-2 text-center text-white text-2xl scale-125  w-6/12" >
                Increment
            </button>

            <button onClick={handleDecrement} className="border-0 bg-red-300 p-2 text-center text-white text-2xl scale-125 w-6/12">
                Decrement
            </button>

            <span className="border-0 bg-blue-300 p-2 text-center text-white text-2xl scale-125 w-6/12 ">
                Count = {store.count}
            </span>

        </div>
        </> 
    )
}
)



const Header = observer(({ store }: { store: any }): any => {

    return (
        <header className="bg-red-400 text-white p-3 m-0 fixed w-full ">
                <Link className="mx-4 bg-blue-400 p-2 text-white text-sm rounded-lg " to="/"> Go Back </Link>
            This is the header! The value of count is updating in the header as well: Count =  <span className="text-green-400 font-bold text-2xl"> {store.count} </span> 
            
        </header>
    )
})