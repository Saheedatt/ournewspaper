const API_KEY = "099148be22804e849a0c6fe022b7cf5e";
const newsEndpoint = "https://newsapi.org/v2/top-headlines";

export const fetchNewsByCategory = async (category, page) => {
  const language = "en";
  const numOfNews = 8;
  try {
    const response = await fetch(`${newsEndpoint}?category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${numOfNews}&language=${language}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
