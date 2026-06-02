import { tool } from "langchain";

const getWeather = tool(
  (input) => `It's always sunny in ${input}!`,
  {
    name: "getWeather",
    description: "Get the weather for a given city",
  }
);

export default getWeather;