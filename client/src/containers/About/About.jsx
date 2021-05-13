import React from "react";
import NavBar from "../../component/NavBar/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <img
            src="https://res.cloudinary.com/banana-force/image/upload/c_scale,w_400/v1620867410/Keisha-600x850-1_dy78ss.jpg"
            alt="About"
            className="app-about"
          />
        </div>
        <div className="row">
          <h1>Keisha Carter-Brown, LCSW</h1>
          <p>
            Keisha Carter Brown holds a master’s degree in social work from
            Barry University in Miami, Florida. Prior to attending Barry
            University, Keisha completed her Bachelor of Arts in Human
            Development (with a minor in psychology) at Eckerd College. Keisha
            has continued her education by completing trainings in Holistic
            Nutrition as well as Health and Wellness to ultimately earn her
            certification as a Holistic Health Coach. Keisha has used the
            techniques of DBT (dialectical behavior therapy), motivational
            interviewing and cognitive behavior therapy. As a LCSW, her
            therapeutic approach focuses on person-centered and
            empowerment-focused therapies. According to Keisha’s view of
            counseling, the ultimate goal is to empower each client with the
            tools they need to improve their quality of life. Regarding Holistic
            Health coaching, Keisha believes that nutrition and lifestyle
            directly affect one’s mood and overall mental health. When seeking
            Holistic Health Coaching clients can expect to learn about the
            properties of food, how their bodies react to stress, exercise and
            the environment. During the coaching relationship, Keisha’s priority
            is to help the client meet their health and wellness goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
