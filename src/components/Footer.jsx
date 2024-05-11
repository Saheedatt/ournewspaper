import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="p-10 font-playfair">
        <div className="flex wrap justify-between">
          <div className="flex-1 p-4 max-w-40 box-border">
            <h2 className="font-geo text-xl">Our Newspaper</h2>
            <ul>
              <li>
                <Link to="/readers-center">Readers Center</Link>
              </li>
              <li>
                <Link to="/tools-services">Tools & Services</Link>
              </li>
              <li>
                <Link to="/our-contacts">Our Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 p-4 max-w-40 box-border">
            <h3>News</h3>
            <ul>
              <li>
                <Link to="/arts">Arts</Link>
              </li>
              <li>
                <Link to="/economy">Economy</Link>
              </li>
              <li>
                <Link to="/stocks">Stock Exchange</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 p-4 max-w-40 box-border">
            <h3>Opinion</h3>
            <ul>
              <li>
                <Link to="/">Unsolicited</Link>
              </li>
              <li>
                <Link to="/editorials">Editorials</Link>
              </li>
              <li>
                <Link to="/contribute">Contributors</Link>
              </li>
              <li>
                <Link to="/letters">Letters</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex">
            <a
              href="https://twitter.com/home"
              target="_blank"
              className="underline mr-3"
            >
              Twitter
            </a>
            <a href="#" target="_blank" className="underline mr-3">
              Instagram
            </a>
            <a
              href="https://github.com/Saheedatt/newsblog"
              target="_blank"
              className="underline"
            >
              Github
            </a>
          </div>
          <p className="pt-3">&copy; 2024 Our Newspaper. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
