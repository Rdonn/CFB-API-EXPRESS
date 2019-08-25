import { Timestamp } from "typeorm";

export default class NotParamException extends Error{
    private param: any;
    constructor(m: string, paramName: string, paramValue: string) {
        super(m);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotParamException.prototype);

        // Set message values
        this.param.name = paramName; 
        this.param.value = paramValue; 
        this.param.error.time = Timestamp.toString;
    }

    public errorMessage() {
        return `ERROR [${this.errorMessage}]: TIME [${this.param.error.time}]: PARAMETER NOT ACCEPTABLE [${this.param.name}] for [${this.param.value}]`;
        
    }
}