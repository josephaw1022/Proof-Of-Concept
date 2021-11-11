import { makeAutoObservable } from "mobx";


class Store{ 


    count: number ; 

    constructor(){
        makeAutoObservable(this)
        this.count= 0 ; 
    }


    increment():void{
        this.count ++ ; 
    }

    decrement():void{ 
        this.count -- ; 
    }

    reset():void{
        this.count = 0 
    }

    

}

export const store = new Store()