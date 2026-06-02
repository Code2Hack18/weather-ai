import { configDotenv } from "dotenv";

export function required(name){
    configDotenv();
    const value = process.env[name];
        if(!value){
            throw new Error(`${value} is required..!`);
        }
        return value;
};

export function formatAgentResponse(response, toolName) {
  const toolMessage = response?.messages?.find(
    (message) =>
      message.constructor.name === "ToolMessage" &&
      message.name === toolName
  );

  return toolMessage?.content || "No response found";
}