import React from "react";
import people from "../img/people.svg";
import days from "../img/clc.svg";
import reviewer from "../img/str.svg";
import locat from "../img/lc.svg";
import prices from "../img/$1200.svg";
import "./card.css";
import { cardInfo } from "../../mock";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      img,
      icon,
      title,
      day,
      icon1,
      icon2,
      person,
      rating,
      review,
      icon3,
      location,
      price,
    } = this.props.data;
    return (
      <div className="card_all">
        <div className="card_image">
          <img width={410} height={350} src={img} alt="" />
        </div>
        <div className="card_description">
          <div className="size">
            <h5 class="title_style">
              {id}&nbsp;&#8226;&nbsp;
              {title}
            </h5>
          </div>
          <div className="card_icons">
            <p>
              <img src={days} alt="days" />
              &nbsp;{day}
            </p>
            <p>
              <img src={people} alt="days" />
              &nbsp;{person}
            </p>
            <p>
              <img src={reviewer} alt="days" />
              &nbsp;{rating}
              {review}
            </p>
            <br />
            <p>
              <img src={locat} alt="days" />
              &nbsp;{location}
            </p>
            <img className="price" src={prices} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
