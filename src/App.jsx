import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import News from "./components/News.jsx";
import SelectedNews from "./components/Selected.jsx";
import PoliticsNews from "./components/Politics.jsx";
import Technology from "./components/Technology.jsx";
import Sports from "./components/Sports.jsx";
import Business from "./components/Business.jsx";
import Opinions from "./components/Opinion.jsx";
import Work from "./components/Work.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news/:newsId" element={<SelectedNews />} />
          <Route path="/politics" element={<PoliticsNews />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/opinion-pages" element={<Opinions />} /> 
          <Route path="/work" element={<Work />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
