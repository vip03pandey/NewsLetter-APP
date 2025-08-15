import { Inngest } from "inngest";
export const inngest = new Inngest({
    id:"newsletter",
    apiKey:process.env.INNGEST_API_KEY!,
})