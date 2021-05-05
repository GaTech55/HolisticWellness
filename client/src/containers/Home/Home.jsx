import React from 'react';
import Hero from '../../component/Hero/Hero'
import WellnessCard from '../../component/WellnessCard/WellnessCard'
const Home = () => {
    return (
        <div>
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