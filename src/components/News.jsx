import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../components/Subscribe.jsx";
import Footer from "../components/Footer.jsx";
import { newsEndpoint, API_KEY } from "./newsapi";

function News() {
  // const API_KEY = "099148be22804e849a0c6fe022b7cf5e";
  // const newsEndpoint = "https://newsapi.org/v2/top-headlines";
  const numOfNews = 10;

  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      fetchHeadlines();
    } else {
      fetchNews(searchQuery);
    }
  }, [searchQuery, page]);

  const fetchNews = async (query) => {
    setIsLoading(true);
    const url = `${newsEndpoint}?q=${query}&apiKey=${API_KEY}&page=${page}&pageSize=${numOfNews}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
      setArticles([]);
    }
    setIsLoading(false);
  };

  const fetchHeadlines = async () => {
    setIsLoading(true);
    const url = `${newsEndpoint}?country=us&apiKey=${API_KEY}&page=${page}&pageSize=${numOfNews}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
      setArticles([]);
    }
    setIsLoading(false);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  return (
    <>
    <section className="mb-10 px-10">
      <h2 className="text-center uppercase mb-6 text-2xl">Trending News</h2>
      <input
        type="text"
        placeholder="Search for news"
        className="block my-0 mx-auto p-2 border border-gray-300 rounded-lg w-1/2 mb-10"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <ul className="">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          articles.map((article, index) => (
            <li
              key={index}
              className="shadow-md p-10 mb-5 rounded-lg border border-gray-300 hover:shadow-xl transition-transform duration-200 cursor-pointer"
            >
              <Link
                to={`/news/${article.source.id}`} 
                className="block text-gray-700 hover:text-gray-900 text-lg font-semibold"
              >
                {article.title}
              </Link>
              <p className="text-gray-600">{article.description}</p>
            </li>
          ))
        )}
      </ul>
      <div className="flex justify-center mt-5">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="mr-2 px-4 py-2 bg-black text-white rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Next
        </button>
      </div>
    </section>
     <Subscribe />
     <Footer/>
    </>
  );
}
export default News;