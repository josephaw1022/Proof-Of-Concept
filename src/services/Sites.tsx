import {makeAutoObservable}  from 'mobx'
import axios from 'axios' ; 




const list_url = process.env.REACT_APP_API_ENDPOINT 

interface Site{
    id:number , 
    description:string , 
    url: string , 
    done: boolean , 
}



class ApiState{

    sites:Site[] ; 
    
    constructor(){
        makeAutoObservable(this) ; 

    }

    getData(callback){
        const getData = async() => { 
            const response = await axios.get("https://all-sites-api-22.herokuapp.com/api/MySites") ; 

            await response ; 
            if(callback && response){
                callback(null, response)
            }
        }
        getData()
    }
}


export const apiState = new ApiState() ; 