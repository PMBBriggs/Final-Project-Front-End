import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
//import AdvancedSearch from "./components/AdvancedSearch";
import Search from "./components/Search";
import AuthContextProvider from "./context/AuthContextProvider";

import Profile from "./components/Profile";
import AllGamesRoute from "./routes/allGames";
import FilterContextProvider from "./context/FilterContextProvider";

function App() {
  return (
    <FilterContextProvider>
      <AuthContextProvider>
        <div className="App">
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/infopage/:id" element={<InfoPage />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wishlist" element={<AllGamesRoute />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </AuthContextProvider>
    </FilterContextProvider>
  );
}

export default App;
