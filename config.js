import { required } from "./utils.js";


const config = Object.freeze({
    PORT: required("PORT"),
    API_KEY: required("API_KEY"),
}); 


export default config;
