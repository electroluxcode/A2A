import { GoogleGenAI } from "@google/genai";
import { ProxyAgent , setGlobalDispatcher } from "undici";

const proxy = "http://127.0.0.1:33210";
const proxyAgent = new ProxyAgent(proxy);
setGlobalDispatcher(proxyAgent);
const ai = new GoogleGenAI({ apiKey: "AIzaSyDKQYB7eoePdCLtJCnhz2564QGdWc_JBA0" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "你好你是谁"
  });
  console.log(response.text);
}

main();