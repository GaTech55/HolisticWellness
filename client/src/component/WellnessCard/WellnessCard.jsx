import React from 'react';
import "./WellnessCard.css";
import {Link} from "react-router-dom"

const WellnessCard = ({id,name,body,imgUrl, urlPath}) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 my-4 col-12" key={id}>
            <div className="card text-center">
            <Link to={urlPath}><img src={imgUrl} className="card-img-top" alt="" height="300" width="300" /></Link>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{body}</p>
                    <Link to={urlPath} className="btn btn-secondary mx-2">
                        Learn More
                        </Link>
                </div>
            </div>
        </div>

    );
};

export default WellnessCard;