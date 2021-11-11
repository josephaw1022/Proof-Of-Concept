
import React, { FC, useState, useEffect } from "react";
import { observer } from "mobx-react"
import { store } from "@services/Example";



export const MobExample = observer(({ store }: { store: any }): any => {


    const handleIncrement = () => {
        store.increment()
    }

    const handleDecrement = () => {
        store.decrement()
    }

    return (
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center ">

            <button onClick={handleIncrement} className="border-0 bg-green-300 p-2 text-center text-white text-2xl scale-125" >
                Increment
            </button>

            <button onClick={handleDecrement} className="border-0 bg-red-300 p-2 text-center text-white text-2xl scale-125">
                Decrement
            </button>

            <span className="border-0 bg-blue-300 p-2 text-center text-white text-2xl scale-125">
                Count = {store.count}
            </span>

        </div>
    )
}
) 