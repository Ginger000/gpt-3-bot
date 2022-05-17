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

function generatePrompt(func){
  return `${func}
  `
}