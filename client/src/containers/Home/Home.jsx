import React from "react";
import Hero from "../../component/Hero/Hero";
import WellnessCard from "../../component/WellnessCard/WellnessCard";
import NavBar from "../../component/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <div className="row">
          <WellnessCard />
          <WellnessCard />
          <WellnessCard />
          <WellnessCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
