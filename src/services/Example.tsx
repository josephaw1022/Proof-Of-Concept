import { makeAutoObservable } from "mobx";


class ExampleOne {


    count: number;
    hasViewedCountPage: boolean;

    constructor() {
        makeAutoObservable(this)
        this.count = 0;
        this.hasViewedCountPage = false;
    }


    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    reset() {
        this.count = 0
    }

    setHasViewedCountPage() {
        this.hasViewedCountPage = true
    }




}

export const example_one = new ExampleOne()

