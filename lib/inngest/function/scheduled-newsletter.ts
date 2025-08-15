import {inngest} from "../client";

export default inngest.createFunction({id :"newsletter/scheduled" },{event:"newsletter.scheduled"},async({event,step,runId})=>{
    
    const allArticles=await step.run("fetch-news",async()=>{
        const categories=["business","entertainment","health","science","sports","technology"]
        return fetchAllArticles(categories)
    })
})
