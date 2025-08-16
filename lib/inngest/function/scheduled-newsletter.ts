import {inngest} from "../client";
import { fetchArticles } from "@/lib/news";

export default inngest.createFunction({id :"newsletter/scheduled" },{event:"newsletter.scheduled"},async({event,step,runId})=>{
    
    const categories=["business","entertainment","health","science","sports","technology"];
    
    const allArticles=await step.run("fetch-news",async()=>{
        return fetchArticles(categories)
    })

    const summary=await step.ai.infer("summarize-news",{
        model:step.ai.models.openai({model:"gpt-3.5-turbo"}),
        body:{
            messages:[
                {
                    role:"system",
                    content:`You are an expert newsletter editor creating a personalized newsletter for a user.
                    Write a concise ,engaging summary that:
                    - Highlight the most important stories.
                    - Provides context and highlight.
                    - Uses a friendly and conversational tone.
                    - Is well structured with clear sections.
                    - Keeps the reader informed without being too long.
                    -format the response as a proper newsletter with a title and organized sections.
                    Make it email friendly with clear sections and engaging subject line.
                    `
                },
                {
                    role:"user",
                    content:`Create a newsletter summary for these articles from the past week.
                    Categories requested : ${categories.join(",")}
                    Articles: 
                    ${allArticles.map((article:any,idx:number)=>`Article ${idx+1}: ${article.title}\n ${article.description}\n Source:${article.url}\n\n`).join("")}
                    `
                }
            ]
        }
    })

    console.log(summary.choices[0].message.content)

    return {
        articles: allArticles,
        newsletter: summary
    };
})
