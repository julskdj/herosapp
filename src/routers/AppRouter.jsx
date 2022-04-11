import React from "react";
import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/DC/DcScreen";
import MarvelScreen from "../components/Marvel/Marvel";
import SearchScreen from "../components/Search/SearchScreen";

const AppRouter = () => {
  return (
    <div>
      <h1>Welcome To React Router!</h1>
      <Routes>
        <Route path="/" element={<MarvelScreen/>}/>
        <Route path="/marvel" element={<DcScreen/>}/>
        <Route path="/search" element={<SearchScreen/>}/>
        <Route path="/about" />
      </Routes>
    </div>
  );
};

export default AppRouter;
