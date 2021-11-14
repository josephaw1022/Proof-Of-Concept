
import { makeAutoObservable } from "mobx";


class ExampleTwo {

    app_name: string;
    user_name: string;
    password: string;
    age: number;


    constructor() {
        makeAutoObservable(this)
        this.app_name = "not set"
        this.user_name = "not set"
        this.password = "not set"
        this.age = 0;
    }

    /**
     * We could use methods and scaffold out our own setters 
     * and getters, or we can use typescript's built in getters and setters  
     */



    setAppName(app_name: string) {
        this.app_name = app_name;
    }

    setUserName(user_name: string) {
        this.user_name = user_name;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setAge(age: number) {
        this.age = age;
    }



    reset() {
        this.app_name = 'resetted'
        this.user_name = 'resetted'
        this.password = 'resetted'
        this.age = 0
    }
}

export const example_two = new ExampleTwo()