import { inngest } from "../client";
import { fetchArticles } from "@/lib/news";

export default inngest.createFunction(
  { id: "newsletter/scheduled" },
  { event: "newsletter.schedule" },
  async ({ step }) => {
    const categories = [
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ];


    const allArticles = await step.run("fetch-news", async () => {
      return fetchArticles(categories);
    });
    const MAX_TOTAL = 20;
    const limitedArticles = allArticles.slice(0, MAX_TOTAL);
    const articleText = limitedArticles
      .map(
        (a: any, i: number) =>
          `Article ${i + 1}: ${a.title}\n${a.description}\nSource: ${a.url}`
      )
      .join("\n\n");

    const summary = await step.ai.infer("summarize-news", {
      model: step.ai.models.openai({ model: "gpt-3.5-turbo" }),
      body: {
        messages: [
          {
            role: "system",
            content: `You are an expert newsletter editor creating a personalized newsletter.
            Write a concise, engaging summary that:
            - Highlights the most important stories.
            - Provides context and insights.
            - Uses a friendly, conversational tone.
            - Is well structured with clear sections.
            - Keeps it short but informative.
            Format the response as a proper newsletter with a subject line and sections.`,
          },
          {
            role: "user",
            content: `Create a newsletter summary for these articles from the past week.
            Categories: ${categories.join(", ")}
            Articles:\n\n${articleText}`,
          },
        ],
      },
    });
    console.log("Generated newsletter:\n", summary.choices[0].message.content);

    return {
      
    };
  }
);
