import { Code } from "typeorm";

interface queryError{
    errno: number,
    code: string,
    name: string
}

export class QueryErrorFormatter{
    public static formatErrorMessage(message): queryError{
        return {
            errno : <number> message.errno, 
            code : <string> message.code,
            name : <string> message.name
        } as queryError
    }
}