import { configDotenv } from "dotenv";

export function required(name){
    configDotenv();
    const value = process.env[name];
        if(!value){
            throw new Error(`${value} is required..!`);
        }
        return value;
};