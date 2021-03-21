import React from "react";
import GridHeader from "../components/LandingPage/GridHeader";
import GridTable from "../components/LandingPage/GridTable";
import Header from "../components/LandingPage/Header";

const LandinPage = () => {
  return (
    <div className="p-4">
      <Header />
      <GridHeader />
      <GridTable />
    </div>
  );
};

export default LandinPage;
