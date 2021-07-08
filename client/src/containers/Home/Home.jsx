import React, {useState} from "react";
import Hero from "../../component/Hero/Hero";
import WellnessCard from "../../component/WellnessCard/WellnessCard";
import NavBar from "../../component/NavBar/NavBar";
import services from "../../assets/services.json";

const Home = () => {
  const {serviceInfo, setServicesInfo} = useState([services])
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <div className="row">
          {services.map((service) => {
            return <WellnessCard key={service.id} name={service.name} body={service.body} imgUrl={service.imgUrl} urlPath= {service.urlPath}/>
          })}
          {/* <WellnessCard />
          <WellnessCard />
          <WellnessCard />
          <WellnessCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
