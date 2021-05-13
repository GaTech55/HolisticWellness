import React from "react";
import "./ArticleCard.css";

const ArticleCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 my-4 col-12" key="">
          <div className="card text-center">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://www.fillmurray.com/140/200"
                  className="card-img-top"
                  alt=""
                  height="200"
                  width="140"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h5 className="card-title">Service?</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Et, optio aut esse ipsum reprehenderit ipsa voluptatum amet
                    culpa suscipit facere excepturi, enim praesentium nemo
                    consequatur minima fugiat, eius aspernatur at.
                  </p>
                  <a href="" className="btn btn-secondary mx-2">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
