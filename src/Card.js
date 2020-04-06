import React from "react";

const Card = ({ details }) => {
  console.log("card", details);
  return (
    <div>
      <h1>
        <b>Name : {details.name?.first} </b>
      </h1>
    </div>
  );
};

export default Card;
