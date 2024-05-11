import React, { useState, useEffect } from "react";
import { fetchNewsByCategory } from "./api";
import { Link } from "react-router-dom";

function Technology() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTechnologyNews = async () => {
      try {
        const technologyNews = await fetchNewsByCategory("technology", page);
        setNews(technologyNews);
      } catch (error) {
        console.error("Error fetching technology news:", error);
      }
    };
    fetchTechnologyNews();
  }, [page]);
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  return (
    <section className="mb-10 px-10">
      <h2 className="text-center uppercase mb-6 text-2xl"> Technology</h2>
      <ul>
        {news.map((article, index) => (
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
        ))}
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
  );
}

export default Technology;
