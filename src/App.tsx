import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import AdvancedSearch from "./components/AdvancedSearch";
import Search from "./components/Search";
import Wishlist from "./components/WishList";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/infopage/:id" element={<InfoPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Advanced-Search" element={<AdvancedSearch />} />
          <Route path="/Wish-List" element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
