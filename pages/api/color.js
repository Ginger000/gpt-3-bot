// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey:process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function (req, res){
  const completion = await openai.createCompletion("text-curie-001", {
    prompt:generatePrompt(req.body.input),
    temperature:0.6
  })
  console.log(completion.data.choices)
  res.status(200).json({result:completion.data.choices[0].text})
}

function generatePrompt(input){
  return `Suggest two colors that fit the input mood.
  
  Mood: The CSS code for a color like a blue sky at dusk
  Background-color: #003366, #2F8F9D
  Mood: It's sunny day
  Background-color: #FFEF82, #E8F9FD
  Mood: ${input}
  Background-color:`
}