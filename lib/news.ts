export async function fetchArticles(categories: string[]): 
    Promise<Array<{title: string, url: string, description: string}>> {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    
    try {
        const promises = categories.map(async (category) => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}&from=${since}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch articles for category: ${category}`);
            }
            
            const data = await response.json();
            return data.articles || [];
        });
        
        const results = await Promise.all(promises);
        const articles = results.flat().map(article => ({
            title: article.title || '',
            url: article.url || '',
            description: article.description || ''
        }));
        
        return articles;
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}