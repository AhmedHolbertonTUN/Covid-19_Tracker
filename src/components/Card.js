import React from "react";
import "../styles.css";
import NumberFormat from "react-number-format";

function Card(props) {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <div className="content">
            <div className="img">
              <img src={props.image} alt="img" />
            </div>
            <div className="details">
              <span className="name">{props.title}</span>
              <div className="number">
                <NumberFormat
                  thousandSeparator={true}
                  value={props.number}
                  displayType={"text"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
