import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FavouritesPage from "./pages/FavouritesPage";
import { FavouritesProvider } from "./context/FavouritesContext";
import "./styles/App.css";
import Tabs from "./components/Tabs";

const App: React.FC = () => {
  return (
    <FavouritesProvider>
        <Tabs></Tabs> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
    </FavouritesProvider>
  );
};

export default App;
