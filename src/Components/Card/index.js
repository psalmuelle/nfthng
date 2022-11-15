import React from "react";
import "../../Assets/Styles/card.css"
import rating from "../../Assets/Images/rating.png"
import heartIcon from "../../Assets/Images/heart.svg"


export default function Card(props){
    return (
        <div className="card__container">
           <div className="image__container-card">
             <img src={props.imgSrc} alt="place" className="place__card-img"/>
             <img src={heartIcon} alt='bookmark' className="heart__icon" />
            </div>
            <div className="card__info">
                <p>Desert King</p>
                <p className="card__price">1MBT per night</p>
            </div>
            <div className="card__info">
                <p>2345km away</p>
                <p>available for 2weeks stay</p>
            </div>
            <img src={rating} alt="rating"/>
        </div>
    )
}