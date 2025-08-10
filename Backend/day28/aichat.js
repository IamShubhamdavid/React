const { GoogleGenAI }= require('@google/genai');

const ai = new GoogleGenAI({apiKey: "AIzaSyDsUwo7LXRE412YWVbh0jx42OeuvlTg8B0"});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:msg,
  });
  return response.text;
}

module.exports =main;