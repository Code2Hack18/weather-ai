import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import getWeather from "../tools/weather.tool.js";
import config from "../config.js";

const model = new ChatOpenAI({
  model: "openai/gpt-oss-120b",
  apiKey: config.API_KEY,
  configuration: {
    baseURL: "https://openrouter.ai/api/v1",
  },
});

const weatherAgent = createAgent({
  model,
  tools: [getWeather],
});

export default weatherAgent;