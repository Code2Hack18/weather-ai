import express from 'express';
import config from './config.js';
import weatherAgent from './agents/weather-agent.js';
import { formatAgentResponse } from './utils.js';

const app = express()

app.get('/', (req, res)=>{
        res.send({
            message: "Hello there..!"
        }, {status: 200})
});

app.get('/weather', async (req, res) => {
  try {
    console.log(`Received request for weather in ${req.query.city}`);
    const city = req.query.city;

    const response = await weatherAgent.invoke({
      messages: [
        {
          role: "user",
          content: `What's the weather like in ${city}?`,
        },
      ],
    });
   
    const formattedResponse = formatAgentResponse(response, "getWeather");
    res.status(200).json({
        status: "success",
        statusCode: 200,
        response: formattedResponse,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "failed",
      statusCode: 500,
      message: "Something went wrong",
    });
  }
});


app.listen(config.PORT, ()=>{
    console.log(`Sever is running on ${config.PORT}...`);
})