console.log("START");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY,});
app.post("/chat",async(req,res)=>{
    try{
        const { message } = req.body;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: message,
        });
        console.log(response);
            res.json({
                reply:response.text,});
            }catch(error){
                console.error(error);
                res.status(500).json({
                    error: "Something went wrong",
                });
            }
    });
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});