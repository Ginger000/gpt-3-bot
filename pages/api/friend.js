// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey:process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export default async function (req, res){
  const completion = await openai.createCompletion("text-curie-001", {
    prompt:generatePrompt(req.body.myword),
    temperature:0.5,
    max_tokens:60,
    top_p:1.0,
    frequency_penalty:0.5,
    presence_penalty:0.0,
    stop:["You:"]
  })
  console.log(completion.data.choices)
  res.status(200).json({gptword:completion.data.choices[0].text})
}

function generatePrompt(myword){
  return `Suggest two colors that fit the input mood.
  
  You: What have you been up to?
  Friend: Watching old movies.
  You: ${myword}
  Friend:`
}