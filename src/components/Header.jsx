import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchNewsByCategory } from "./api";

function Header() {
  const [category, setCategory] = useState("home");
  const [openSidebar, setOpenSidebar] = useState(false);

  const displayNewsByCategory = async (category) => {
    setCategory(category);

    console.log("Displaying news by category");

    try {
      const articles = await fetchNewsByCategory(category);
      console.log("Fetched news data:", articles);
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
    }
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    // console.log("Sidebar toggled");
  };

  const sidebarClose = () => {
    setOpenSidebar(false);
    // console.log("Sidebar closed");
  };

  return (
    <header>
      <nav className="no-underline flex justify-between items-center py-8 px-10">
        <Link
          to="/"
          className="text-black font-geo uppercase font-bold text-lg sm:text-xl xl:text-2xl md:text-xl"
        >
          Our newspaper
        </Link>
        <div className="hidden sm:flex items-center gap-10 text-gray-800 text-xs">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-500 sm:border-b-2 border-b-solid border-transparent hover:text-gray-500 hover:border-b-2 hover:border-black"
          >
            Home
          </Link>
          <Link
            to="/politics"
            className="text-gray-800 hover:text-gray-500 sm:border-b-2 border-b-solid border-transparent hover:text-gray-500 hover:border-b-2 hover:border-black"
            onClick={() => {
              displayNewsByCategory("politics");
            }}
          >
            Politics
          </Link>
          <Link
            to="/opinion-pages"
            className="text-gray-800 hover:text-gray-500 sm:border-b-2 border-b-solid border-transparent hover:text-gray-500 hover:border-b-2 hover:border-black"
          >
            Opinion Pages
          </Link>
          <Link
            to="/work"
            className="text-gray-800 hover:text-gray-500 sm:border-b-2 border-b-solid border-transparent hover:text-gray-500 hover:border-b-2 hover:border-black"
          >
            Work with us
          </Link>
        </div>
        <button className="block sm:hidden" onClick={toggleSidebar}>
          <svg
            className="h-6 w-6 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 4h22v2H1V4zm22 5H1v2h22V9zm0 7H1v2h22v-2z"
            />
          </svg>
        </button>
      </nav>

      <aside
        className={`fixed inset-y-0 right-0 z-50 bg-white w-64 shadow-lg ${
          openSidebar ? "block" : "hidden"
        } sm:hidden`}
      >
        <div className="p-4">
          <button className="block" onClick={sidebarClose}>
            <svg
              className="h-6 w-6 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 5.41l-1.41-1.42L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59z"
              />
            </svg>
          </button>
          <div className="text-gray-800 pt-10">
            <Link
              to="/"
              className="block text-xl text-black"
              onClick={sidebarClose}
            >
              Home
            </Link>
            <Link
              to="/politics"
              className="block text-xl text-black pt-6"
              onClick={() => {
                displayNewsByCategory("politics");
                sidebarClose();
              }}
            >
              Politics
            </Link>
            <Link
              to="/opinion-pages"
              className="block text-xl text-black pt-6"
              onClick={sidebarClose}
            >
              Opinion Pages
            </Link>
            <Link
              to="/work"
              className="block text-xl text-black pt-6 border-b border-black pb-10"
              onClick={sidebarClose}
            >
              Work with us
            </Link>
            <p className="pt-10">
              &copy; 2024 Our Newspaper. All rights reserved.
            </p>
          </div>
        </div>
      </aside>

      <div className="flex flex-col items-center p-6">
        <h1 className="text-5xl mb-10 font-geo uppercase border-b border-gray-300">
          Our NewsPaper
        </h1>
        <nav className="border-b border-gray-700 flex-wrap justify-center hidden sm:flex">
          <Link
            to="/politics"
            className="border-b-2 border-b-solid border-transparent mx-8 text-gray-700 hover:bg-gray-300 hover:text-white"
            onClick={() => displayNewsByCategory("politics")}
          >
            Politics
          </Link>
          <Link
            to="/technology"
            className="border-b-2 border-b-solid border-transparent mx-8 text-gray-700 hover:bg-gray-300 hover:text-white"
            onClick={() => displayNewsByCategory("technology")}
          >
            Technology
          </Link>
          <Link
            to="/sports"
            className="border-b-2 border-b-solid border-transparent mx-8 text-gray-700 hover:bg-gray-300 hover:text-white"
            onClick={() => displayNewsByCategory("sports")}
          >
            Sports
          </Link>
          <Link
            to="/business"
            className="border-b-2 border-b-solid border-transparent mx-8 text-gray-700 hover:bg-gray-300 hover:text-white"
            onClick={() => displayNewsByCategory("business")}
          >
            Business
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
