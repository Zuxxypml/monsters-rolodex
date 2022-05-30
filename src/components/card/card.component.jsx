import React from "react";
import "./card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <div className="img-container">
      <img
        alt="Monsters"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        />
      </div>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
      <p>{props.monster.address.street}</p>
    </div>
  );
};
