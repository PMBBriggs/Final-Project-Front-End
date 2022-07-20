import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./components/InfoPage";
import AdvancedSearch from "./components/AdvancedSearch";
import Search from "./components/Search";
import AuthContextProvider from "./context/AuthContextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/infopage/:id" element={<InfoPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/Advanced-Search" element={<AdvancedSearch />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
