import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newsEndpoint, API_KEY } from "./newsapi";

function SelectedNews() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { newsId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSelectedNews = async () => {
      const url = `${newsEndpoint}?apiKey=${API_KEY}&sources=${newsId}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setSelectedArticle(data.articles[0]);
        setLoading(false);
      } else {
        setSelectedArticle(null);
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {  
      setLoading(false);
    }, 2000);
    //console.log(newsId);
    fetchSelectedNews();

    return () => {
      clearTimeout(timeout);
    }
  }, [newsId]);

  return (
    <section className="p-10">
      {loading ?(
        <p className="text-2xl">Loading additional information...</p>
      ): selectedArticle ? (
        <>
          <h2 className="underline uppercase font-bold text-xl text-center">
            {selectedArticle.title}
          </h2>
          {selectedArticle.author && (
            <p className="text-red-700 uppercase font-bold text-center">
              Author: {selectedArticle.author}
            </p>
          )}
          {/* {selectedArticle.publishedAt && (
            <p>Publishing Date: {selectedArticle.publishedAt}</p>
          )} */}
          <img
            src={selectedArticle.urlToImage}
            alt={selectedArticle.title}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            className="p-10"
          />
          <p className="text-xl pb-5">{selectedArticle.description}</p>
          <div className="text-center">
            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-black text-white rounded-lg hover:bg-gray-600"
            >
              Read more
            </a>
          </div>
        </>
      ) : (
        <p className="text-2xl">No additional information available.</p>
      )}
    </section>
  );
}

export default SelectedNews;
