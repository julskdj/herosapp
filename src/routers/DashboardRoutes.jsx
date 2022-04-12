import { Navbar } from "../components/ui/Navbar";
import MarvelScreen from "../components/Marvel/Marvel";
import DcScreen from "../components/DC/DcScreen";
import SearchScreen from "../components/Search/SearchScreen";
import { Routes, Route } from "react-router-dom";
import HeroScreen from "../components/Hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
